import comic from "./../img/buy-comics-digital-comics.png";
import merch from "./../img/buy-comics-merchandise.png";
import subscriptions from "./../img/buy-comics-subscriptions.png";
import shopLoc from "./../img/buy-comics-shop-locator.png";
import dcVisa from "./../img/buy-dc-power-visa.svg";

const asaide = [
  {
    id: 1,
    src: comic,
    text: "DIGITAL COMICS",
  },
  {
    id: 2,
    src: merch,
    text: "DC MERCHANDISE",
  },
  {
    id: 3,
    src: subscriptions,
    text: "SUBSCRIPTION",
  },
  {
    id: 4,
    src: shopLoc,
    text: "COMIC SHOP LOCATOR",
  },
  {
    id: 5,
    src: dcVisa,
    text: "DC POWER VISA",
  },
];

export default function Asaide() {
  return (
    <aside className="d-flex justify-content-center align-items-center">
      <div className="container-fluid">
        <div className=" d-flex justify-content-center align-items-center flex-wrap gap-5">
          {asaide.map((elemet) => {
            return (
              <div
                className="  d-flex justify-content-center align-items-center p-2 cardP "
                key={elemet.id}
              >
                <img
                  className=" obeject-fit-cover p-2"
                  src={elemet.src}
                  alt=""
                />
                <div>
                  <a className="" href="#">
                    {elemet.text}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
