import Link from 'next/link'
import Image from 'next/image'

const PM_Navbar = () => {
  return (
    <nav className="PM">
        <div className="PM"><Link href="/"><a>Home</a></Link></div>
        <div className="PM"><Link href="/about"><a>About</a></Link></div>
        <div className="PM"><Link href="/ninjas/"><a>Skills</a></Link></div>
        <div className="PM"><Link href="/ninjas/"><a>Portfolio</a></Link></div>
    </nav>
  );
}
 
export default PM_Navbar;