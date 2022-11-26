import React from 'react'
import NavBar from './NavBar'
import YearBookPreview from './YearBookPreview'
interface LadingPageProps {

}

export default class LandingPage extends React.PureComponent<LadingPageProps> {
  
  render() {
    return (
      <div>
        <NavBar/>
        <YearBookPreview yearbooks={[{title: 'PTRI 5', color: '#de817a'}, {title: 'PTRI 6', color: '#7adeaf'}, {title: 'PTRI 7', color: '#957ade'}]}/>
      </div>
    )
        
  }
}