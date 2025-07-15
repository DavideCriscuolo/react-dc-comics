import comics from "./../data/comics"



export default function Products(){
    return (
        <section className="margin_neg">
            <h4 className="title_prod p-3">CURRENT SERIES</h4>
                <div className="container p-5">
            <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
                {comics.map((comic) => {
                    return <div  key= {comic.id} className="col p-3">
                        <div className="card  "> 
                            <img className=" comicImg w-100 ratio ratio-1x1  " src={comic.thumb} alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title fs-6">{comic.title}</h4>
                            </div>
                        </div>
                        
                    </div>
                    
})}
            </div>
     <div className="text-center "><a className="px-3 btn"  href="">LOAD MORE</a></div>

       
   </div>
        
        </section>



)

}