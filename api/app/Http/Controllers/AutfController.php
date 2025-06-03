<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AutfController extends Controller {

    
 
    
   
    
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'password' => 'required|string|min:6|max:100',
        ]);
    
        if ($validator->fails()) {
            return response('Greška u validaciji.', 400);
        }
    
        $user = new User([
            'name' => $request->name,
            'password' => Hash::make($request->password),
        ]);
        $user->save();
    
        return response($user->name, 200);
    }
    
        
        


    

    
    public function login(Request $request)
    {
        // Validacija ulaznih podataka
        $request->validate([
            'name' => 'required|string',
            'password' => 'required|string',
        ]);
    
        // Pronađi korisnika po imenu (ili email, zavisi šta koristiš)
        $user = User::where('name', $request->name)->first();
    
        if (!$user) {
            return response('Korisnik nije pronađen.', 404);
        }
    
        // Proveri lozinku (unesena vs. heširana u bazi)
        if (!Hash::check($request->password, $user->password)) {
            return response('Pogrešna lozinka.', 401);
        }
    
        // Ako je sve ok, vrati npr. ime korisnika kao potvrdu
        return response( $user->name, 200);
    }
    
   
    

    public function logout()
    {
        $user ->user();
      

        $response = [        'message' => 'Uspešno ste se izlogovali!',        'data' => null,'status'=>200    ];

        return response()->json($response)->header('Content-Type', 'application/json');;
    }
}
