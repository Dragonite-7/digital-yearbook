import React from 'react';
import type { NextPage } from 'next';
import LandingPage from '../../components/LandingPage';

interface Props {
  onlineUsers: any[];
}

const Home: NextPage<Props> = ({ onlineUsers }) => (
  <div>
    <LandingPage onlineUsers={onlineUsers} />
  </div>
);

export default Home;
