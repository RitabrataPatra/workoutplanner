import Button from '@mui/material/Button';
const SignUpPage = () => {
  return (
    <main>
      <div className="border border-red-700">
        <h1 className="text-5xl text-red-500">Welcome to BeingFitter💪</h1>
      </div>
      <div className="border border-blue-700 mt-4 py-4">
        <form action="" className="flex flex-col gap-4 items-center border border-black justify-center">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Button variant="contained" type='submit'>Sign Up</Button>;
        </form>
      </div>
    </main>
  );
};

export default SignUpPage;
