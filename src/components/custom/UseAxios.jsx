import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const useAxios = url => {
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await axios
      .get(url)
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading };
};
