"use client";
import { createContext, useContext, useState } from "react";

const ContextSpinner = createContext({
  isPending: false,
  togglePending: (value: boolean) => {},
});

export const ContextSpinnerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isPending, setIsPending] = useState(false);
  const togglePending = (value: boolean) => setIsPending(value);

  return (
    <ContextSpinner.Provider value={{ isPending, togglePending }}>
      {children}
    </ContextSpinner.Provider>
  );
};

const useContextSpinner = () => useContext(ContextSpinner);

export default useContextSpinner;
