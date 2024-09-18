const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  });
  newUser.save()
  .then(user => console.log('User Created:', user))
  .catch(err => console.error('Error Creating User:', err));