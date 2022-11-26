import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavBar from '../../components/NavBar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const JoinPage = () => {

  return (
    <>
      <NavBar></NavBar>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
          justifyContent: 'center'
        }}
        noValidate
        autoComplete="off"
        >
          <TextField id="outlined-basic" label="Enter code..." variant="outlined" style={{ display: 'block'}} />
          <Box>
            <Grid container>
              <Grid item xs>
                <Button variant="contained">Join</Button>
              </Grid>
              <Grid item xs>
                <Button variant="outlined">Nvm</Button>
              </Grid>
            </Grid>
          </Box>
      </Box>
    </>
  )
};

export default JoinPage;
