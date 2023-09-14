// src/components/Register.js
import React, { useState } from 'react';
import { useAppContext } from '../AppState';
import '../Pag_Inicial.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { users, setUsers } = useAppContext(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = { name, email };
    
    setUsers([...users, newUser]);
    
    setName('');
    setEmail('');
  };

  return (
    <div className='pag_ini'>
    <h2>Página de Cadastro</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p></p>
      </div>
      <div>
        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
  );
};

export default Register;
