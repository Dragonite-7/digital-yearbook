import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SignaturePage from '../../../../components/SignaturePage';
import YearBookFooter from '../../../../components/YearBookFooter';
import { styled } from '@mui/system';
import { gql, useQuery } from '@apollo/client';

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

// get signatures here
const GET_SIGNATURES = gql`
  query getSignatures($yearbook_id: Int!, $user_id: Int!) {
    getSignatures(yearbook_id: $yearbook_id, user_id: $user_id) {
      signature
    }
  }
`;

const Signatures = () => {
  const router = useRouter();
  const { uid, curYearbook } = router.query;
  let thisUser = {};
  if (typeof router.query.thisUser === 'string') {
    thisUser = JSON.parse(router.query.thisUser);
  }
  if (!uid) return <></>;

  console.log(uid, thisUser);
  const { data, loading, error } = useQuery(GET_SIGNATURES, {
    variables: { yearbook_id: Number(curYearbook), user_id: Number(uid) },
  });

  console.log('data', data);

  return (
    <div style={{ width: '100%', padding: '3rem' }}>
      <YearBookPageTop>
        <SignaturePage
          thisUser={thisUser}
          signatures={data ? data.getSignatures : []}
          left={true}
          curUser={Number(uid)}
          curYearbook={Number(curYearbook)}
        />
      </YearBookPageTop>
      <YearBookFooterContent>
        <YearBookFooter />
      </YearBookFooterContent>
    </div>
  );
};

export default Signatures;
