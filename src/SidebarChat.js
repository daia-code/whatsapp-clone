import React, { useState, useEffect } from 'react';
import './SidebarChat.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import db from './firebase';

function SidebarChat({ addNewChat, roomName }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const createChat = () => {
    console.log('clicked');
    const roomName = prompt('Introduceti numele pentru chat');
    if (roomName) {
      db.collection('users').add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <div className='sidebarChat'>
      <AccountCircleSharpIcon />
      <div className='sidebarChat_info'>
        <h2>{roomName}</h2>
        <p>Ultimul mesaj la {currentTime}</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className='sidebarChat'>
      <h2>Adauga chat nou</h2>
    </div>
  );
}

export default SidebarChat;
