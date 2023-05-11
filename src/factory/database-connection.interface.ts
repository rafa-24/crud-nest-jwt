export interface DatabaseConnection {
  create(): Promise<any>;
  close(): any;
  getClient(): string;
}
