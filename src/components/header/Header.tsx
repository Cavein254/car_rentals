import SmHeader from "./SmHeader";
import XsHeader from "./XsHeader";

const Header = () => {
  return (
    <>
      <div className="md:hidden">
        <XsHeader />
      </div>
      <div className="hidden md:block">
        <SmHeader />
      </div>
    </>
  );
};

export default Header;
