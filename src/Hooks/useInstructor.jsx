import { useEffect, useState } from "react";

export const useInstructor = (email) => {
  const [isInstructor, setIsInstructor] = useState(false);
  const [isInstructorLoading, setIsInstructorLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/instructor?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.role === "instructor") {
            console.log(data);
            setIsInstructor(true);
            setIsInstructorLoading(false);
          }
        });
    }
  }, [email]);

  return [isInstructor, isInstructorLoading];
};
