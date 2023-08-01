import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import DonutLargeSharpIcon from '@mui/icons-material/DonutLargeSharp';
import ChatSharpIcon from '@mui/icons-material/ChatSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { IconButton } from '@mui/material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import SidebarChat from './SidebarChat';
import db from './firebase';

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch the room names from the database
    const unsubscribe = db.collection('users').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    // Unsubscribe from the snapshot when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <AccountCircleSharpIcon />
        <div className='sidebar-headerRight'>
          <IconButton>
            <DonutLargeSharpIcon />
          </IconButton>
          <IconButton>
            <ChatSharpIcon />
          </IconButton>
          <IconButton>
            <MoreVertSharpIcon />
          </IconButton>
        </div>
      </div>

      <div className='sidebar-search'>
        <IconButton><SearchSharpIcon /></IconButton>
        <input placeholder='Cauta sau incepe o noua conversatie' type='text'></input>
      </div>

      <div className='sidebar-chats'>
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} roomName={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
