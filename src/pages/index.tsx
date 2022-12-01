import React from 'react';
import styles from '../styles/Home.module.css';
import HomePage from './lading-page';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket: any;

export default function Home() {
  useEffect(() => {
    socketInitializer();
  }, []);

  const [onlineUsers, setOnlineUsers] = useState([]);

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io();

    socket.on('connect', () => {
      console.log('connected');

      socket.emit('joined', {
        profilePic:
          'https://pbs.twimg.com/profile_images/1245784340497301506/blCWz932_400x400.png',
        userName: 'Steve',
      });
      socket.on('joined', (newUser: any) => {
        console.log('Front end recieved new user join');
        setOnlineUsers([...onlineUsers, newUser]);
        setTimeout(() => {
          setOnlineUsers([])
        }, 3000);
      });
    });
  };

  return (
    <div className={styles.container}>
      <HomePage onlineUsers={onlineUsers} />
    </div>
  );
}
