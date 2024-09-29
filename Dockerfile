# Usando uma imagem base oficial do Python
FROM python:3.11-slim

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo de dependências (requirements.txt) para o contêiner
COPY requirements.txt requirements.txt

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do código da aplicação para o contêiner
COPY . .

# Define a variável de ambiente para desativar o modo de debug do Flask
ENV FLASK_ENV=production

# Expõe a porta 5000 no contêiner
EXPOSE 5000

# Comando para rodar a aplicação Flask
CMD ["gunicorn", "-b", ":5000", "app:app", "--timeout", "0"]
