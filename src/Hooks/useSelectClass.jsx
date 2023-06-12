import { useEffect, useState } from "react";

const useSelectClass = () => {
  const [bookClass, setBookClass] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://music-shcool-server.vercel.app/class")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookClass(data);
        setLoading(false);
      });
  }, []);

  //    console.log({bookClass});
  return [bookClass, loading];
};

export default useSelectClass;
