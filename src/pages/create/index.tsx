import React from 'react';
import NavBar from '../../components/NavBar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const CreatePage = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/');
  };

  return (
    <>
      <NavBar />
      <div style={{ width: '100vw', height: '100vh'}}>
        <Container component="main" maxWidth="xs" style={{marginTop: '12rem'}}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid black',
              borderRadius: 5,
              p: 4
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <MenuBookIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create Yearbook
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="class"
                label="Class Name"
                name="class"
                autoComplete="class"
                autoFocus
              />
              <FormControlLabel
                control={
                  <input
                    type="color"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      borderRadius: 4,
                      padding: 0,
                      height: 40
                    }}
                  />
                }
                label="Yearbook Color"
                sx={{
                  ml: 0,
                  mt: 2,
                  display: 'flex',
                  gap: 2
                }}
              />
              {/* Submit button */}
              <Link href="/">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3 }}
                >
                  Create Yearbook
                </Button>
              </Link>
              {/* Cancel button */}
              <Link href="/">
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 1, mb: 2 }}
                >
                  Cancel
                </Button>
              </Link>

            </Box>
          </Box>
        </Container>
      </div>
    </>
  )
};

export default CreatePage;
