import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import type { NextPage } from 'next';
import { blue } from '@mui/material/colors';
// import LandingPage from '../../components/LandingPage';

const YearBookButton = styled(Paper)(({ color }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 600,
  width: 400,
  backgroundColor: color,
  color: 'white',
  cursor: 'pointer',
  fontSize: 32,
  textShadow: '1px 1px 0px black'
}));

interface Props {
  yearbooks: {
    title: string;
    color: string;
  }[];
}

const YearBookPreview: React.FC<Props> = (props) => {

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      style={{
        marginTop: 200,
      }}
    >
      {
        props.yearbooks.map((data, i) => (
          <Grid item key={'yb' + i}>
            <YearBookButton elevation={3} color={data.color}>
              {data.title}
            </YearBookButton>
          </Grid>
        ))
      }
    </Grid>
  )
} 

export default YearBookPreview;
