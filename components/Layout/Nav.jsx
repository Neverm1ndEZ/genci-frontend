import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/img/Logo.svg';

const Nav = () => {
  return (
    <nav className="h-30 fixed top-0 w-full flex items-center z-50">
      <div className="px-[11px] bg-[#131619] h-full w-full flex justify-center items-center">
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
