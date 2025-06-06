<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AutfController extends Controller 
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'password' => 'required|string|min:8'
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
    
        $user = new User([
            'name' => $request->name,
            'password' => Hash::make($request->password)
        ]);
        $user->save();
    
         return response()->json([
            'data' => $user,
             'status'=>200
        ]);
    }
    
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'name' => 'required|name',
            'password' => 'required|string',
        ]);
    
        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    
        // $user = User::where('password', $request['password'])->firstOrFail();

        $user = Auth::user();

        $response = [
                'user' => $user,
             'status'=>200
            ];
        
        
      return response()->json($response);
    }
    
   
    public function logout()
    {
        $user ->user();
      

        $response = [        'message' => 'Uspešno ste se izlogovali!',        'data' => null,'status'=>200    ];

        return response()->json($response)->header('Content-Type', 'application/json');;
    }
}

