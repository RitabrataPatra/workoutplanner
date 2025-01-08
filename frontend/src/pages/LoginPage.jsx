import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const[isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setIsLoading(true);
    try {
      const {data} =  await axios.post("http://localhost:8000/api/users/login", formData);
      console.log("sucess!!" , data);
      if(data.success){
        alert(data.message);
        navigate(`/dashboard/${data.id}`); 
      }
    } catch (error) {
      console.log(error);
    }finally {
      setIsLoading(false);
    }
    console.log("submitted", formData); // Log the form data
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-red-500 mb-2">
          Welcome Back to BeingFitter 💪
        </h1>
        <p className="text-gray-600 text-lg">Just login and get moving!</p>
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Login
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <TextField
            id="email"
            name="email" // Add the name attribute to match the state keys
            label="Email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="bg-gray-50"
            required
          />
          <TextField
            id="password"
            name="password" // Add the name attribute to match the state keys
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="bg-gray-50"
            required
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            className="text-white py-2 font-semibold"
          >
            {
              isLoading ? "Loading..." : "Login"
            }
          </Button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-red-500 hover:underline">
            Create account
          </a>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
