import { useState } from "react";

// Simulated authentication hook
const useAuth = () => {
  const [isAuthenticated] = useState(false); // toggle to true to simulate login
  return { isAuthenticated };
};

export default useAuth;
