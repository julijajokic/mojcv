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
            
            'status'=>200
        ]);
    }
    

    
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'name' => 'required|name',
            'email' => 'required|string',
        ]);
    
      
    
        $user = User::where('email', $request['email'])->firstOrFail();

       

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

        return response()->json($response);
    }
}
