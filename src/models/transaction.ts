// src/models/transaction.ts
export class Transaction {
    private id: number;
    private senderId: number;
    private recipientId: number;
    private amount: number;
    private date: Date;
  
    constructor(id: number, senderId: number, recipientId: number, amount: number, date: Date) {
      this.id = id;
      this.senderId = senderId;
      this.recipientId = recipientId;
      this.amount = amount;
      this.date = date;
    }
  
    // Add getters and setters here (optional)
  }
  