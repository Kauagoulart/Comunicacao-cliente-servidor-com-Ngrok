# Comunicação Cliente-Servidor com Ngrok

Projeto acadêmico que demonstra comunicação em tempo real entre cliente e servidor usando Node.js e tunelamento via Ngrok. Permite expor um servidor local para acesso externo sem necessidade de deploy, útil para testes e desenvolvimento distribuído.

## 🛠️ Tecnologias

- Node.js
- JavaScript
- Ngrok (tunelamento HTTP)

## 📁 Estrutura

```
├── server.js     # Servidor Node.js que recebe as conexões
├── client.js     # Cliente que se conecta ao servidor via Ngrok
├── lista.txt     # Dados utilizados na comunicação
└── package.json
```

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org) 18+
- Conta gratuita no [Ngrok](https://ngrok.com) e o binário instalado

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/Kauagoulart/Comunicacao-cliente-servidor-com-Ngrok.git
cd Comunicacao-cliente-servidor-com-Ngrok

# Instale as dependências
npm install

# Em um terminal, inicie o servidor
node server.js

# Em outro terminal, exponha o servidor com Ngrok
ngrok http 3000

# Copie a URL gerada pelo Ngrok e use no client.js, depois execute
node client.js
```

## 💡 Contexto

Projeto desenvolvido para estudos de sistemas distribuídos e comunicação entre processos em rede, explorando como servidores locais podem ser acessados remotamente durante o desenvolvimento.

## 👤 Autor

Kauã Goulart — [github.com/Kauagoulart](https://github.com/Kauagoulart)
