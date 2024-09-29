
import os
import xml.etree.ElementTree as ET



def parse_xml(arquivo):
    # Carrega o arquivo XML
    tree = ET.parse('./datas/' + arquivo)
    root = tree.getroot()
    comp = root.findall('ListaNfse/CompNfse')
    

    for i in comp[0].findall('Nfse/InfNfse'):
        
        dec = 'DeclaracaoPrestacaoServico/InfDeclaracaoPrestacaoServico/'
        
        
        
        json = {
            'PrestadorServico': {
                'Cnpj': i.find('PrestadorServico/IdentificacaoPrestador/CpfCnpj/Cnpj').text,
                'RazaoSocial': i.find('PrestadorServico/RazaoSocial').text,
                'Endereco': i.find('PrestadorServico/Endereco/Endereco').text,
                'Numero': i.find('PrestadorServico/Endereco/Numero').text,
                'Bairro': i.find('PrestadorServico/Endereco/Bairro').text,
                'CodigoMunicipio': i.find('PrestadorServico/Endereco/CodigoMunicipio').text,
                'Uf': i.find('PrestadorServico/Endereco/Uf').text,
                'Cep': i.find('PrestadorServico/Endereco/Cep').text,
                'Telefone': i.find('PrestadorServico/Contato/Telefone').text,
                'Email': i.find('PrestadorServico/Contato/Email').text,
            },
            'Servico': {
                'Discriminacao': i.find(dec + 'Servico/Discriminacao').text,
                'DataEmissao': i.find(dec + 'Rps/DataEmissao').text,
                'Quantidade': i.find(dec + 'Servico/Quantidade').text,
                'ValorServicos':  i.find(dec + 'Servico/Valores/ValorServicos').text,
                'ValorDeducoes': i.find(dec + 'Servico/Valores/ValorDeducoes').text,
                'ValorPis': i.find(dec + 'Servico/Valores/ValorPis').text,
                'ValorCofins': i.find(dec + 'Servico/Valores/ValorCofins').text,
                'ValorInss': i.find(dec + 'Servico/Valores/ValorInss').text,
                'ValorIr': i.find(dec + 'Servico/Valores/ValorIr').text,
                'ValorCsll': i.find(dec + 'Servico/Valores/ValorCsll').text,
                'OutrasRetencoes': i.find(dec + 'Servico/Valores/OutrasRetencoes').text,
                'ValorIss': i.find(dec + 'Servico/Valores/ValorIss').text,
                'Aliquota': i.find(dec + 'Servico/Valores/Aliquota').text,
                'DescontoIncondicionado': i.find(dec + 'Servico/Valores/DescontoIncondicionado').text,
                'DescontoCondicionado': i.find(dec + 'Servico/Valores/DescontoCondicionado').text,
                
                
            },
            'Tomador': {
                'Cnpj': i.find(dec + 'Tomador/IdentificacaoTomador/CpfCnpj/Cnpj').text,
                'RazaoSocial': i.find(dec + 'Tomador/RazaoSocial').text,
                'Endereco': i.find(dec + 'Tomador/Endereco/Endereco').text,
                'Numero': i.find(dec + 'Tomador/Endereco/Numero').text,
                'Bairro': i.find(dec + 'Tomador/Endereco/Bairro').text,
                'CodigoMunicipio': i.find(dec + 'Tomador/Endereco/CodigoMunicipio').text,
                'Estado': i.find(dec + 'Tomador/Endereco/Uf').text,
                'CEP': i.find(dec + 'Tomador/Endereco/Cep').text,
                'Email': i.find(dec + 'Tomador/Contato/Email').text,
            },
            'OrgaoGerador':{
                'CodigoMunicipio': i.find('OrgaoGerador/CodigoMunicipio').text,
                'Uf': i.find('OrgaoGerador/Uf').text,
            }
        }
        
    return json

def listar_arquivos(diretorio):
    arquivos = []
    for item in os.listdir(diretorio):
        caminho_completo = os.path.join(diretorio, item)
        
        if os.path.isfile(caminho_completo):
            arquivos.append(item)
    
    return arquivos

def busca_subsgtring_arquivo(arquivo, texto):
    with open(arquivo, 'r') as f:
        for line in f:
            if texto in line:
                return True
    return None



def listar_arquivos(diretorio):
    arquivos = []
    
    for item in os.listdir(diretorio):
        caminho_completo = os.path.join(diretorio, item)
        
        if os.path.isfile(caminho_completo):
            arquivos.append(item)
    
    return arquivos


def busca_substring(texto):
    arquivos = listar_arquivos('./datas')
    resultados = []
    
    for arquivo in arquivos:
        if busca_subsgtring_arquivo(f'./datas/{arquivo}', texto):
            resultados.append(arquivo)
    
    return resultados