import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Button, IconButton } from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AttachFileSharpIcon from '@mui/icons-material/AttachFileSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import EmojiEmotionsSharpIcon from '@mui/icons-material/EmojiEmotionsSharp';
import MicSharpIcon from '@mui/icons-material/MicSharp';
import db from './firebase';
import firebase from 'firebase/app';

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const unsubscribe = db.collection('messages').orderBy('timestamp', 'asc').onSnapshot((snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if (input.trim() !== '') {
      db.collection('messages').add({
        text: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: 'Daiana'
      });

      setInput('');
    }
  };

  return (
    <div className='chat'>
      <div className='chat_header'>
        <AccountCircleSharpIcon />
        <div className='chat_headerInfo'>
          <h3>Narcisa</h3>
          <p>Accesat la {currentTime}</p>
        </div>
        <div className='chat_headerRight'>
          <IconButton><SearchSharpIcon /></IconButton>
          <IconButton><AttachFileSharpIcon /></IconButton>
          <IconButton><MoreVertSharpIcon /></IconButton>
        </div>
      </div>
      <div className='chat_body'>
        {messages.map((message) => (
          <p
            key={message.id}
            className={`chat_message ${message.data.user === 'Daiana' ? 'chat_reciever' : ''}`}
          >
          {/* <span className='chat_name'>{message.data.user}</span> */}
            {message.data.text}
            <span className='chat_timestamp'>{message.data.timestamp && new Date(message.data.timestamp?.toDate()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </p>
        ))}
      </div>
      <div className='chat_footer'>
        <form>
          <IconButton>
            <EmojiEmotionsSharpIcon />
          </IconButton>
          <input
            type='text'
            placeholder='Introduceți mesajul'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type='submit' onClick={sendMessage}>Trimite</Button>
          <IconButton>
            <MicSharpIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default Chat;

