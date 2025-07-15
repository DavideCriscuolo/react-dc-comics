import facebook from "./../img/footer-facebook.png";
import twitter from "./../img/footer-twitter.png";
import youtube from "./../img/footer-youtube.png";
import pinterest from "./../img/footer-pinterest.png";
import periscope from "./../img/footer-periscope.png";

const listDc = [
  {
    id: 1,
    title: "Characters",
  },
  {
    id: 2,
    title: "Comics",
  },
  {
    id: 3,
    title: "Movies",
  },
  {
    id: 4,
    title: "Tv",
  },
  {
    id: 5,
    title: "Games",
  },
  {
    id: 6,
    title: "Videos",
  },
  {
    id: 7,
    title: "News",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row p-4 row-cols-4">
          <div className="col">
            <h5 className="text-white">Dc Comics</h5>
            <ul>
              {listDc.map((item) => {
                return (
                  <li key={item.id}>
                    <a href="">{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <h5 className="text-white">Dc Comics</h5>
            <ul>
              {listDc.map((item) => {
                return (
                  <li key={item.id}>
                    <a href="">{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <h5 className="text-white">Dc Comics</h5>
            <ul>
              {listDc.map((item) => {
                return (
                  <li key={item.id}>
                    <a href="">{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <h5 className="text-white">Dc Comics</h5>
            <ul>
              {listDc.map((item) => {
                return (
                  <li key={item.id}>
                    <a href="">{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <h5 className="text-white">Dc Comics</h5>
            <ul>
              {listDc.map((item) => {
                return (
                  <li key={item.id}>
                    <a href="">{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="downFooter d-flex justify-content-between align-items-center">
        <div className="container d-flex justify-content-between align-items-center flex-wrap gap-3 ">
          <div>
            <a className="sign p-2" href="">
              SIGN-UP NOW!
            </a>
          </div>
          <div className="social d-flex align-items-center  gap-3">
            <div>
              <h4 className="text_blue ">FOLLOW US</h4>
            </div>
            <ul className="  list-inline">
              <li className="list-inline-item">
                <a href=" ">
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href=" ">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href=" ">
                  <img src={youtube} alt="" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href=" ">
                  <img src={pinterest} alt="" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href=" ">
                  <img src={periscope} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
