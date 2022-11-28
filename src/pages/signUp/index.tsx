import * as React from 'react';
import {  gql, useMutation } from '@apollo/client';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from '../../components/NavBar';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import AlertDialogError from '../../components/notification/error';


function Copyright(props:any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.google.com">
        MyDearBook
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      username
      password
      display_name
      picture_url
    }
  }
`;


const baseurl = 'http://localhost:3001/api/' || ''

export default function Register() {
  const router = useRouter();
  const [error, setError] = React.useState('')
  const [open, setOpen] = React.useState(false);

  const [createUser] = useMutation(CREATE_USER_MUTATION);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const variables = {
  //     input:{
  //       username: data.get('email'),
  //       password: data.get('password'),
  //       display_name: `${data.get('firstName')} ${data.get('lastName')}`,
  //       picture_url: 'picture_url',
  //     }
  //   };
  //   console.log('variable-->', variables)
  //   createUser({variables})
  //   console.log('createUser-->', createUser)
  //   router.push('/signIn');
  // };
 
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const variables = {
      
      username: data.get('email'),
      password: data.get('password'),
      display_name: `${data.get('firstName')} ${data.get('lastName')}`,
      picture_url: 'picture_url',
      
    };
    fetch(`${baseurl}createUser`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(variables),
    }).then((res) => res.json())
      .then(data=>{
        console.log('data-->', data)
        if(data.status === 400){
          setError(data.error)
          setOpen(true)
        }else {
          router.push('/signIn');
        }
      })
      .catch(error=> console.log('error->', error))
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dialog = (
    <AlertDialogError open={open} handleClose={handleClose} error = {error}/>
  )

  return (
    <ThemeProvider theme={theme}>
      {open && dialog }
      <NavBar/>
      <Container component="main" maxWidth="xs" style={{marginTop: '12rem'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}