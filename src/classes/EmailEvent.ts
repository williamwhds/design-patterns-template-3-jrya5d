import { IEvent } from './IEvent.js';

export class EmailEvent implements IEvent {
  public send(message: string) {
    console.log('Enviando evento por e-mail', message);
  }
}
