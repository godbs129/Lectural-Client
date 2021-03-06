class Storage {
  get(key: string): string | null {
    let value: string | null = null;

    if (typeof window !== 'undefined') {
      value = localStorage.getItem(key);
    }

    return value;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, value);
  }
}

export default new Storage();
