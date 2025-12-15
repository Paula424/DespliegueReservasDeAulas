import React from 'react';
export default function Navbar({ user }) {
  return (
    <nav>
      <h1>Reservas de Aulas</h1>
      {user && <p>Hola, {user.nombre}</p>}
    </nav>
  );
}