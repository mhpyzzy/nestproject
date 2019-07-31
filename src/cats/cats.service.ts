import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  async create(cat: Cat) {
    return Promise.resolve(this.cats.push(cat));
  }
  findAll(): Cat[] {
    return this.cats;
  }
}
