import { Link } from "react-router-dom";

import './style.css'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="header__nav--links" to={"/"}>Home</Link>
          </li>
          <li>
            <Link className="header__nav--links" to={"/super-heroes"}>SuperHeroes</Link>
          </li>
          <li>
            <Link className="header__nav--links" to={"/rq-super-heroes"}>RQSuperHeroes</Link>
          </li>
          <li>
            <Link className="header__nav--links" to={"/query-paralela"}>Query Paralel</Link>
          </li>
          <li>
            <Link className="header__nav--links" to={"/dinamic-paralel"}>Query Paralel</Link>
          </li>
          <li>
            <Link className="header__nav--links" to={"/dependent-queries"}>Dependent Queries</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
