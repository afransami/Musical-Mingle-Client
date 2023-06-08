import React, { useEffect, useState } from 'react';


const useAllUsers = () => {
    const [AllUsers, setAllUsers]= useState([])
    const [loading, setLoading]= useState(true)
    
    useEffect(()=>{
        fetch('http://localhost:5000/allUsers')
        .then (res=> res.json())
        .then (data =>{
            setAllUsers(data);
            setLoading(false);
            })

    },[])
    return [AllUsers, loading];
};

export default useAllUsers;