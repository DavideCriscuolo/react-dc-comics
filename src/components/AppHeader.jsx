import NavBar from "./NavBar"
import logo from "./../img/dc-logo.png"

export default function Header() {

    return(
        <div  className="d-flex justify-content-between align-items-center">
            <div><img src={logo} /></div>
        <NavBar></NavBar>
        </div> 


)

};