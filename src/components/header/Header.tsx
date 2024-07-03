import SmHeader from "./SmHeader"
import XsHeader from "./XsHeader"

const Header = () => {
  return (
    <>
    <div className="">
        <XsHeader />
    </div>    
    <div className="hidden">
        <SmHeader />
    </div>    
    </>
  )
}

export default Header