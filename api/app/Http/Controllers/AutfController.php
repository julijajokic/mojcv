<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'email' => 'required|string|max:100|email|unique:users,email',
            
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
    
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            
        ]);
        $user->save();
    
        return response()->json([
            'data' => $user,
            'status' => 200
        ], 200);
    }
    

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string',
        ]);
    
        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    
        $user = User::where('name', $credentials['name'])
                    ->where('email', $credentials['email'])
                    ->first();

        if (!$user) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        return response()->json([
            'data' => $user,
            'status' => 200
        ], 200);
    }
    

    public function logout()
    {
        $user = auth()->user();
        // Ovde bi trebalo dodati logiku za revokaciju tokena ako se koristi API autentifikacija.
        $response = ['message' => 'Uspešno ste se izlogovali!', 'data' => null, 'status' => 200];
        
        return response()->json($response);
    }
}
