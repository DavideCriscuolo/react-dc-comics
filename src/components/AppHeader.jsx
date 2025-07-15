import NavBar from "./NavBar"
import logo from "./../img/dc-logo.png"
export default function Header() {

    return (
        
        <header>
            <div className="app_header d-flex justify-content-around align-items-center p-4">
             <div><img src={logo} /></div>
        <NavBar></NavBar>
        </div>
        </header>
       


)

};