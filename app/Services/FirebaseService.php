<?php

namespace App\Services;

use Kreait\Firebase\Database;

class FirebaseService
{
    protected $database;

    public function __construct(Database $database)
    {
        $this->database = $database;
    }

    public function getDatabase()
    {
        return $this->database;
    }

    public function createAvisoInFirebase($aviso)
    {
        $newAvisoRef = $this->database->getReference('avisos')->push([
            'texto' => $aviso->texto,
            'tipo' => $aviso->tipo
        ]);

        return $newAvisoRef->getKey(); // Retorna la clave del aviso creado en Firebase
    }
}

// use Kreait\Firebase\ServiceAccount;

// class FirebaseService
// {
//     protected $database;

//     public function __construct()
//     {
//         // Cambia la ruta del archivo JSON según sea necesario
//         $serviceAccount = ServiceAccount::fromJsonFile(storage_path('app/montserrat-express-54f1190eb699.json'));

//         $firebase = (new Factory)
//             ->withServiceAccount($serviceAccount)
//             ->withDatabaseUri('https://montserrat-express-default-rtdb.europe-west1.firebasedatabase.app')
//             ->create();

//         $this->database = $firebase->getDatabase();
//     }

//     public function getDatabase()
//     {
//         return $this->database;
//     }
// }

// use Kreait\Firebase\Factory;
// use Kreait\Firebase\ServiceAccount;

// class FirebaseService
// {
//     protected $database;

//     public function __construct()
//     {
//         // Replace with the actual path to your service account JSON file
//         $serviceAccountPath = storage_path(env('FIREBASE_CREDENTIALS')); // Use env() to get the value

//         // Validate the existence of the service account file
//         if (!file_exists($serviceAccountPath)) {
//             throw new Exception("Firebase service account file not found at: " . $serviceAccountPath);
//         }

//         try {
//             // Create a ServiceAccount instance from the JSON file
//             $serviceAccount = ServiceAccount::fromJsonFile($serviceAccountPath);

//             // Create a Firebase Factory instance with service account and database URI
//             $factory = (new Factory)
//                 ->withServiceAccount($serviceAccount)
//                 ->withDatabaseUri('https://montserrat-express-default-rtdb.europe-west1.firebasedatabase.app');

//             // Create a Firebase instance
//             $firebase = $factory->create();

//             // Get a reference to the Realtime Database instance
//             $this->database = $firebase->getDatabase();
//         } catch (Exception $e) {
//             throw new Exception("Error connecting to Firebase: " . $e->getMessage());
//         }
//     }

//     public function getDatabase()
//     {
//         return $this->database;
//     }
// }
