import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/molecules/header/header";
import HomeCarousel from "@/components/molecules/home-carousel/home-carousel";
import type { EmblaOptionsType } from 'embla-carousel'
import { getHomeCarousel } from "@/components/molecules/home-carousel/get-home-carousel.service";
import ProductsSection from "@/components/molecules/products-section/products-section";

export const Home = async () => {

  const { code, listCollection: { items } } = await getHomeCarousel('home-banner-carousel');

  const OPTIONS: EmblaOptionsType = { loop: true }

  return (
    <>
    <Header />
    <main className={`lato ${styles.main}`}>
      <HomeCarousel slides={items} options={OPTIONS} />
      <ProductsSection />
    </main></>
  );
}

export default Home