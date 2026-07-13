import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  function login(email) {
    const loggedInUser = {
      email,
    };

    setUser(loggedInUser);

    localStorage.setItem(
      "user",
      JSON.stringify(loggedInUser)
    );
  }

  function logout() {
    setUser(null);

    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;