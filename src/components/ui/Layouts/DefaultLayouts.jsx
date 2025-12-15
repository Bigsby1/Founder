import Header from "../Header/Header";

const DefaultLayouts = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayouts;