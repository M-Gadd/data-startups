import api from "../api";
import { useState, useEffect } from "react";

export const useStartups = () => {
  const [startups, setStartups] = useState(Array);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await api.getStartups();
    setStartups(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { startups, isLoading };
};
