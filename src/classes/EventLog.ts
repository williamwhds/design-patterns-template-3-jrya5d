import { IEvent } from './IEvent.js';

export class EventLog {
  private static instance: EventLog;
  private logs: string[];

  private constructor() {
    this.logs = [];
  }

  public static getInstance(): EventLog {
    if (!EventLog.instance) {
      EventLog.instance = new EventLog();
    }
    return EventLog.instance;
  }

  public addLog(log: string) {
    this.logs.push(log);
  }

  public getLogs(): string[] {
    return this.logs;
  }
}
