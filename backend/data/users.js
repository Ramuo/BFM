import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Alpha',
    email: 'alpha@gmail.com',
    password: bcrypt.hashSync('Alphabarry88@', 10),
    role: "admin"
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('Alphabarry88@', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('Alphabarry88@', 10),
  },
];

export default users;