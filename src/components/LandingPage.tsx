import React from 'react'
import NavBar from './NavBar'
import YearBookPreview from './YearBookPreview'
import Online from './Online';

// export default class LandingPage extends React.PureComponent<LadingPageProps> {
//   render() {
//     return (
//       <div>
//         <NavBar/>
//         <YearBookPreview yearbooks={[{title: 'PTRI 5', color: '#de817a'}, {title: 'PTRI 6', color: '#7adeaf'}, {title: 'PTRI 7', color: '#957ade'}]}/>
//       </div>
//     )    
//   }
// }

interface Props {
  onlineUsers: any[];
}

const Landing: React.FC<Props> = ({ onlineUsers }) => (
  <div>
    <Online onlineUsers={onlineUsers}/>
    <NavBar/>
    <YearBookPreview yearbooks={[{title: 'PTRI 5', color: '#de817a'}, {title: 'PTRI 6', color: '#7adeaf'}, {title: 'PTRI 7', color: '#957ade'}]}/>
  </div>
);

export default Landing;
