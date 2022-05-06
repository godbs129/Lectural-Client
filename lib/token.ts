class Token {
  constructor() {}

  public getToken(key: string): string {
    let token;

    if (typeof window !== 'undefined') {
      token = localStorage.getItem(key);
    }

    return token as string;
  }

  public saveToken(key: string, value: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }
}

export default new Token() as Token;
