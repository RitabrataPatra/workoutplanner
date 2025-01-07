import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);  


    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8000/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: input,
            email: email,
            password: password,
          }),
        });
        if (!response.ok) {
          const error = await response.json();
          setIsLoading(false);
          console.log(error);
        }
        const data = await response.json();
        console.log(data);
        alert("User registered successfully!");
        navigate("/dashboard");
        
      } catch (error) {
        console.log(error);
        alert("Something went wrong in client");
      } finally {
        setIsLoading(false);
      }
    };
   

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-red-500 mb-2">
          Welcome to BeingFitter 💪
        </h1>
        <p className="text-gray-600 text-lg">
          Your fitness journey starts here. Sign up and get moving!
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Sign Up
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <TextField
            id="name"
            value={input}
            label="Name"
            variant="outlined"
            fullWidth
            className="bg-gray-50"
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <TextField
            id="email"
            value={email}
            label="Email"
            variant="outlined"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50"
            required
          />
          <TextField
            id="password"
            value={password}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50"
            required
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            className=" text-white py-2 font-semibold"
            disabled={isLoading}
          >
            {
              isLoading ? "Creating your account ..." : "Sign Up"
            }
          </Button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </main>
  );
};

export default SignUpPage;
