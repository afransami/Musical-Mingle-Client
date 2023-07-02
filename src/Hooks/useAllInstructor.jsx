import React, { useEffect, useState } from "react";

const useAllInstructor = () => {
  const [AllInstructors, setAllInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  // all classes
  useEffect(() => {
    fetch("https://music-shcool-server.vercel.app/class")
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
