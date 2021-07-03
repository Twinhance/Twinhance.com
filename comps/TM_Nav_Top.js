import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="nav-top TM">
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas/"><a>Games</a></Link>
    </nav>
  );
}
 
export default Navbar;