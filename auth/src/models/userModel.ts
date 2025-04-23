import { t } from "elysia";

const users: User[] = []; // Mock User DB

const defaultPermissions = [
  "read:users",
  "create:users",
  "read:data",
  "create:data",
  "write:data",
  "delete:data",
];

/**
 * User Data Transfer Object
 */
export const UserDTO = {
  // ToDo: implement this using project database later. Currently, we are just using a users array to implement the logic
  findUserByEmail: (email: string) => {
    return users.find((user) => user.email === email);
  },

  createUser: async ({
    email,
    password,
    firstName,
    lastName,
  }: UserModelForSignup): Promise<User> => {
    const hashedPassword = await Bun.password.hash(password);

    const newUser: User = {
      id: users.length + 1,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      permissions: [...defaultPermissions],
    };

    users.push(newUser);
    return newUser;
  },

  verifyPassword: async (password: string, hash: string) => {
    return await Bun.password.verify(password, hash); // this verify function will just check if password and hash match
  },
  findUserById: (id: number): User | undefined => {
    return users.find((user) => user.id === id);
  },
};

export const userModelForSignup = t.Object({
  email: t.String(),
  password: t.String(),
  firstName: t.String(),
  lastName: t.String(),
});
export const userModelForLogin = t.Object({
  email: t.String(),
  password: t.String(),
});

export type UserModelForSignup = typeof userModelForSignup.static;

export type User = typeof userModel.static;

export const userModel = t.Object({
  id: t.Number(),
  email: t.String(),
  password: t.String(),
  firstName: t.String(),
  lastName: t.String(),
  permissions: t.Array(t.String()),
});
