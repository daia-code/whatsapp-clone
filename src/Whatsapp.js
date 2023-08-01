import React from 'react'
import Chat from './Chat';
import Sidebar from './Sidebar';
import './Whatsapp.css'
function Whatsapp() {
  return (
    <div className="whatsapp">
    <div className="whatsapp-body">
          {/* Sidebar */}
          <Sidebar />
          {/* Chat */}
          <Chat />
      
    
      
    </div>
  </div>
  )
}

export default Whatsapp