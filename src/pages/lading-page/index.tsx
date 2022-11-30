import React from 'react'
import type { NextPage } from 'next';
import LandingPage from '../../components/LandingPage';

/* CLASS-BASED COMPONENT */
// export default class HomePage extends React.PureComponent<NextPage> {
//   render() {
//     return (
//       <div>
//         <LandingPage/>
//       </div>
//     );
//   }
// }

interface Props {
  onlineUsers: any[];
}

const Home: NextPage<Props> = ({ onlineUsers }) => (
  <div>
    <LandingPage onlineUsers={onlineUsers}/>
  </div>
);

export default Home;
