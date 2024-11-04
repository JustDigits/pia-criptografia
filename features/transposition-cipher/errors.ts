type DecryptionErrorName = 'INVALID_KEYWORD_LENGTH';

class DecryptionError extends Error {
  name: DecryptionErrorName;
  message: string;

  constructor(name: DecryptionErrorName, message: string) {
    super();
    this.name = name;
    this.message = message;
  }
}

export { DecryptionError };
