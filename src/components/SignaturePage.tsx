import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Link from 'next/link';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useMutation } from '@apollo/client';
import { gql } from 'apollo-server-core';
import { Router, useRouter } from 'next/router';

const YearBookPageContent = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  borderBottom: '1px solid black',
  padding: 20,
});
const GridItem = styled('div')({
  padding: '15px',
  display: 'inline',
  textAlign: 'center',
  lineHeight: '150px',
});

interface Props {
  // users might need to be updated...
  signatures: any[]; // User data to populate page
  left?: boolean | void;
  right?: boolean | void;
  thisUser: any;
  curYearbook: number;
  curUser: number;
}

const CREATE_SIGNATURE = gql`
  mutation CreateASignature($newSig: NewSignature!) {
    createSignature(input: $newSig) {
      signature_id
      signature
    }
  }
`;

const YearBookPage: React.FC<Props> = (props) => {
  const router = useRouter();

  const [createSignature, { data, loading, error }]: any =
    useMutation(CREATE_SIGNATURE);

  console.log(props);
  const handleSubmit = (event: any) => {
    // code to create new signature
    console.log('hello!');
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const signatureAttributes = {
      yearbook_id: props.curYearbook,
      user_id: props.curUser,
      signature: formData.get('signature'),
    };
    console.log(signatureAttributes);
    createSignature({ variables: { newSig: signatureAttributes } });
  };
  return (
    <YearBookPageContent
      style={{ backgroundColor: props.left ? '#f1f1f1' : '#fcfcfc' }}
    >
      {props.signatures.map((data, i) => {
        console.log('===', data);
        return (
          <GridItem key={'u' + i}>
            <span>
              <div>
                <Typography>{data.signature}</Typography>
              </div>
            </span>
          </GridItem>
        );
      })}
      <Box
        component='form'
        onSubmit={handleSubmit}
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
          name='signature'
          id='outlined-basic'
          label='Sign here!'
          variant='outlined'
          style={{ display: 'block' }}
        />
        <Grid container>
          <Grid item xs>
            <Button type='submit' variant='contained'>
              {'Submit 🚀'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </YearBookPageContent>
  );
};

export default YearBookPage;
