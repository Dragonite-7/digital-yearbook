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
        <YearBookPreview yearbooks={[{title: 'PTRI 5', color: 'red'}, {title: 'PTRI 6', color: 'green'}, {title: 'PTRI 7', color: 'blue'}]}/>
      </div>
    )
        
  }
}