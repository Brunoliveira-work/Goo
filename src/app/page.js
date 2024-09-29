"use client"; // Definindo o componente como um Client Component

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import localImageLogo from "../../public/logo.svg";
import localImageEarth from "../../public/earth.svg";

export default function Home() {
  const router = useRouter();

  const onClickHandler = () => {
    setTimeout(() => {
      router.push('/abas/search'); // Redireciona após 3 segundos
    }, 3000); // 3000 milissegundos = 3 segundos
  };

  return (
    <div className={styles.container} onClick={onClickHandler}>
      <div className={styles.logoContainer}>
        <Image
          src={localImageLogo}
          alt="Logo"
          className={styles.logo}
          // width={300}
          // height={100}
        />
      </div>
      <div className={styles.earthContainer}>
        <Image
          src={localImageEarth}
          alt="Earth"
          className={styles.earth}
          // width={400}
          // height={200}
        />
      </div>
    </div>
  );
}
