import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import type { NextPage } from 'next';
import { blue } from '@mui/material/colors';
// import Link from '@mui/material/Link';
import Link from 'next/link';
// import LandingPage from '../../components/LandingPage';
import Router from 'next/router';

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
  textShadow: '1px 1px 0px black',
}));

interface Props {
  yearbooks: {
    yearbook_name: string;
    year: string;
    color: string;
    yearbook_id: number;
  }[];
  thisUser: any;
}

const YearBookPreview: React.FC<Props> = (props) => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-around'
      alignItems='center'
      style={{
        marginTop: 200,
      }}
    >
      {props.yearbooks.map((data, i) => (
        <Grid item key={'yb' + i}>
          <span
            onClick={() => {
              Router.push(
                {
                  pathname: `yearbooks/${data.yearbook_id}`,
                  query: {
                    thisUser: JSON.stringify(props.thisUser),
                  },
                },
                `yearbooks/${data.yearbook_id}`
              );
            }}
          >
            {' '}
            {/* TODO: Dynamic implementation */}
            <YearBookButton elevation={3} color={data.color}>
              {data.yearbook_name}
            </YearBookButton>
          </span>
        </Grid>
      ))}
    </Grid>
  );
};

export default YearBookPreview;
