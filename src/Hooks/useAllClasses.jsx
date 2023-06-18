import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["class", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/class?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [cart, refetch];
};

export default useAllClasses;
