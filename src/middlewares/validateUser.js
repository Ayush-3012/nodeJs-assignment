// ValidateUser middleware => middleware/validateUser.js
const validateUser = (req, res, next) => {
  const { firstName, lastName, hobby } = req.body;
  if (!firstName || !lastName || !hobby) {
    return res
      .status(400)
      .json({
        error: "All fields (id, firstName, lastName, hobby) are required",
      });
  }
  next();
};

export default validateUser;
