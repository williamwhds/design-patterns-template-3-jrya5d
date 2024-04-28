import { IEvent } from './IEvent.js';

export class SMSEvent implements IEvent {
  public send(message: string) {
    console.log('Enviando evento por SMS', message);
  }
}
