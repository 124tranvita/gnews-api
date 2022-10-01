import { Link } from "react-router-dom";
import { DropdownMenu } from "../../utils/DropdownMenu";

export function MenuBarDesktop() {
  return (
    <div className="menu-desktop sticky top-0 left-0 z-30 bg-white shadow-md hidden h-full lg:block">
      <ul className="flex justify-start max-w-6xl mx-auto font-semibold items-center h-14">
        <li className="menu-active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/",
              hash: "#entertainment",
            }}
          >
            Entertainment
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/",
              hash: "#business",
            }}
          >
            Business
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/",
              hash: "#travel",
            }}
          >
            Travel
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/",
              hash: "#video",
            }}
          >
            Video
          </Link>
        </li>
      </ul>
    </div>
  );
}

export function MenuBarMobile() {
  return (
    <div className="bg-green-600 py-4">
      <DropdownMenu text={"Home"} path={"/"} />
      <DropdownMenu
        text={"Entertainment"}
        path={{
          pathname: "/",
          hash: "#travel",
        }}
      />
      <DropdownMenu
        text={"Business"}
        path={{
          pathname: "/",
          hash: "#business",
        }}
      />
      <DropdownMenu
        text={"Travel"}
        path={{
          pathname: "/",
          hash: "#travel",
        }}
      />
      <DropdownMenu
        text={"Video"}
        path={{
          pathname: "/",
          hash: "#video",
        }}
      />
    </div>
  );
}
