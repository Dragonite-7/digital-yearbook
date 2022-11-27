import React from 'react';
import { useRouter } from 'next/router';
import YearBookPage from '../../components/YearBookPage';
import YearBookFooter from '../../components/YearBookFooter';

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  const leftPageUsers = new Array(22)
    .fill(0)
    .map((_) => ({
      url: 'https://pbs.twimg.com/profile_images/1245784340497301506/blCWz932_400x400.png',
      name: 'Steve'
    }));
  const rightPageUsers = new Array(20)
    .fill(0)
    .map((_) => ({
      url: 'https://static.wikia.nocookie.net/minecraft/images/1/18/Mcsteve90dturn.png/revision/latest/top-crop/width/360/height/360?cb=20190603082759&path-prefix=tr',
      name: 'Steve'
    }));

  // TODO: Query the backend to get the correct yearbook data to replace this
  // mock data leveraging the pid.
  return (
    <div style={{
      width: '100vw',
    }}>
      <div style={{
        width: '100vw',
        height: 'calc(100vh - 40px)',
        display: 'flex',
      }}>
        <YearBookPage users={leftPageUsers} left={true}/>
        <YearBookPage users={rightPageUsers} right={true}/>
      </div>
      <div style={{
        height: 40
      }}>
        <YearBookFooter />
      </div>
    </div>
  )
}

export default Post
