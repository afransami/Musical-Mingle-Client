import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const useClassDelete = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["class", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://music-shcool-server.vercel.app/class?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [cart, refetch];
};

export default useClassDelete;
