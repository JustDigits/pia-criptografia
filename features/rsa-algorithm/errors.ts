type KeyGenerationErrorName = 'INVALID_PUBLIC_KEY_E' | 'UNKNOWN_ERROR';

class KeyGenerationError extends Error {
  name: KeyGenerationErrorName;
  message: string;

  constructor(name: KeyGenerationErrorName, message: string) {
    super();
    this.name = name;
    this.message = message;
  }
}

export { KeyGenerationError };
