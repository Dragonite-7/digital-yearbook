import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from '../../components/NavBar';
import { useRouter } from 'next/router';
import SignInAuth from './signin';
import { getCsrfToken } from 'next-auth/react';
import { getProviders } from 'next-auth/react';
import { gql, useLazyQuery } from '@apollo/client';

const theme = createTheme();
interface SignInProps {
  csrfToken: any;
}

const GET_USER = gql`
  query getUser($username: String!) {
    getUser(username: $username) {
      username
      password
    }
  }
`;

export default function SignIn({ csrfToken }) {
  const router = useRouter();

  const [getUser, { loading, error, data }] = useLazyQuery(GET_USER);
  const [password, setPassword] = useState(null);

  // this is obviously bad practice
  useEffect(() => {
    console.log(data);
    if (!data) return;
    if (!data.getUser) alert('Username does not exist');
    else {
      // check password against submitted password
      if (data.getUser.password === password) {
        console.log('password match');
        // allow signin
        router.push('/');
      } else {
        alert('Username or password incorrect!');
        console.log('password fail');
        console.log(data.getUser.password, password);
        setPassword(null);
      }
    }
  }, [data]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userInput = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    setPassword(userInput.password);
    getUser({ variables: { username: userInput.username } });
  };

  const providers = [
    {
      name: 'github',
      id: '001',
    },
    // {
    //   name: 'github',
    //   id: '002',
    // },
  ];

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container component='main' maxWidth='xs' style={{ marginTop: '12rem' }}>
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
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            method='post'
            noValidate
            sx={{ mt: 1 }}
            action='/api/auth/signin/email'
            onSubmit={handleSubmit}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <SignInAuth />
      </Container>
    </ThemeProvider>
  );
}
