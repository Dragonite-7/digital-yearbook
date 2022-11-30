import React from 'react';
import { useRouter } from 'next/router';
import YearBookPage from '../../components/YearBookPage';
import YearBookFooter from '../../components/YearBookFooter';
import { styled } from '@mui/system';

const YearBookPageTop = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  padding: 0,
  margin: 0,
  listStyle: 'none',
  width: '100%',
  height: '85vh',
});
const YearBookFooterContent = styled('div')({
  padding: '1.5rem 0',
});
const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  const leftPageUsers = new Array(22).fill(0).map((_) => ({
    url: 'https://pbs.twimg.com/profile_images/1245784340497301506/blCWz932_400x400.png',
    name: 'Steve',
  }));
  const rightPageUsers = new Array(20).fill(0).map((_) => ({
    url: 'https://static.wikia.nocookie.net/minecraft/images/1/18/Mcsteve90dturn.png/revision/latest/top-crop/width/360/height/360?cb=20190603082759&path-prefix=tr',
    name: 'Steve',
  }));

  // TODO: Query the backend to get the correct yearbook data to replace this
  // mock data leveraging the pid.
  return (
    <div style={{ width: '100%', padding: '3rem' }}>
      <YearBookPageTop>
        <YearBookPage users={leftPageUsers} left={true} />
        <YearBookPage users={rightPageUsers} right={true} />
      </YearBookPageTop>
      <YearBookFooterContent>
        <YearBookFooter />
      </YearBookFooterContent>
    </div>
  );
};

export default Post;
