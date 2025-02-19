import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import { getHeader } from './get-header.service';
import Link from 'next/link';

const Header = async () => {
  const {code, link, image, listCollection: { items } } = await getHeader('header');
  return (
      <header className={styles['header']}>
        <nav className={styles.nav}>
          <div className={styles.container}>
            <Link href={link.url}>
              <Image className={styles['logo-header']} src={image.desktop.url} priority alt={image.description} width={image.desktop.width} height={image.desktop.height}  />
            </Link>
            <ul className={styles['wrapper-nav-link']}>
              {
                items.map(link => (<Link key={link.code} href={link.url}><li className={`lato ${styles['nav-link']}`}>{link.texto}</li></Link>))
              }
            </ul>
          </div>
        </nav>
         <div className={styles.header__wave}>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 190" style={{height: '100%', width: '100%'}}>
             <path fill="#7e29bb" fillOpacity="1" d="M0,160L60,138.7C120,117,240,75,360,90.7C480,107,600,181,720,186.7C840,192,960,128,1080,90.7C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
         </div>
      </header>
  )
}

export default Header