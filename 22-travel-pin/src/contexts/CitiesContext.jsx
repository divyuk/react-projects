import { createContext } from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const Base_URL = "http://localhost:8000";
  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${Base_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There is some error", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Context should be inside Provider");
  return context;
}

export { CitiesProvider, useCities };
