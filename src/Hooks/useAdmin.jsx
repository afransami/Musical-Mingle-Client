// import { useEffect, useState } from "react";

// export const useAdmin = (email) => {

//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isAdminLoading, setIsAdminLoading] = useState(true);

//   useEffect(() => {
//     if (email) {
//       fetch(`https://music-shcool-server.vercel.app/admin?.email=${email}`)
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
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useAdmin = () => {
    const {user}= useAuth();
    const [axiosSecure]= useAxiosSecure()
    const {data:isAdmin, isLoading: isAdminLoading}= useQuery({
        queryKey: [ user?.email],
                queryFn: async () => {
                    const res= await  
                    axiosSecure.get(`/users/admin/${user?.email}`)
                    console.log('is admin response', res);
                    return res.data.admin;
                }                
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;









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