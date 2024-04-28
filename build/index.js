console.log(`Hello Node.js v${process.versions.node}!`);
export {};
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
