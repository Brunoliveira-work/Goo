from flask import Flask, jsonify, request
import xml.etree.ElementTree as ET
from defs import busca_substring, listar_arquivos, parse_xml, busca_subsgtring_arquivo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['POST'])
def getData(): 
    campo_busca = request.json['campo_busca']
    
    if campo_busca is None:
        return jsonify({'message': 'Campo de busca não informado'}), 400
     
    arquivos = busca_substring(campo_busca)
    
    jsons = []
    for arquivo in arquivos:
        json = parse_xml(arquivo)
        jsons.append(json)
    
    if not jsons:
        return jsonify({'message': 'Nenhum arquivo encontrado'}), 404
    
    return jsonify(jsons)




    
if __name__ == '__main__':
    app.run(debug=True)
