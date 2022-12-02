import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavBar from '../../components/NavBar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useMutation } from '@apollo/client';
import { gql } from 'apollo-server-core';
import { useRouter } from 'next/router';

const JOIN_YEARBOOK = gql`
  mutation JoinAYearbook($newJoin: JoinYearbookInput!) {
    joinYearbook(input: $newJoin) {
      yearbook_name
    }
  }
`;

const JoinPage = () => {
  const [userIdCookie, setUserIdCookie] = useState<Number>(0);
  const router = useRouter();
  const [joinYearbook, { data, loading, error }]: any =
    useMutation(JOIN_YEARBOOK);

  useEffect(() => {
    setUserIdCookie(
      Number(
        document.cookie
          .split('; ')
          .find((row) => row.startsWith('user_id='))
          ?.split('=')[1]
      ) || 0
    );
  }, []);

  useEffect(() => {
    if (!data) return;
    if (!data.joinYearbook) alert('Unsuccessful!');
    else {
      alert(`Success! You joined: ${data.joinYearbook.yearbook_name}`);
      router.push('/');
    }
  }, [data]);

  const handleJoin = (event: any) => {
    console.log('hello!');
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const joinAttributes = {
      user_id: userIdCookie,
      join_code: formData.get('code'),
    };
    console.log(joinAttributes);
    joinYearbook({ variables: { newJoin: joinAttributes } });
  };

  return (
    <>
      <NavBar></NavBar>
      <Box
        component='form'
        onSubmit={handleJoin}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
          justifyContent: 'center',
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          name='code'
          id='outlined-basic'
          label='Enter code...'
          variant='outlined'
          style={{ display: 'block' }}
        />
        {/* <Box> */}
        <Grid container>
          <Grid item xs>
            <Button type='submit' variant='contained'>
              Join
            </Button>
          </Grid>
          {/* <Grid item xs>
            <Button variant='outlined'>Nvm</Button>
          </Grid> */}
        </Grid>
        {/* </Box> */}
      </Box>
    </>
  );
};

export default JoinPage;
