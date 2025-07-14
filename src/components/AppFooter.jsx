
import logoBG from "./../img/dc-logo-bg.png"
import facebook from "./../img/footer-facebook.png"
export default function Footer() {
    return (
        <footer>
        <div className="container ">
          <div className="row row-cols-2 p-4">
            <div className="col d-flex">
                <div className="col list">
                        <h4 className="text-white">DC COMICS</h4>
                    <ul>
                    <li><a href="">Characters</a></li>
                    <li><a href="">Comics</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Tv</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Video</a></li>
                    <li><a href="">News</a></li>
                    </ul>
                             <div>
                        <h4  className="text-white" >DC COMICS</h4>
                    <ul>
                    <li><a href="">Characters</a></li>
                    <li><a href="">Comics</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Tv</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Video</a></li>
                    <li><a href="">News</a></li>
                    </ul>
                </div>
                </div>
         
                <div className="col list">
                        <h4  className="text-white" >DC COMICS</h4>
                    <ul>
                    <li><a href="">Characters</a></li>
                    <li><a href="">Comics</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Tv</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Video</a></li>
                    <li><a href="">News</a></li>
                    </ul>
                </div>
                  <div className="col list">
                        <h4  className="text-white" >DC COMICS</h4>
                    <ul className="" >
                    <li ><a href="">Characters</a></li>
                    <li><a href="">Comics</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Tv</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Video</a></li>
                    <li><a href="">News</a></li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <img className="w-100" src={logoBG} alt="" />
            </div>
          </div>
        </div>
            <div className="downFooter d-flex justify-content-between align-items-center">
                <div className="container d-flex justify-content-between align-items-center">
                    <div><a href="">SIGN-UP NOW!</a></div>
                <div className="social d-flex">
                        <div><h4>FOLLOW US</h4></div>
                    <ul className="  list-inline">
                            <li className="list-inline-item"><a href=" "><img src={facebook} alt="" /></a> </li>
                            <li className="list-inline-item"><a href=" "><img src={facebook} alt="" /></a> </li>
                            <li className="list-inline-item"><a href=" "><img src={facebook} alt="" /></a> </li>
                            <li className="list-inline-item"><a href=" "><img src={facebook} alt="" /></a> </li>
                                <li className="list-inline-item"><a href=" "><img  src={facebook} alt="" /></a> </li>
                    </ul>
                </div>
                </div>
        </div>
        
        
        
        </footer>
   
      
 

    )
}