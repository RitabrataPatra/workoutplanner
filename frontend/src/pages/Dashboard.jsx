import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  // const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // For single user details
  // const [isLoading, setIsLoading] = useState(false);
  const [isFetchingUser, setIsFetchingUser] = useState(false); // Loading state for individual user

  //splitting url to get id
  const url = window.location.href;
  const userId = url.split("/").pop();

  // Fetch a user by ID
  const getUserById = async (userId) => {
    setIsFetchingUser(true);
    try {
      const { data } = await axios.get(`http://localhost:8000/api/users/${userId}`);
      if (data) {
        setSelectedUser(data.user); // Assuming the API response contains a `user` object
      }
    } catch (error) {
      alert("Error in getting user details");
      console.log(error);
    } finally {
      setIsFetchingUser(false);
    }
  };

  useEffect(() => {
    console.log("useEffect called");
    getUserById(userId);
  }, [userId]);

  return (
   <div>
    {isFetchingUser ? <h1>Loading...</h1> : 
    <h1 className="text-2xl capitalize">Welcome , {selectedUser?.name} 🔥
    </h1>}
   </div>
  );
};

export default Dashboard;
