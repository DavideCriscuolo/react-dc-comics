import comics from "./../img/buy-comics-digital-comics.png"
import merch from "./../img/buy-comics-merchandise.png"
import subscriptions from "./../img/buy-comics-subscriptions.png"
import shopLoc from "./../img/buy-comics-shop-locator.png"
import dcVisa from "./../img/buy-dc-power-visa.svg"
export default function Asaide() {
    return (
        <aside className="d-flex justify-content-center align-items-center">
            <div className="container-fluid d-flex justify-content-center flex-wrap gap-5 h-100">

                <div className=" d-flex justify-content-center align-items-center">
                    <div><img className=" w-100 p-2" src={comics} alt="" /></div> 
                    <div><a className="" href="#">DIGITAL COMICS</a> </div>
                </div>

                
                <div className=" d-flex justify-content-center align-items-center">
                    <div><img className=" w-100 p-2" src={merch} alt="" /></div> 
                    <div><a className="" href="#">DIGITAL COMICS</a> </div>
                </div>
                
                <div className=" d-flex justify-content-center align-items-center">
                    <div><img className=" w-100 p-2" src={subscriptions} alt="" /></div> 
                    <div><a className="" href="#">DIGITAL COMICS</a> </div>
                </div>
                
                <div className=" d-flex justify-content-center align-items-center">
                    <div><img className=" w-100 p-2" src={shopLoc} alt="" /></div> 
                    <div><a className="" href="#">DIGITAL COMICS</a> </div>
                </div>
                
                       <div className=" d-flex justify-content-center align-items-center">
                    <div className="cardP"><img className=" w-100 p-2" src={dcVisa} alt="" /></div> 
                    <div><a className="" href="#">DIGITAL COMICS</a> </div>
                </div>
                
              
 
</div>
      
</aside>
    )
    
}