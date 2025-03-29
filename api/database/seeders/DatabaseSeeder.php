<?php

namespace Database\Seeders;

use App\Models\Kupovina;
use App\Models\Nekretnina;
use App\Models\Tip;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       
 
        User::factory(10)->create();

 
        $user = User::create([
            'name' => 'kupac', 
            'email' => 'kupac@gmail.com']);
            // 'password' => Hash::make('kupac')]);

            $user = User::create([
                'name' => 'admin', 
                'email' => 'admin@gmail.com']);
                // 'admin' => 1, 
                // 'password' => Hash::make('admin')]);


     

    }
}
