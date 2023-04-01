import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'



const useGetSingleProductData = (url) => {

    const [data,setData] = useState([]);

    const [loading,setLoading] = useState(false);

    const [error,setError] = useState(false);

    useEffect(() => {

        setLoading(true);

        axios.get(url).then((res) => {

            setLoading(false);
            setData(res.data);

        } ).catch((err) =>{

            setLoading(false);
            setError(true);

        })

    },[url]);


    return [data,loading,error];


}

export default useGetSingleProductData