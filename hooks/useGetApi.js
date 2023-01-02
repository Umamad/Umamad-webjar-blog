import { useState, useEffect, useCallback } from "react";

import api from "../utils/axios.config";

function useGetApi(route) {
  //? loading state
  const [loading, setLoading] = useState(true);

  //? main data
  const [data, setData] = useState(null);

  //? error object
  const [error, setError] = useState(null);

  //? request function
  const request = async () => {
    setLoading(true);
    try {
      const result = await (await api.get(route)).data;
      setData(result);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  //? make request
  useEffect(() => {
    request();
  }, []);

  return { data, loading, error };
}

export default useGetApi;
