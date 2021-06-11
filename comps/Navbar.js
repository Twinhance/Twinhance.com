import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/Logo172x122.png" alt="site logo" width={172} height={122} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas/"><a>Games</a></Link>
    </nav>
  );
}
 
export default Navbar;