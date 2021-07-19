import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [navExapndClass, setNavExapndClass] = useState("");

  function manageBugerClick() {
    console.log("Hello");
    if (navExapndClass === "drop-down") {
      setNavExapndClass("");
    }
    else {
      setNavExapndClass("drop-down");
    }
  }

  return (
    <nav className={navExapndClass}>
      <img src="https://PatTheNoble.github.io/Hamburger.svg" className={navExapndClass + " hamburger"} alt="Hamburger" width="23px" onClick={manageBugerClick} />
      <Link href="/#home"><a className={navExapndClass}>Home</a></Link>
      <Link href="/#about"><a className={navExapndClass}>About</a></Link>
      <Link href="/#games"><a className={navExapndClass}>Games</a></Link>
    </nav>
  );
}
 
export default Navbar;