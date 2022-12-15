
import useWindowSize from "../hooks/useWindowSize"
import NavbarMain from "./myNavbar/navbar_main";
import NavbarMin from "./myNavbar/navbar_min";
const Navbar=()=>{
    const [heigth,width]=useWindowSize();
    return (
        <>
        {width>=950?<NavbarMain/>:<NavbarMin/>}
        
        
        </>
    )
}
export default Navbar