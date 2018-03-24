import axios from 'axios';

export const setItem = (user) => {
  try {
    window.localStorage.setItem('TOKEN', user._id);
    window.localStorage.setItem('User', JSON.stringify(user));
  } catch (error) {
      throw new Error('Cannot set token on localstorage');
  }
};


export const isLoggedIn = () => {
  try {
    return window.localStorage && localStorage.getItem('TOKEN') ? true : false;
  } catch (error) {
    return false;
  }
};

export const login = (username) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:9000/login', {
      username
    }).then((response) => {
      if (response && response.data) {
        setItem(response.data); // use _id as token
        resolve(response.data);
      }
    }).catch(reject);
  });
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    try {
      window.localStorage && window.localStorage.removeItem('TOKEN');
      resolve();
    } catch (error) {
        const err = new Error('Cannot remove token on localstorage');
        reject(err);
    }
  });
}