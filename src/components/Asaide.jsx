import comics from "./../img/buy-comics-digital-comics.png"
import merch from "./../img/buy-comics-merchandise.png"
import subscriptions from "./../img/buy-comics-subscriptions.png"
import shopLoc from "./../img/buy-comics-shop-locator.png"
import dcVisa from "./../img/buy-dc-power-visa.svg"
export default function Asaide() {
    return (
        <aside>
        <nav className="nav justify-content-center">
    <a className="nav-link" href="#"><img className=" w-25 p-2" src={comics} alt="" />DIGITAL COMICS</a>
    <a className="nav-link" href="#"><img className=" w-25  p-2"  src={merch} alt="" />DC MERCHANDISE</a>
    <a className="nav-link" href="#"><img className=" w-25 p-2"  src={subscriptions} alt="" />SUBSCRIPTIONS</a>
    <a className="nav-link" href="#"><img  className=" w-25 p-2" src={shopLoc} alt="" />COMIC SHOP LOCATOR</a>
    <a className="nav-link" href="#"><img  className=" w-25  p-2" src={dcVisa} alt="" />DC POWER VISA</a>
</nav>
</aside>
    )
    
}