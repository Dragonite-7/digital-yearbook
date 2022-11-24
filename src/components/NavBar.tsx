import React from 'react'
import { styled } from '@mui/system';
import Link from 'next/link';
interface NavBarProps {

}

const NavBarStyle = styled('div')({
  boxShadow: 'none',
  display:'flex', 
  height: '70px',
  width: '100%',
  boxSizing: 'border-box',
  flexShrink: 0,
  position: 'fixed',
  zIndex: 1100,
  top: 0,
  left: 'auto',
  right: 0,
  backgroundColor: '#28282a',
  color: '#fff',
  alignItems: 'center',
  padding: '19px 30px',
});

const DigitalBookTitle = styled('div')({
  margin: 0,
  fontFamily: 'Roboto Condensed',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: 1.6,
  cursor:'pointer',
  textTransform: 'uppercase',
  textDecoration: 'none',
})
const DigitalSignInSignUp = styled('div')({
  margin: 0,
  flex:1,
  justifyContent:'flex-end',
  display:'flex',
  textAlign:'center',

})
const DigitalSignInUp = styled('div')({
  margin: 0,
  fontFamily: 'sans-serif',
  fontWeight: 700,
  lineHeight: 1.6,
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontSize: '16px',
  marginLeft: '24px',
  cursor:'pointer',
  '&:hover':{
    color: '#ff3366',
  }

})


export default class NavBar extends React.PureComponent<NavBarProps> {

    
  render() {
    return (
      <NavBarStyle >
        <div style={{flex: 1}}></div>
        <DigitalBookTitle><Link href="/">Digital year look</Link></DigitalBookTitle>
        <DigitalSignInSignUp>
          <DigitalSignInUp ><Link href="/signIn">sign in</Link></DigitalSignInUp>
          <DigitalSignInUp ><Link href="/signUp">sign up</Link></DigitalSignInUp>
        </DigitalSignInSignUp>
      </NavBarStyle>

    )
          
  }
}