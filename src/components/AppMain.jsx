import Products from "./Products"
import Jumbo from "./Jumbo"

export default function Main() {
    return (
<main>   <Jumbo></Jumbo>

        <div className=" d-flex justify-content-center align-items-center ">
            
            <div className="container">
             <div className=" text-white">
            <h2><Products></Products></h2>
        </div>  </div>
        
</div>
    </main>    
    )
}