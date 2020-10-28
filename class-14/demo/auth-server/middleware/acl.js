module.exports = (capability) => {
  // capability = create | update | delete | read (this will be from the route)

  return (req, res, next) => {
    // we expect req.user to be an object that is added from the bearer auth middleware
    // we need to check if the user have the right capability from the capabilities
    try {
      if (req.user.capabilities.includes(capability)) {
        next();
      } else {
        next('Access Denied');
      }
    } catch (e) {
      next(e.message);
    }
  };
};
