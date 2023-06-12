import React, { useContext } from 'react';
// import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';


const useClassDelete = () => {
    // const [axiosSecure]= useAxiosSecure()

    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/class?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]

   
}

export default useClassDelete;