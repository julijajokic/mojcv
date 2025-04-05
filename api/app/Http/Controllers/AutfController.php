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
            'email' => 'required|string|max:100|email|unique:users,email',
            'password' => 'required|string|min:8'
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
    
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        $user->save();
    
        $token = $user->createToken('auth_token')->plainTextToken;
    
        return response()->json([
            'data' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
            'status'=>200
        ]);
    }
    

    
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);
    
        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    
        $user = User::where('email', $request['email'])->firstOrFail();

        if($user->admin==1){
            $token = $user->createToken($user->email.'_AdminToken',['server:admin'])->plainTextToken;

            $response = [
                'user' => $user,
                'access_token' => $token,
                'token_type' => 'Bearer',
                'status'=>200,
                'role'=>'admin'
            ];
        }else{
            $token = $user->createToken('auth_token')->plainTextToken;

            $response = [
                'user' => $user,
                'access_token' => $token,
                'token_type' => 'Bearer',
                'status'=>200
            ];
        }
        
    
        return response()->json($response);
    }
    

    public function logout()
    {
        $user = auth()->user();
        $user->tokens()->delete();

        $response = [        'message' => 'Uspešno ste se izlogovali!',        'data' => null,'status'=>200    ];

        return response()->json($response);
    }
}
