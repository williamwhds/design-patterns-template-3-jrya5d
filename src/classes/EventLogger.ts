import { IEvent } from "./IEvent.js";
import { EventLog } from "./EventLog.js";

export class EventLogger implements IEvent {
    private originalEvent: IEvent;
  
    constructor(originalEvent: IEvent) {
      this.originalEvent = originalEvent;
    }
  
    public send(message: string) {
      const log = `${this.getCurrentTime()} Event - '${message}'`;
      EventLog.getInstance().addLog(log); // Adicionando o log à variável global
      this.originalEvent.send(message); // Enviando o evento original
    }
  
    private getCurrentTime(): string {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    }
}
