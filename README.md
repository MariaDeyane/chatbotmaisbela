# WhatsApp Chatbot - Clínica Mais Bela

Este é um chatbot desenvolvido com `whatsapp-web.js` para atender clientes da Clínica Mais Bela via WhatsApp. Ele guia os usuários por diferentes opções de atendimento, como Ginecologia, Nutrologia, Ortopedia e Estética Avançada.

## 🚀 Funcionalidades
- Responde automaticamente a mensagens enviadas para o número da clínica.
- Direciona os usuários com base em suas escolhas.
- Fornece informações sobre consultas, procedimentos e valores.
- Permite agendamento de serviços ao coletar dados do paciente.
- Restringe mensagens a texto (sem áudios) para agilizar o atendimento.

## 🛠️ Tecnologias Utilizadas
- [Node.js](https://nodejs.org/) - Ambiente de execução do JavaScript.
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) - Biblioteca para automação do WhatsApp Web.
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) - Exibição de QR Code no terminal para autenticação.
- [Git](https://git-scm.com/) - Controle de versão e gerenciamento do código-fonte.
- [VS Code](https://code.visualstudio.com/) - Editor de código utilizado no desenvolvimento.

## 📦 Instalação
### 1️⃣ Clone o repositório:
```sh
git clone https://github.com/Seu-Usuario/chatbotmaisbela.git
cd chatbotmaisbela
```

### 2️⃣ Instale as dependências:
```sh
npm install
```

### 3️⃣ Inicie o bot:
```sh
node chatbot.js
```

## 📲 Configuração e Uso
1. Após rodar `node chatbot.js`, será gerado um QR Code no terminal.
2. Escaneie esse QR Code com o WhatsApp Web para conectar.
3. O bot estará ativo e pronto para responder mensagens!

## 📌 Estrutura do Projeto
```
whatsapp-chatbot-clinica/
├── node_modules/          # Dependências do projeto
├── chatbot.js             # Arquivo principal do chatbot
├── package.json           # Informações do projeto e dependências
├── README.md              # Documentação do projeto
```

---

Desenvolvido com ❤️ para facilitar o atendimento da Clínica Mais Bela. 😊

