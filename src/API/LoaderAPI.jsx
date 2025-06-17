import { auth } from '../firebase/firebase.init';
export const LoaderAPI = (url) => {

  const token = auth.currentUser?.accessToken;

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
