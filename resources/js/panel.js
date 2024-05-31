// resources/js/app.js
import './bootstrap';
import { auth, db, analytics } from './firebase';

// Ahora puedes usar auth, db y analytics en tu aplicación
console.log('Firebase initialized:', { auth, db, analytics });
