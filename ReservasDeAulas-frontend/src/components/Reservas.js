import React, { useEffect, useState } from 'react';
import { getReservas } from '../api';
export default function Reservas() {
  const [reservas, setReservas] = useState([]);
  useEffect(() => {
    getReservas().then(res => setReservas(res.data));
  }, []);
  return (
    <div>
      <h2>Reservas</h2>
      <ul>
        {reservas.map(r => (
          <li key={r.id}>{r.aula?.nombre} - {r.fecha} - {r.motivo}</li>
        ))}
      </ul>
    </div>
  );
}