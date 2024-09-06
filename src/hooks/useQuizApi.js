import { useEffect, useState } from "react";
import axios from "../api/axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

const useQuizApi = ({url}) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token);
        
        const fetchData = () => {
            
            // axios.get(url)
            axios.request({
                headers: {
                    Authorization: `Bearer ${token}`
                },
                method: "GET",
                url: url
            })
            .then((res) => {

               console.log(res);
               
                setResponse(res)
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
        };
        fetchData();
    }, [url])

    return {response, error, loading}

}

export default useQuizApi