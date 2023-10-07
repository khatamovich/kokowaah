import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";

const Layout = ({ themeColor, children }) => {
   return (
      <div className="layout">
         <Header
            style={{
               backgroundColor: themeColor || "white",
            }}
         />
         <Content>{children}</Content>
         <Footer />
      </div>
   );
};

export default Layout;
