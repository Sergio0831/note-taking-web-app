const AuthLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="w-full h-dvh grid items-center justify-center bg-authbg">{children}</main>
  );
};

export default AuthLayout;
