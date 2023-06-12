import React, { useEffect, useState } from "react";

const useAllInstructor = () => {
  const [AllInstructors, setAllInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  // all classes
  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((res) => res.json())
      .then((data) => {
        setAllInstructors(data);
        setLoading(false);
      });
  }, []);
  console.log(AllInstructors);

  return [AllInstructors, loading];
};

export default useAllInstructor;
