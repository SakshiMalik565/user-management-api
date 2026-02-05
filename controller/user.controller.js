import {
  getUsersService,
  createUserService,
  updateUserService,
  partialUpdateService,
  deleteUserService
} from "../services/user.service.js";

// GET all users
export const getUsers = (req, res) => {
  const users = getUsersService();

  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
};

// CREATE user
export const createUser = (req, res) => {
  console.log("Controller: POST /users");
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      console.log("Controller: validation failed (create)");
      return res.status(400).json({
        success: false,
        message: "Name and Email are required"
      });
    }

    const newUser = createUserService(name, email);

    res.status(201).json({
      success: true,
      data: newUser
    });

  } catch (error) {
    console.log("Controller error:", error.message);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// FULL UPDATE (PUT)
export const updateUser = (req, res) => {
  console.log("Controller: PUT /users/:id");

  const { id } = req.params;
  const { name, email } = req.body;

  if (!name || !email) {
    console.log("Controller: validation failed (PUT)");
    return res.status(400).json({
      success: false,
      message: "Name and Email are required for full update"
    });
  }

  const updatedUser = updateUserService(id, name, email);

  if (!updatedUser) {
    console.log("Controller: user not found (PUT)", id);
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    data: updatedUser
  });
};

// PARTIAL UPDATE (PATCH)
export const partialUpdate = (req, res) => {
  console.log("Controller: PATCH /users/:id");

  const { id } = req.params;
  const { name, email } = req.body;

  const updatedUser = partialUpdateService(id, name, email);

  if (!updatedUser) {
    console.log("Controller: user not found (PATCH)", id);
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    data: updatedUser
  });
};

// DELETE user
export const dltUser = (req, res) => {
  console.log("Controller: DELETE /users/:id");

  const { id } = req.params;
  const isDeleted = deleteUserService(id);

  if (!isDeleted) {
    console.log("Controller: user not found (DELETE)", id);
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "User deleted successfully"
  });
};
