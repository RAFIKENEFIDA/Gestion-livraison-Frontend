import  { useState, useEffect } from 'react';
import {
 
    useNavigate ,
  } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {setUser,setUserByToken} from '../redux/user-slice';
import React from 'react';
import axios from 'axios';


function Auth({children}) {
    
    const dispatch = useDispatch()
    let navigate = useNavigate();

      const getUser=async()=>{

        try {

            if(localStorage.getItem("token")){
            const url="http://localhost:3000/user/data";
            const res=  await  axios.post(url,{token:localStorage.getItem("token")});
            console.log(res)

            if(res.status===200) {
                dispatch(setUserByToken(res.data.data.admin))
            }
            }
        
      } catch (error) {
          console.log(error)

      }
      }
      
      getUser();

      const isAuth = useSelector((state) => state.user.isAuth)

      
    // useEffect(()=>{
    
    //  if(isAuth==false) {
    //      navigate('/login/admin')
    //  }

    // },[])
    
       
  return <div>{children}</div>;
}

export default Auth;
