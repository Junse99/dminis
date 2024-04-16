import Image from "next/image";
import styles from "./page.module.css";
import { getPLinkPageContent } from "./page.service";

export default async function LinkTree() {
  const {title, subtittle, backgroundImage, image, linklistCollection: {items}} = await getPLinkPageContent('page-links');

  return (
    <main className={styles.body__container}>
      <Image src={image.mobile.url} alt={image.description} height={image.mobile.height} width={image.mobile.width} className={styles['img-logo']} />
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.parrafos}>{subtittle}</p>
      <Image src={backgroundImage.mobile.url} alt={backgroundImage.description} height={backgroundImage.mobile.height} width={backgroundImage.mobile.width} className={styles['img-logo--fondo']} />
      <Image src={backgroundImage.mobile.url} alt={backgroundImage.description} height={backgroundImage.mobile.height} width={backgroundImage.mobile.width} className={styles['img-logo--fondo']} />
      <ul className={styles.link__container}>
        {
          items.map(link => (
            <li className={styles['list-item']} key={link.code}>
              <a className={styles.link__item} href={link.link.url} target={link.link.isExternal ? '_blank' : '_self'}>
                <Image src={link.image.mobile.url} alt={link.image.description} height={link.image.mobile.height} width={link.image.mobile.width} />
                <p>{link.link.texto}</p>
              </a>
            </li>
          ))
        }
      </ul>
    </main>
  );
}
