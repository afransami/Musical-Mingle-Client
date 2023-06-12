import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["class", user?.email, user?.className],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/class");

      return res.json();
    },
  });
  console.log({ cart });

  return [cart, refetch];
};
export default useCart;
