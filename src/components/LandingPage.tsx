import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import YearBookPreview from './YearBookPreview';
interface LadingPageProps {}

const GET_YEARBOOKS = gql`
  query getYearbooks($user_id: Int!) {
    getYearbooks(user_id: $user_id) {
      yearbook_id
      year
      yearbook_name
      join_code
    }
  }
`;

export default function LandingPage() {
  const [userIdCookie, setUserIdCookie] = useState<Number>(0);

  useEffect(() => {
    setUserIdCookie(
      Number(
        document.cookie
          .split('; ')
          .find((row) => row.startsWith('user_id='))
          ?.split('=')[1]
      ) || 0
    );
  }, []);

  const { data, loading, error } = useQuery(GET_YEARBOOKS, {
    variables: { user_id: userIdCookie },
  });

  return (
    <div>
      <NavBar />
      {data && data.getYearbooks.length ? (
        <YearBookPreview yearbooks={data ? data.getYearbooks : []} />
      ) : (
        <h3>No yearbooks yet!</h3>
      )}
    </div>
  );
}
