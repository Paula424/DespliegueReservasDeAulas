import React, { useEffect, useState } from 'react';
import { getAulas } from '../api';
export default function Aulas() {
  const [aulas, setAulas] = useState([]);
  useEffect(() => {
    getAulas().then(res => setAulas(res.data));
  }, []);
  return (
    <div>
      <h2>Aulas</h2>
      <ul>
        {aulas.map(aula => (
          <li key={aula.id}>{aula.nombre} - Capacidad: {aula.capacidad}</li>
        ))}
      </ul>
    </div>
  );
}