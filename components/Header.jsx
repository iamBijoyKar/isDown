import Link from "next/link";
import { Typography } from "../app/material-ui";
import { theme } from "../store/theme";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-4 py-2">
      <Link href="/">
        <Typography variant="h3" style={{ color: theme.primaryText }}>
          {" "}
          IsDown{" "}
        </Typography>
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/demo">Demo</Link>
          </li>
        </ul>
      </nav>
      <Link href="">
        <BsGithub className="text-3xl" />
      </Link>
    </header>
  );
};

export default Header;
