import { users } from "../data/users.js";

// Get all users
export const getUsersService = () => {
  console.log("Service: fetching users");
  return users;
};

// Create new user
export const createUserService = (name, email) => {
  const newUser = {
    id: Date.now().toString(),
    name,
    email
  };

  users.push(newUser);
  console.log("Service: user created", newUser.id);

  return newUser;
};

// Full update (PUT)
export const updateUserService = (id, name, email) => {
  const user = users.find(u => u.id === id);

  if (!user) {
    console.log("Service: user not found for PUT", id);
    return null;
  }

  user.name = name;
  user.email = email;

  console.log("Service: user updated (PUT)", id);
  return user;
};

// Partial update (PATCH)
export const partialUpdateService = (id, name, email) => {
  const user = users.find(u => u.id === id);

  if (!user) {
    console.log("Service: user not found for PATCH", id);
    return null;
  }

  if (name) user.name = name;
  if (email) user.email = email;

  console.log("Service: user updated (PATCH)", id);
  return user;
};

// Delete user
export const deleteUserService = (id) => {
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    console.log("Service: user not found for DELETE", id);
    return false;
  }

  users.splice(index, 1);
  console.log("Service: user deleted", id);

  return true;
};
