import React, { useEffect, useState } from 'react';



const usePopularClasses = () => {
    const [popularClass, setPopularClass]= useState([])
    const [loading, setLoading]= useState(true)
    
    useEffect(()=>{
        fetch('http://localhost:5000/class')
        .then (res=> res.json())
        .then (data =>{
            setPopularClass(data);
            setLoading(false);
            })
        },[])
        console.log(popularClass);
      



    return [popularClass, loading];
    
}
export default usePopularClasses