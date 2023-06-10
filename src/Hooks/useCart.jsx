import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const useCart = () => {
   
    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async () => {
            // const res = await fetch('http://localhost:5000/class')
            const res = await fetch(`http://localhost:5000/class?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]

}
export default useCart;