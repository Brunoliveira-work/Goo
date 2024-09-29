import axios from "axios";

const host = 'localhost';
const port = '5000';

export async function fetchDataGet(rota){
  try {
    const response = await axios.get(
      `http://${host}:${port}${rota}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao obter os dados:", error);
  }
}

export async function fetchDataPost(rota, data) {
  try {
    console.log("Enviando dados para a rota: " + rota);
    console.log(data);
    const response = await axios.post(
      `http://${host}:${port}${rota}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Dados recebidos da rota: " + rota);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar os dados:", error);
  }
}