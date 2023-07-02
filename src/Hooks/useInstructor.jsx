import { useEffect, useState } from "react";

export const useInstructor = (email) => {
  const [isInstructor, setIsInstructor] = useState(false);
  const [isInstructorLoading, setIsInstructorLoading] = useState(true);

  
  useEffect(() => {
    if (email) {
      fetch(`https://music-shcool-server.vercel.app/instructor?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.role === "instructor") {
            setIsInstructor(true);
            setIsInstructorLoading(false);
          }
        })        
        .catch((error) => {
          console.error('Error:', error);
          setIsInstructor(false);
          setIsInstructorLoading(false);
        });
    }
  }, [email]);

  return [isInstructor, isInstructorLoading];
};

