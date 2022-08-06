import { useState } from "react";
import Portal from "../ui/Portal";
import Button from "../ui/Button";

import classes from "./Navbar.module.css";
import Search from "../search/Search";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // put back to false

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <span />
        <h2>MOVIE</h2>
      </div>
      <Button onClick={() => setIsSearchOpen(true)}>Search</Button>
      {isSearchOpen && (
        <Portal onClose={() => setIsSearchOpen(false)}>
          <Search />
        </Portal>
      )}
    </nav>
  );
};

export default Navbar;
