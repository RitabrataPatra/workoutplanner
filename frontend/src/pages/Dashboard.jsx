import { useEffect, useState } from "react"
import axios from "axios";

const Dashboard = () => {
  const[userData , setUserData] = useState([]);
  const[isLoading , setIsLoading] = useState(false);
  const getUserList = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get("http://localhost:8000/api/users");
      console.log(data);
      if(data){
        setUserData(data.users)
      }
      
    } catch (error) {
      alert("Error in getting users");
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  }
 
  useEffect(() => {
    getUserList();
  } ,[])

  
  return (
    <>
    {
      isLoading ? <div>Loading...</div> : (
        <div>
          <h1>Dashboard , total users : {userData.length}</h1>
          { userData.length > 0 &&
            userData.map((user) => (
              <div key={user._id}>
                <h1>{user.name}</h1>
              </div>
            ))
          }
        </div>
      ) 
    }
    </>
  )
}

export default Dashboard