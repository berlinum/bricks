import { useState, useCallback } from 'react';

const storageName = 'userData';

const emptyUserData = {
  token: null,
  userId: null,
};

function readUserDataFromStorage() {
  try {
    const data = JSON.parse(localStorage.getItem(storageName));
    return data || emptyUserData;
  } catch (error) {
    return emptyUserData;
  }
}

function writeUserDataToStorage(userData) {
  localStorage.setItem(storageName, JSON.stringify(userData));
}

export const useAuth = () => {
  const userData = readUserDataFromStorage();
  const [token, setToken] = useState(userData.token);
  const [userId, setUserId] = useState(userData.userId);

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);
    writeUserDataToStorage({ userId: id, token: jwtToken });
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  return { login, logout, token, userId };
};
