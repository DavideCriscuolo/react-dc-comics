import comics from "./../data/comics";
import CardComp from "./CardComp";
export default function Products() {
  return (
    <section className="margin_neg">
      <h4 className="title_prod p-3">CURRENT SERIES</h4>
      <div className="container p-5">
        <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
          {comics.map((comic) => {
            return (
              <CardComp
                key={comic.id}
                thumb={comic.thumb}
                title={comic.title}
              ></CardComp>
            );
          })}
        </div>
        <div className="text-center ">
          <a className="px-3 btn" href="">
            LOAD MORE
          </a>
        </div>
      </div>
    </section>
  );
}
