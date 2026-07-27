'use client';

import css from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={css.top}>
      <div className={'container ' + css.topContainer}>
        <Link href="/">
          <Image src="/logo.svg" alt="TravelTrucks" width={136} height={16} />
        </Link>
        <nav aria-label="Main Navigation">
          <ul className={css.navigation}>
            <li className={css.navigationItems}>
              <Link
                className={
                  pathname === '/'
                    ? css.navigationLinkActive
                    : css.navigationLink
                }
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname.startsWith('/catalog')
                    ? css.navigationLinkActive
                    : css.navigationLink
                }
                href="/catalog"
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
