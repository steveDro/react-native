import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState();

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    console.log("response", response);

    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, error, loading, request };
};
