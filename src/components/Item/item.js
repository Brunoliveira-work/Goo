import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import localImageLogo from "../../../public/Archive.svg";

export default function Item({
  DataEmissao,
  PrestadorServicoCnpj,
  TomadorCnpj,
  onContactClick,
  children
}) {
    DataEmissao = "DataEmissao";
    PrestadorServicoCnpj = "PrestadorServicoCnpj";
    TomadorCnpj = "Tomador";
  const handleClick = () => {
    if (onContactClick) {
      onContactClick({
        // DataEmissao : DataEmissao,
        // PrestadorServicoCnpj : PrestadorServicoCnpj,
        // TomadorCnpj : TomadorCnpj,
      });
    }
  };

  return (
    <div className={styles.item} onClick={handleClick}>
      <Image
      src={localImageLogo}
      alt="Logo"
      className={styles.logo}
      // width={300}
      // height={100}
      />
      <div className={styles.detail}>
        <p>{PrestadorServicoCnpj}</p>
        <p>{TomadorCnpj}</p>
      </div>
      <div className={styles.data}>
        <p>{DataEmissao}</p>
      </div>
    </div>
  );
}