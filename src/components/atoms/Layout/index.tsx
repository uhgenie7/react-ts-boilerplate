import Header from '../Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Header />
        <div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
