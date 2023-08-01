import React, { useState } from 'react';
import './App.css';
import './Whatsapp'
import Login from './Login';
import Whatsapp from './Whatsapp';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <div className="app-body">
        {user ? (
          <>
            {/* Whatsapp*/}
            <Whatsapp/>
           
          </>
        ) : (
          // Show the login component if the user is not logged in
          <Login setUser={setUser} />
        )}
      </div>
    </div>
  );
}

export default App;

