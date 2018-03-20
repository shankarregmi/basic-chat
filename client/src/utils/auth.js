export const setToken = (token) => {
  try {
    window.localStorage && window.localStorage.setItem('TOKEN', token);
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
  setToken('somefaketoken');
}

export const logout = () => {
  try {
    window.localStorage && window.localStorage.removeItem('TOKEN');
  } catch (error) {
      throw new Error('Cannot remove token on localstorage');
  }
}