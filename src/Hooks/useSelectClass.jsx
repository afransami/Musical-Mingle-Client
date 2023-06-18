import { useEffect, useState } from "react";

const useSelectClass = () => {
  const [bookClass, setBookClass] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/class")
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
