import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const YearBookFooter: React.FC = () => {

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Button
        variant="outlined"
        onClick={() => alert('TODO')}
      >
        Previous
      </Button>
      <Link href="/">
        <Button variant="outlined">
          Home
        </Button>
      </Link>
      <Button
        variant="outlined"
        onClick={() => alert('TODO')}
      >
        Next
      </Button>
    </Grid>
  );
};

export default YearBookFooter;
