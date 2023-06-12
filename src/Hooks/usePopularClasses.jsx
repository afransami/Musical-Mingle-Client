import React, { useEffect, useState } from "react";

const usePopularClasses = () => {
  const [popularClass, setPopularClass] = useState([]);
  const [loading, setLoading] = useState(true);

  // limited 6 classes
  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((res) => res.json())
      .then((data) => {
        setPopularClass(data.slice(0, 6));
        setLoading(false);
      });
  }, []);

  return [popularClass, loading];
};
export default usePopularClasses;
