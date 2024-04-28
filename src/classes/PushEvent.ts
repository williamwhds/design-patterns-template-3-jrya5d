import { IEvent } from './IEvent.js';

export class PushEvent implements IEvent {
  public send(message: string) {
    console.log('Enviando evento por push', message);
  }
}
