import xml.etree.ElementTree as ET
from defs import busca_substring, listar_arquivos, parse_xml, busca_subsgtring_arquivo




def main(): 
    campo_busca = '04220692000134'
    
    arquivos = busca_substring(campo_busca)
    
    jsons = []
    for arquivo in arquivos:
        json = parse_xml(arquivo)
        print(json)
    




    
if __name__ == '__main__':
    main()
