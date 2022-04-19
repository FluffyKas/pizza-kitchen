import React, { useContext, useEffect } from "react";
import { useState } from "react";

const PizzaContext = React.createContext();

export function PizzaProvider({ children }) {
  const [newPizza, setNewPizza] = useState({ base: "", toppings: [] });

  return (
    <PizzaContext.Provider value={{ newPizza, setNewPizza }}>
      {children}
    </PizzaContext.Provider>
  );
}

export function usePizza() {
  return useContext(PizzaContext);
}
