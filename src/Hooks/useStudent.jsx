import { useEffect, useState } from "react";

export const useStudent = (email) => {
  const [isStudent, setIsStudent] = useState(false);
  const [isStudentLoading, setIsStudentLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://music-shcool-server.vercel.app/student?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.role === "student") {
            console.log(data);
            setIsStudent(true);
            setIsStudentLoading(false);
          }
        });
    }
  }, [email]);

  return [isStudent, isStudentLoading];
};
