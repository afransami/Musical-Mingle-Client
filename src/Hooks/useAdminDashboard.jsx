import React, { useEffect, useState } from 'react';

export const useAdminDashboard = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/admin?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.role === "admin") {
            console.log(data);
            setIsAdmin(true);
            setIsAdminLoading(false);
          }
        });
    }
  }, [email]);

  return [isAdmin, isAdminLoading];
};
