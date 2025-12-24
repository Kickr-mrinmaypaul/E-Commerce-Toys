import React,{useEffect, useState} from "react";
import UserContext from "./userContext";

function userContextProvider ({children}) {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    
        const sendData = async () =>{
            try {
                setLoading(true);
                setError(null);
                // const response = await ("post user data to api", userdata);
                // console.log(response)
            } catch (error) {
                setError(error);
            }finally{
                setLoading(false);
            }
        }
        
        const fetchData = async()=>{
            try {
                setLoading(true);
                setError(null);
                // const response = await ("api to get user data");
                console.log("response")
            } catch (error) {
                setError(error);
            }finally{
                setLoading(false);
            }
        }


    return(
        <UserContext.Provider value={{userData, setUserData, sendData, fetchData}}>
            {children}
        </UserContext.Provider>
    )
}

export default userContextProvider;