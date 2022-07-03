import NavBar from "./NavBar/Nav";

interface LayoutProps {
  children: any;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
};
