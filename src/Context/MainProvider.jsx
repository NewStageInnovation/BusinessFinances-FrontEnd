import React, { useState, useEffect } from "react";
import { getUser } from "../services/user";

// Contexto
import { ContextoMainProvider } from "../Pages/FormPage";

function MainProvider({children}) {
  const [user, setUser] = useState();

  const getUserData = async () => {
    const user = await getUser();
    setUser(user);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ContextoMainProvider.Provider value={{ user: user }}>
      {children}
    </ContextoMainProvider.Provider>
  );
}

export default MainProvider;
