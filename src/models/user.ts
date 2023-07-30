// src/models/user.ts
export class User {
  private id: number;
  private username: string;
  private password: string;
  private balance: number;

  constructor(id: number, username: string, password: string, balance: number) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.balance = balance;
  }

  // Add getters and setters here (optional)
}
