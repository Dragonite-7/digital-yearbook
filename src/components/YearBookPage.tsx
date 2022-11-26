import React from 'react';

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
      <p>{props.users}</p>
    </div>
  )
};

export default YearBookPage;
