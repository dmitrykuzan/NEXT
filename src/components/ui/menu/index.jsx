import Link from "next/link";

export const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link href="#">1</Link>
        </li>
        <li className="menu__item">
          <Link href="#">2</Link>
        </li>
        <li className="menu__item">
          <Link href="#">3</Link>
        </li>
      </ul>
    </nav>
  );
};
