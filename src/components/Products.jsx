import comics from "./../data/comics"



export default function Products(){
    return (
        <div className="container p-5">
            <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
                {comics.map((comic) => {
                    return <div  key= {comic.id} className="col p-3">
                        <div className="card h-100 "> 
                            <img className="card-img-top  img-fluid w-100 object-fit-fill w-100 " src={comic.thumb} alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title fs-6">{comic.title}</h4>
                            </div>
                        </div>
                        
                    </div>
                    
})}
            </div>
     <div className="text-center "><a className="px-3 btn"  href="">LOAD MORE</a></div>

       
   </div>


)

}