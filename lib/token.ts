import Storage from './storage';

class Token {
  constructor() {}

  public getToken(key: string): string {
    return Storage.get(key) as string;
  }

  public saveToken(key: string, value: string): void {
    Storage.set(key, value);
  }
}

export default new Token() as Token;
