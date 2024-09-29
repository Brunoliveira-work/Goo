"use client"; // Definindo o componente como um Client Component
import  Item  from "../../../components/Item/item"
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import localImageLogo from "../../../../public/sign-in.svg";


export default function Home({ itens }) {

    const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Estado de carregamento

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


    const handleKeyPressed = async (value) => {
        const params = {
            campo_busca: inputValue
          };
      
          setLoading(true); // Iniciar o carregamento
          try {
            const result = await fetchDataPost('/api/data', params); // Espera pela resposta
            setData(result); // Atualiza o estado com os dados recebidos
          } catch (error) {
            console.error("Erro ao buscar dados:", error);
          } finally {
            setLoading(false); // Para o carregamento
          }
    }


    // const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();
    // const handleSearch = (event) => {
    //     setSearchTerm(event.target.value);
    //   };
    //   const filteredItens = Object.values(itens).filter((item) =>
    //     item?.PrestadorServicoCnpj?.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    const onClickHandler = (item) => {
        router.push({profile: '/abas/search', query: { item: JSON.stringify(item)},});
        // setTimeout(() => {
        //   router.push('/abas/search'); // Redireciona após 3 segundos
        // }, 3000); // 3000 milissegundos = 3 segundos
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchHeader}>
                <div className={styles.name}>
                    <Image
                        src={localImageLogo}
                        alt="Logo"
                        className={styles.logo}
                    // width={300}
                    // height={100}
                    />
                    <div><p>Saudações</p><h1>João Paulo</h1></div>
                </div>
                <input type="text" placeholder="Entre com o CNPJ" onChange={(e) => handleKeyPressed(e.target.value)}></input>
            </div>
            <div className={styles.resultsConatiner}>
                <h1>Resultados para {item.PrestadorServicoCnpj}</h1>

            {loading ? ( // Exibe o carregamento enquanto os dados estão sendo buscados
                    <p>Carregando...</p>
                ) : (
                    data.length > 0 && ( // Verifica se há dados para exibir
                    <div>
                        {data.map((item, index) => (
                        <Item
                        DataEmissao={item.Servico.DataEmissao}
                        PrestadorServicoCnpj={item.PrestadorServico.Cnpj}
                        TomadorCnpj={item.Tomador.Cnpj}
                        onContactClick={(e) => onClickHandler(item)} />
                        
                        ))}
                    </div>
                    )
                )}
            </div>
            
        </div>
    );
}

// {filteredItens.map((item) => (
//   <div
//     key={contact.id}
//     className={styles.contactClickable}
//     onClick={() => handleClickContact(contact)}
//   >
//     <Item
//      DataEmissao = {item.DataEmissao}
//      PrestadorServicoCnpj = {item.PrestadorServicoCnpj}
//      TomadorCnpj = {item.TomadorCnpj}
//      onContactClick={handleClickContact}
//     />
//   </div>
// ))}