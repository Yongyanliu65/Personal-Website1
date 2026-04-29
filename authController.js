const users = [];

exports.register = (req, res) => {
  const user = {
    id: Date.now(),
    email: req.body.email,
    password: req.body.password,
  };

  users.push(user);
  res.status(201).json({ message: "User registered", userId: user.id });
};

exports.login = (req, res) => {
  const user = users.find(
    u => u.email === req.body.email && u.password === req.body.password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.json({ message: "Login successful", userId: user.id });
};