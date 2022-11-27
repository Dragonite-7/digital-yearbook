import { NextFunction, Request, Response } from 'express';
import { pool } from '../data/db';
import { v4 as uuidv4 } from 'uuid';

export const addUser = async (
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  profile_picture: string
) => {
  const query = {
    text: 'INSERT INTO users(id, first_name,last_name, email, password,profile_picture) VALUES($1, $2, $3, $4, $5, $6)',
    values: [uuidv4(), first_name, last_name, email, password, profile_picture],
  };

  const userQuery = await findUserByEmail(email);
  if (userQuery?.length === 0) {
    try {
      const res = await pool.query(query);
      console.log('User added.');
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log('Unable to add user. Check your email address');
  }
};
export const findUserByEmail = async (email: string) => {
  const query = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  };

  try {
    const res = await pool.query(query);
    console.log('res email-->', res);
    return res.rows;
  } catch (err) {
    console.error(err);
  }
  return [
    {
      id: '0',
      name: 'J Doe',
      email: 'jdoe@zcorp.com',
      password: 'passwordz',
    },
  ];
};

export const readQuery = async (query: string) => {

  try {
    const res = await pool.query(query);
    return res.rows;
  } catch (err) {
    console.error(err);
  } 
}

export const getUsersFromUsersTable = async () => {
  const query = `
    SELECT * FROM users;
    `;
    
  return readQuery(query);
    
}
export const getUsers = async () => {
  const usersFromUsersTable = await getUsersFromUsersTable();
  const users = await usersFromUsersTable?.map(async (user) => {
   
    return {
      id: user.id,
      firstName: user.name,
      lastName:user.last_name,
      email: user.email,
      profilePicture : user.profile_picture 
    }
  })
  return users;   
}