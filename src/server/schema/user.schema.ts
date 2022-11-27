import { array, object, string, TypeOf } from 'zod';



export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: 'First Name is required',
    }),
    lastName: string({
      required_error: 'First Name is required',
    }),
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password too short - should be 6 chars minimum'),
  })
});

export const loginUserSchema = object({
  body: object({
    email: string({ required_error: 'Email is required' }).email(
      'Invalid email or password'
    ),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password too short - should be 6 chars minimum')
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>
export type LoginUserInput = TypeOf<typeof loginUserSchema>
