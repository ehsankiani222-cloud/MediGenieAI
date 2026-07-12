import { createContext, useEffect, useState } from "react";
import claimsData from "../data/claims";

const ClaimContext = createContext();

export function ClaimProvider({ children }) {
  const [claims, setClaims] = useState(() => {
    const saved = localStorage.getItem("claims");
    return saved ? JSON.parse(saved) : claimsData;
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("claims", JSON.stringify(claims));
  }, [claims]);

  function addClaim(claim) {
    setClaims((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...claim,
      },
    ]);
  }

  return (
    <ClaimContext.Provider
      value={{
        claims,
        addClaim,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ClaimContext.Provider>
  );
}

export default ClaimContext;