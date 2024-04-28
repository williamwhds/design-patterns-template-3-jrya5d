import { EmailEvent } from "./classes/EmailEvent.js";
import { PushEvent } from "./classes/PushEvent.js";
import { SMSEvent } from "./classes/SMSEvent.js";
import { EventLogger } from "./classes/EventLogger.js";
import { EventLog } from "./classes/EventLog.js";

/**
 * As classes EmailEvent, PushEvent e SMSEvent são responsáveis pelo envio de
 * eventos do sistema em cada uma das opções: e-mail, push e SMS.
 *
 * Você deve implementar o padrão Decorator. Crie um decorator que realiza um log
 * de cada envio de evento. O log deve ser inserido em uma variável global que
 * armazena todos os logs de eventos do sistema (implemente-a como um Singleton).
 *
 * Por exemplo, ao chamar a função send() de EmailEvent, você deve adicionar o
 * texto "00:00 Event - message", onde 00:00 é a data e hora atual e message
 * é o conteúdo da mensagem.
 *
 * Em outras palavras, ao chamar (new PushEvent).send("Hello") às 13:50h, você deve adicionar
 * ao Singleton o log "13:50 Event - 'Hello'"
 *
 * Crie alguns casos de teste e exiba, no terminal, o conteúdo da variável global.
 */

// Exemplo de evento de e-mail com decorador de logging
const emailEvent = new EmailEvent();
const loggedEmailEvent = new EventLogger(emailEvent);
loggedEmailEvent.send('Hello, this is an email event.');

// Exemplo de evento de push com decorador de logging
const pushEvent = new PushEvent();
const loggedPushEvent = new EventLogger(pushEvent);
loggedPushEvent.send('Hello, this is a push event.');

// Exemplo de evento de SMS com decorador de logging
const smsEvent = new SMSEvent();
const loggedSMSEvent = new EventLogger(smsEvent);
loggedSMSEvent.send('Hello, this is an SMS event.');

// Exibir logs no terminal
console.log(EventLog.getInstance().getLogs());
