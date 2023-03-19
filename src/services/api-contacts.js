import instance from './api-auth';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE2NGUzMjNlZTFlMTAwMTRjOTE2M2MiLCJpYXQiOjE2NzkxOTMwMDV9.fz5B5ne8g5rw_TyF7jv0hyqwu-E1N9IPd9cIJf4bxLw';

export const getAllContacts = async () => {
  instance.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContact = async id => {
  const { data: result } = await instance.delete(`/contacts/${id}`);

  return result;
};

//https://mockapi.io/projects/640470e280d9c5c7bac7d9b6
/*
[
  {
    name: 'Rosie Simpson',
    number: '459-12-56',
    id: '1',
  },
  {
    name: 'Hermione Kline',
    number: '443-89-12',
    id: '2',
  },
  {
    name: 'Eden Clements',
    number: '645-17-79',
    id: '3',
  },
  {
    name: 'Annie Copeland',
    number: '227-91-26',
    id: '4',
  },
];

*/
