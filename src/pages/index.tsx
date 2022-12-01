import React from 'react';
import styles from '../styles/Home.module.css';
import HomePage from './lading-page';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { gql, useQuery } from '@apollo/client';

let socket: any;

const GET_USER = gql`
  query getUser($user_id: Int!) {
    getUser(user_id: $user_id) {
      display_name
      picture_url
      username
      user_id
    }
  }
`;

export default function Home() {
  const [allOnlineUsers, setAllOnlineUsers] = useState<Set<string>>(new Set());
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [userIdCookie, setUserIdCookie] = useState<Number>(0);
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { user_id: userIdCookie },
  });

  // only open a socket if we have a username to send
  useEffect(() => {
    if (data) socketInitializer();
  }, [data]);

  useEffect(() => {
    setUserIdCookie(
      Number(
        document.cookie
          .split('; ')
          .find((row) => row.startsWith('user_id='))
          ?.split('=')[1]
      ) || 0
    );
  }, []);

  const socketInitializer = async () => {
    if (!userIdCookie) return;
    await fetch('/api/socket');
    socket = io();

    const myObj = {
      profilePic:
        'https://pbs.twimg.com/profile_images/1245784340497301506/blCWz932_400x400.png',
      userName: data ? data.getUser.display_name : 'STEEV',
    };

    socket.on('connect', () => {
      console.log('connected');

      socket.emit('joined', myObj);

      socket.on('joined', (newUser: any) => {
        console.log('Front end recieved new user join');
        if (allOnlineUsers.has(newUser.userName)) return; // don't repeat events

        setAllOnlineUsers((current) => current.add(newUser.userName));
        setOnlineUsers([...onlineUsers, newUser]);
        setTimeout(() => {
          setOnlineUsers([]);
        }, 3000);
      });
      // socket.on('disconnected', (deadUser: any) => {
      //   console.log('front end receieving someones disconnect');
      //   setAllOnlineUsers((current) => {
      //     const newSet = new Set(...current);
      //     newSet.delete(deadUser.userName);
      //     return newSet;
      //   });
      // });
    });
    // socket.on('disconnect', () => {
    //   console.log('user disconnected socket');
    //   socket.emit('disconnected', myObj);
    // });
  };

  return (
    <div className={styles.container}>
      <HomePage thisUser={data && data.getUser} onlineUsers={onlineUsers} />
    </div>
  );
}
