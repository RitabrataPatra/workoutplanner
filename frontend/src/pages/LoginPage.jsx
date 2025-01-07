
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const LoginPage = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-red-500 mb-2">
          Welcome Back to BeingFitter 💪
        </h1>
        <p className="text-gray-600 text-lg">
          Just login and get moving!
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Login
        </h2>
        <form className="flex flex-col gap-6">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            className="bg-gray-50"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            className="bg-gray-50"
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            className=" text-white py-2 font-semibold"
          >
           Login
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
