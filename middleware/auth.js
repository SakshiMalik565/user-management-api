let success = true;

// Auth middleware
export const checkAuth = (req, res, next) => {
  if (!success) {
    console.log("Middleware: auth failed");
    return res.status(401).json({
      success: false,
      message: "Unauthorized"
    });
  }

  console.log("Middleware: auth passed");
  next();
};

// Create user DTO
export const createUserDTO = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    console.log("Middleware: createUserDTO failed");
    return res.status(400).json({
      success: false,
      message: "Name and Email are required"
    });
  }

  next();
};

// Validate user ID
export const validateUser = (req, res, next) => {
  const { id } = req.params;

  if (!id || id.length < 5) {
    console.log("Middleware: invalid user ID");
    return res.status(400).json({
      success: false,
      message: "Invalid User ID"
    });
  }

  next();
};

// Update user DTO
export const updateUserDTO = (req, res, next) => {
  const { name, email } = req.body;

  if (!name && !email) {
    console.log("Middleware: updateUserDTO failed");
    return res.status(400).json({
      success: false,
      message: "At least one field (name or email) is required for update"
    });
  }

  next();
};
