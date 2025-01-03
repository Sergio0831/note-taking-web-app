import Logo from '@/icons/logo.svg';

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center ">
      <Logo />
      <h1 className="text-preset-1 mt-4">Welcome to Note</h1>
      <p className="text-preset-5 mt-2">Please log in to continue</p>
    </div>
  );
};

export default AuthHeader;
