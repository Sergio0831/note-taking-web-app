const AuthLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="bg-authbg px-4 sm:px-8">
      <div className="wrapper-grid items-center justify-center h-dvh">{children}</div>
    </main>
  );
};

export default AuthLayout;
