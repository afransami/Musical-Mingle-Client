import { useEffect, useState } from "react";

export const useStudent = (email) => {

  const [isStudent, setIsStudent] = useState(false);
  const [isStudentLoading, setIsStudentLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://music-shcool-server.vercel.app/student?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
          if (data.role === "Student") {
            console.log(data);
            setIsStudent(true);
            setIsStudentLoading(false);
          }
        });
    }
  }, [email]);
  
  return [isStudent, isStudentLoading];
};

// import { useEffect, useState } from "react";

// export const useAdmin = (email) => {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isAdminLoading, setIsAdminLoading] = useState(true);
//   useEffect(() => {
//     if (email) {
//       fetch(`https://music-shcool-server.vercel.app/admin?email=${email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.role === "Admin") {
//             console.log(data);
//             setIsAdmin(true);
//             setIsAdminLoading(false);
//           }
//         });
//     }
//   }, [email]);
//   return [isAdmin, isAdminLoading];
// };