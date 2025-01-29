const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();
const usersState = {}; // Armazena o estado do usuário

const delay = ms => new Promise(res => setTimeout(res, ms));

// Inicializa WhatsApp Web
client.on('qr', qr => qrcode.generate(qr, { small: true }));
client.on('ready', () => console.log('Tudo certo! WhatsApp conectado.'));
client.initialize();

// Fluxo da Conversa
client.on('message', async msg => {
    const userId = msg.from;

    // Se o usuário está iniciando a conversa ou enviando saudação
    if (!usersState[userId] || /(Oi|Olá|Bom dia|Boa tarde|Boa noite|Oi|oi|Olá|Ola|ola|dia|noite|tarde)/i.test(msg.body)) {
        usersState[userId] = "inicio"; // Define o estado inicial
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 2 segundos
        await client.sendMessage(userId, 
            'Olá, Clinica Mais Bela, agradece seu contato! Como posso ajudá-lo hoje? Digite uma opção:\n\n' +
            '1 - Ginecologista\n' +
            '2 - Nutrologia\n' +
            '3 - Ortopedista\n' +
            '4 - Estética Avançada\n\n' +
            '🕒 Todos os atendimentos são feitos com horário agendado.\n' +
            '🔇 Para agilizar, NÃO envie áudios, apenas mensagens de texto.');
        return;
    }

    // Fluxo de Ginecologista
    if (usersState[userId] === "inicio" && msg.body === "1") {
        usersState[userId] = "ginecologista";
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 2 segundos
        await client.sendMessage(userId, 
            'O que você está buscando?\n\n' +
            '1 - Consulta\n' +
            '2 - DIU\n' +
            '3 - Implanom\n' +
            '4 - Ninfoplastia\n' +
            '5 - Outra opção');
        return;
    }

    if (usersState[userId] === "ginecologista" && msg.body === "1") {
        usersState[userId] = "consulta_gineco";
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 2 segundos
        await client.sendMessage(userId, 
            'Ótimo! Para marcar uma consulta com a ginecologista, por favor, informe seu *nome completo* e se será pela *Unimed ou Particular*.\n' +
            'Nossa equipe entrará em contato para agendar o melhor horário para você. 😊');
        return;
    }

    if (usersState[userId] === "ginecologista" && msg.body === "2") {
        usersState[userId] = "diu";
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 2 segundos
        await client.sendMessage(userId, 
            '*Diu Mirena* - R$2.300,00 à vista ou parcelado com juros.\n' +
            '*Diu Cobre* - R$1.600,00 à vista ou parcelado com juros.\n' +
            '*Diu Prata* - R$1.600,00 à vista ou parcelado com juros.\n\n' +
            'Para colocação do DIU é necessário:\n' +
            '- Teste de gravidez negativo\n' +
            '- Preventivo atualizado (menos de 12 meses) com resultado normal');
        return;
    }

    if (usersState[userId] === "ginecologista" && msg.body === "3") {
        usersState[userId] = "implanon";
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 2 segundos
        await client.sendMessage(userId, 
            'O valor do *Implanon* é R$1.917,00 podendo parcelar em até 3x, ou à vista por R$1.800,00 (Pix, dinheiro ou débito).\n' +
            'Necessário apenas teste de gravidez negativo.\n' +
            '*Unimed não cobre o Implanon*.\n\n' +
            'Deseja agendar a colocação?');
        return;
    }

    if (usersState[userId] === "ginecologista" && msg.body === "4") {
        usersState[userId] = "ninfoplastia";
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 2 segundos
        await client.sendMessage(userId, 
            'O valor da cirurgia íntima varia entre *R$6.500 e R$10.000*, mas é importante lembrar que cada paciente é única. Por isso, é indispensável realizar uma avaliação detalhada para determinar o valor exato e o planejamento personalizado do procedimento.\n' +
            '⏱️ Duração do procedimento: cerca de 90 minutos.\n' +
            'Opções de avaliação:\n' +
            '1️⃣ Avaliação com custo' +
            'Realizada diretamente com a Dra. Priscila.' +
            'Valor: R$ 350,00 (online ou presencial).' +
            'Também disponível via Unimed (presencial).' +
            '2️⃣ Avaliação gratuita via WhatsApp' +
            'Envie uma foto com boa qualidade e iluminação adequada.' +
            'A imagem não pode estar embaçada nem ser de visualização única.' +
            'Deve seguir um ângulo específico (enviamos um modelo para referência, caso opte por esse tipo de avaliação).\n' +
            'Qualquer dúvida, estamos a disposição 💕');
        return;
    }

    if (usersState[userId] === "ginecologista" && msg.body === "5") {
        usersState[userId] = "outra_opcao";
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 2 segundos
        await client.sendMessage(userId, 
            'Qual seria a sua dúvida? 😊');
        return;
    }

    // Fluxo de Nutrologia
    if (usersState[userId] === "inicio" && msg.body === "2") {
        usersState[userId] = "nutrologia";
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 2 segundos
        await client.sendMessage(userId, 
            'O que você está buscando?\n\n' +
            '1 - Consulta\n' +
            '2 - Implante\n' +
            '3 - Protocolo de Emagrecimento\n' +
            '4 - Outra opção');
        return;
    }

    if (usersState[userId] === "nutrologia" && msg.body === "1") {
        usersState[userId] = "consulta_nutro";
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 2 segundos
        await client.sendMessage(userId, 
            'Para marcar uma consulta com o Nutrólogo, informe seu *nome completo* e se será pela *Unimed ou Particular*.\n' +
            'Nossa equipe entrará em contato para agendar o melhor horário para você. 😊');
        return;
    }

    if (usersState[userId] === "nutrologia" && msg.body === "2") {
        usersState[userId] = "implante";
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 2 segundos
        await client.sendMessage(userId, 
            'São implantes com medicamentos colocados embaixo da pele, para emagrecer e podem ser associados a parte hormonal, como para aumentar a Libido. A dose e a composição do implante depende da avaliação de cada paciente, como peso, composição corporal, avaliação dos exames laboratoriais e objetivo de emagrecimento. Precisaria passar por consulta para avaliar o que seria ideal pra você e quais os valores.\n' +
            '🥰 Atendemos pela unimed e particular! Gostaria de agendar uma consulta?');
        return;
    }

    if (usersState[userId] === "nutrologia" && msg.body === "3") {
        usersState[userId] = "protocolo_emagrecimento";
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 2 segundos
        await client.sendMessage(userId, 
            'São implantes com medicamentos colocados embaixo da pele, para emagrecer e podem ser associados a parte hormonal, como para aumentar a Libido. A dose e a composição do implante depende da avaliação de cada paciente, como peso, composição corporal, avaliação dos exames laboratoriais e objetivo de emagrecimento. Precisaria passar por consulta para avaliar o que seria ideal pra você e quais os valores.\n' +
            '🥰 Atendemos pela unimed e particular! Gostaria de agendar uma consulta?');
        return;
    }

    // Fluxo de Estética
    if (usersState[userId] === "inicio" && msg.body === "4") {
        usersState[userId] = "estetica";
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 2 segundos
        await client.sendMessage(userId, 
            'O que você está buscando?\n\n' +
            '1 - Avaliação\n' +
            '2 - Emagrecimento\n' +
            '3 - Facial\n' +
            '4 - Depilação a Laser\n' +
            '5 - Tratamento para Candidíase');
        return;
    }

    if (usersState[userId] === "estetica" && msg.body === "1") {
        usersState[userId] = "avaliacao_estetica";
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 2 segundos
        await client.sendMessage(userId, 
            'Para agendar uma avaliação estética, informe seu *nome completo* e nossa equipe entrará em contato.');
        return;
    }

    // Se o usuário enviar qualquer mensagem que não esteja no fluxo
    await client.sendMessage(userId, 
        'Desculpe, não entendi sua resposta. Por favor, digite uma das opções listadas acima.');
});
