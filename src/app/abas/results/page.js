import React, { useEffect } from "react"
import styles from "./page.module.css"
import localImageLogo from "../../../../public/arrow-left.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function EReceipt1() {
    const router = useRouter();
    const [profileData, setProfileData] = useState({});


    useEffect(()=> 
    {
        const data = JSON.parse(router.query.item);
        setProfileData(data);
    }, [router.query]
)
  return (
   <div className={styles.container}>
    <div className={styles.header}> 
    <Image
        src={localImageLogo}
        alt="Logo"
        className={styles.logo}
    />
    <h2>Detalhes da NF</h2>
    </div>
    <div className={styles.details}>
        <h3>Prestador de Serviço</h3>
        <div className={styles.card}>
            <ul className={styles.list}>
                <li className={styles.itemList}>Razão Social <a>{profileData.PrestadorServico.RazaoSocial}</a></li>
                <li className={styles.itemList}>CNPJ <a>{profileData.PrestadorServico.Cnpj}</a></li>
                <li className={styles.itemList}>Email <a>Alternavel</a></li>
                <li className={styles.itemList}>Endereço <a>Alternavel</a></li>
                <li className={styles.itemList}>Inscrição Municipal <a>Alternavel</a></li>
            </ul>
        </div>
        <h3>Orgão Gerador</h3>
        <div className={styles.card}>
            <ul className={styles.list}>
                <li className={styles.itemList}>Cód. Municipio <a>Alternavel</a></li>
                <li className={styles.itemList}>Endereço <a>Alternavel</a></li>
            </ul>
        </div>
        <h3>Tomador</h3>
        <div className={styles.card}>
            <ul className={styles.list}>
                <li className={styles.itemList}>Inscrição Municipal <a>Alternavel</a></li>
                <li className={styles.itemList}>CNPJ <a>Alternavel</a></li>
                <li className={styles.itemList}>Razão Social <a>Alternavel</a></li>
                <li className={styles.itemList}>Endereço <a>Alternavel</a></li>
                <li className={styles.itemList}>Email <a>Alternavel</a></li>    
            </ul>
        </div>
        <h3>Declaração de prestação de Serviço</h3>
        <div className={styles.card}>
            <ul className={styles.list}>
            <li className={styles.itemList}>Rps - Numero - Série - Tipo <a>Alternavel</a></li>
            <li className={styles.itemList}>Data de Emissao <a>Alternavel</a></li>
            <li className={styles.itemList}>Status <a>Alternavel</a></li>
            <li className={styles.itemList}>Competencia <a>Alternavel</a></li>
            <li className={styles.itemList}>Quantidade <a>Alternavel</a></li>
            <li className={styles.itemList}>Valor de Serviços <a>Alternavel</a></li>
            <li className={styles.itemList}>Valor de Deduções <a>Alternavel</a></li>
            <li className={styles.itemList}>Valor Pis <a>Alternavel</a></li>
            <li className={styles.itemList}>Valor Cofins <a>Alternavel</a></li>
            <li className={styles.itemList}>Valor Inss <a>Alternavel</a></li>
            <li className={styles.itemList}>Valor Ir <a>Alternavel</a></li>
            <li className={styles.itemList}>Valor Csll <a>Alternavel</a></li>
            <li className={styles.itemList}>Outras Retenções <a>Alternavel</a></li>
            <li className={styles.itemList}>Valor Iss <a>Alternavel</a></li>
            <li className={styles.itemList}>Aliquota <a>Alternavel</a></li>
            <li className={styles.itemList}>Desconto Incondicionado <a>Alternavel</a></li>
            <li className={styles.itemList}>Desconto Condicionado <a>Alternavel</a></li>
            <li className={styles.itemList}>Iss retido <a>Alternavel</a></li>
            <li className={styles.itemList}>Item lista de serviço <a>Alternavel</a></li>
            <li className={styles.itemList}>Código Cnae <a>Alternavel</a></li>
            <li className={styles.itemList}>Código Tributação Municipio <a>Alternavel</a></li>
            <li className={styles.itemList}>Discriminação <a>Alternavel</a></li>
            <li className={styles.itemList}>Exigibilidade ISS <a>Alternavel</a></li>
            <li className={styles.itemList}>Municipio Incidencia <a>Alternavel</a></li>
            <li className={styles.itemList}>Regime Esp. Tributação <a>Alternavel</a></li>
            <li className={styles.itemList}>Optante Simples Nac. <a>Alternavel</a></li>
            <li className={styles.itemList}>Incentivo Fiscal <a>Alternavel</a></li>
            </ul>
        </div>
        
    </div>
   </div>
  )
}
