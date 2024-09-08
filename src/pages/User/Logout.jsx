import { Button } from 'antd'
import React from 'react'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToRevisedQuiz } from '../../redux/services/QuizSlice'
import { LogoutOutlined } from '@ant-design/icons'

const Logout = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleLogout = async () =>{

   

        try {
            const token = localStorage.getItem('token')

        if(token){
            await axios.post('/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                }

            );            
        }
      
        dispatch(addToRevisedQuiz([]))
            // Remove the token from local storage (or wherever you store it)
            localStorage.removeItem('token'); // Or use session storage or cookies
      
            // Optionally, clear Axios default auth header
            axios.defaults.headers.common['Authorization'] = null;
      
            // Redirect to the login page (or home)
            navigate('/login'); 
          } catch (error) {
            console.error("Logout failed: ", error);
          }
    }
  return (
    <p  onClick={handleLogout} className=''>
      
        Logout</p>
  )
}

export default Logout 