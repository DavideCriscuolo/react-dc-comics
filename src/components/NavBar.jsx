const menu = [
  {
    id: 1,
    class: "nav-link",
    href: "#",
    text: "CHARACTERS",
  },
  {
    id: 2,
    class: "nav-link",
    href: "#",
    text: "COMICS",
  },
  {
    id: 3,
    class: "nav-link",
    href: "#",
    text: "MOVIES",
  },
  {
    id: 4,
    class: "nav-link",
    href: "#",
    text: "TV",
  },
  {
    id: 5,
    class: "nav-link",
    href: "#",
    text: "GAMES",
  },
  {
    id: 6,
    class: "nav-link",
    href: "#",
    text: "COLLECTIBLES",
  },
  {
    id: 7,
    class: "nav-link",
    href: "#",
    text: "VIDEO",
  },
  {
    id: 8,
    class: "nav-link",
    href: "#",
    text: "FANS",
  },
  {
    id: 9,

    class: "nav-link",
    href: "#",
    text: "NEWS",
  },
  {
    id: 10,
    class: "nav-link",
    href: "#",
    text: "SHOP",
  },
];

export default function NavBar() {
  return (
    <nav className="nav justify-content-center">
      {menu.map((item) => {
        return (
          <a key={item.id} className={item.class} href={item.href}>
            {item.text}
          </a>
        );
      })}
    </nav>
  );
}
