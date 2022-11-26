import React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface Props {
  // users might need to be updated...
  users: any; // User data to populate page
  left?: boolean | void;
  right?: boolean | void;
}

const YearBookPage: React.FC<Props> = (props) => {
  return (
    <div style={{
      width: '50%',
      border: '1px solid black',
      backgroundColor: props.left? '#f1f1f1' : '#fcfcfc',
      padding: 20,
    }}>
      {/* <Grid container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      > */}
        <div style={{display: 'flex'}}>
        {
          props.users.map((data, i) => {
            return (
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                key={'u' + i}
              >
                <Avatar alt="Student yearbook picture" src={data.url} />
                <Typography>{data.name}</Typography>
              </Grid>
            )
          })
        }
      </div>
    </div>
  )
};

export default YearBookPage;
