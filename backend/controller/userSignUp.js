async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({
        message: "Please provide an email",
        error: true,
        success: false,
      });
    }

    // Validate password
    if (!password) {
      return res.status(400).json({
        message: "Please provide a password",
        error: true,
        success: false,
      });
    }

    // Validate name
    if (!name) {
      return res.status(400).json({
        message: "Please provide a name",
        error: true,
        success: false,
      });
    }

    // If all fields are provided, proceed with user registration logic (not implemented here)
    
  } catch (err) {
    res.status(500).json({
      message: err.message, // Send readable error message
      error: true,
      success: false,
    });
  }
}
