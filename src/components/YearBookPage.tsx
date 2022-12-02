import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

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
  users: any[]; // User data to populate page
  left?: boolean | void;
  right?: boolean | void;
}

const YearBookPage: React.FC<Props> = (props) => {
  return (
    <YearBookPageContent
      style={{ backgroundColor: props.left ? '#f1f1f1' : '#fcfcfc' }}
    >
      {props.users.map((data, i) => {
        return (
          <GridItem key={'u' + i}>
            <div>
              <Avatar
                alt='Student yearbook picture'
                src={
                  data.url ||
                  'https://pbs.twimg.com/profile_images/1245784340497301506/blCWz932_400x400.png'
                }
                style={{ height: 100, width: 100 }}
              />
            </div>
            <div>
              <Typography>{data.display_name}</Typography>
            </div>
          </GridItem>
        );
      })}
    </YearBookPageContent>
  );
};

export default YearBookPage;
