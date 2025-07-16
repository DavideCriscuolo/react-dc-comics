export default function CardComp(prop) {
  return (
    <div key={prop.id} className="col p-3">
      <div className="card  ">
        <img
          className=" comicImg w-100 ratio ratio-1x1  "
          src={prop.thumb}
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title fs-6">{prop.title}</h4>
        </div>
      </div>
    </div>
  );
}
