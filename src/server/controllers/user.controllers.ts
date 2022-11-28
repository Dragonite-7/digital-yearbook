import { NextFunction, Request, Response } from 'express';
import { pool } from '../data/db';
import { v4 as uuidv4 } from 'uuid';


export const createUser = async ( req:any, res: any ) => {
  const {first_name, last_name, email, password, profile_picture} = req.body;
  const display_name = `${first_name} ${last_name}`;
  const username = email;
  const query = {
    text: 'INSERT INTO users(user_id, username,password, display_name,  profile_picture) VALUES($1, $2, $3, $4)',
    values: [uuidv4(),  username,password, display_name, profile_picture],
  };
  const response = await pool.query(query,[uuidv4(),username,password, display_name, profile_picture]);
  console.log('response-->', response)
  res.locals.status = 'Successfully created!';
  // return next();
  // const userQuery = await findUserByEmail(email);
  // if (userQuery?.length === 0) {
  //   try {
  //     const res = await pool.query(query);
  //     console.log('User added.');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // } else {
  //   console.log('Unable to add user. Check your email address');
  // }
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
      username: user.username,
      email: user.email,
      profilePicture : user.picture_url
    }
  })
  return users;   
}