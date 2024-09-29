import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import localImageLogo from "../../../public/Archive.svg";
import Item from "../Item/item";

export default function Search({itens
}) {
const [searchTerm, setSearchTerm] = useState("");

  const filteredItens = Object.values(itens).filter((item) =>
    item?.PrestadorServicoCnpj?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div className={styles.resultsConatiner}>
    <h1>Resultados para {item.nome}</h1>
    {filteredItens.map((item) => (
      <div
        key={contact.id}
        className={styles.contactClickable}
        onClick={() => handleClickContact(contact)}
      >
        <Item
         DataEmissao = {item.DataEmissao}
         PrestadorServicoCnpj = {item.PrestadorServicoCnpj}
         TomadorCnpj = {item.TomadorCnpj}
         onContactClick={handleClickContact}
        />
      </div>
    ))}
  </div>
  );
}