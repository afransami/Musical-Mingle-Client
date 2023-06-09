import React, { useEffect, useState } from 'react';

const useAllClasses = () => {

    const [allClass, setAllClass]= useState([])
    const [loading, setLoading]= useState(true)
    
            // all classes
        useEffect(()=>{
            fetch('http://localhost:5000/class')
            .then (res=> res.json())
            .then (data =>{
                setAllClass(data);
                setLoading(false);
                })
            },[])
            console.log(allClass);

    return [allClass, loading];
    
}
export default useAllClasses