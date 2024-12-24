import React, { createContext, useEffect, useState, ReactNode } from 'react';

interface UsernameContextType {
  username: string;
  setUsername: (username: string) => void;
}

interface UsernameProviderProps {
  children: ReactNode;
}

export const UsernameContext = createContext<UsernameContextType>({
  username: '',
  setUsername: () => {},
});

export const UsernameProvider: React.FC<UsernameProviderProps> = ({ children }) => {
  const [username, setUsername] = useState('');

  const handleSetUsername = (newUsername: string) => {
    setUsername(newUsername);
    // Save the authentication token to a secure HTTP-only cookie or another persistent storage mechanism
    // Example: document.cookie = `authToken=${newAuthToken}; Secure; HttpOnly; SameSite=Strict`;
  };

  useEffect(() => {
    // Retrieve the authentication token from the secure HTTP-only cookie or persistent storage mechanism
    // Example: const authToken = document.cookie.split('; ').find(cookie => cookie.startsWith('authToken='));
    // Set the username if the authentication token exists
    // if (authToken) {
    //   const newUsername = parseUsernameFromToken(authToken); // Parse the username from the token
    //   setUsername(newUsername);
    // }
  }, []); // Run this effect only once when the component mounts

  return (
    <UsernameContext.Provider value={{ username, setUsername: handleSetUsername }}>
      {children}
    </UsernameContext.Provider>
  );
};
