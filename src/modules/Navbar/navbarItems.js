import { nanoid } from 'nanoid';

const navbarItems = [
  {
    id: nanoid(),
    text: 'home',
    link: '/ ',
  },

  {
    id: nanoid(),
    text: 'register',
    link: '/register ',
  },

  {
    id: nanoid(),
    text: 'login',
    link: '/login  ',
  },

  {
    id: nanoid(),
    text: 'contacts',
    link: '/contacts',
  },
];

export default navbarItems;
