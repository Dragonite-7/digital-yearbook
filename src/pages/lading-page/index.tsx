import React from 'react';
import type { NextPage } from 'next';
import LandingPage from '../../components/LandingPage';

interface Props {
  onlineUsers: any[];
  thisUser: any;
}

const Home: NextPage<Props> = ({ thisUser, onlineUsers }) => (
  <div>
    <LandingPage thisUser={thisUser} onlineUsers={onlineUsers} />
  </div>
);

export default Home;
