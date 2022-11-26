import React from 'react'
import type { NextPage } from 'next';
import LandingPage from '../../components/LandingPage';

export default class HomePage extends React.PureComponent<NextPage> {
    
  render() {
    return (
      <div>
        <LandingPage/>
      </div>
    );
  }
}
