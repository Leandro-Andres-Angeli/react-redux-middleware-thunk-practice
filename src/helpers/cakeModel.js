import { idGenerator } from './idGenerator';

export class Cake {
  constructor(title) {
    this.id = idGenerator();
    this.title = title;
    this.previewDescription = 'preview description cake';
    this.detailDescription = 'detail description cake';
    this.image =
      'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80';
  }
}
