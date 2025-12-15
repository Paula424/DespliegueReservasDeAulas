import React, { useState } from 'react';
import Login from './components/Login';
import Aulas from './components/Aulas';
import Reservas from './components/Reservas';
import Navbar from './components/Navbar';
function App() {
  const [user, setUser] = useState(null);
  if (!user) return <Login setUser={setUser} />;
  return (
    <div>
      <Navbar user={user} />
      <Aulas />
      <Reservas />
    </div>
  );
}
export default App;