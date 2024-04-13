export class CloneError extends Error {
    constructor(message, status) {
      super(message);
      this.name = this.constructor.name;
      this.status = status;
    }
  }

export class CheckoutError extends Error {
    constructor(message, status) {
      super(message);
      this.name = this.constructor.name;
      this.status = status;
    }
  }