import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './products-section.module.css'
import { getProductsSection } from './get-products-section.service';
import { ResponsivePicture } from '@/components/atoms/responsive-picture';

const ProductsSection = async () => {

  const {code, title, listCollection: { items } } = await getProductsSection('home-products-section');

  return (
      <section className={styles.section__products}>
        <h2 className={`chewy ${styles.heading}`}>{title}</h2>

        <div className={styles['cards-container']}>
          {
            items.map(product => 
            <article key={product.code} className={styles['product-card']}>
              <ResponsivePicture className={styles['product-image']} src={product.image.mobile.url} alt={product.image.description} title={product.image.title} height={product.image.mobile.height} width={product.image.mobile.width}  />
              <h3 className={styles['name-product']}>{product.title}</h3>
            </article>)
          }
        </div>
      </section>
  )
}

export default ProductsSection