import React from "react";
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appFirebase from '../src/credenciales';
import Login from '../src/components/Login';
import Home from '../src/components/Home';
import './App.css';

const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);
  onAuthStateChanged(auth, (usuarioFirebase)=> {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else {
      setUsuario(null)
    }
  })
  return (
    <div>
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/> }
    </div>
  );
}

export default App;
