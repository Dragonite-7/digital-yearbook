import React from 'react';
import { useRouter } from 'next/router';
import YearBookPage from '../../components/YearBookPage';
import YearBookFooter from '../../components/YearBookFooter';

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

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
        <YearBookPage users="Left" left={true}/>
        <YearBookPage users="Right" right={true}/>
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
