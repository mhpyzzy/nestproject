import { Cat } from './interfaces';
export declare class CatsService {
    private readonly cats;
    create(cat: Cat): Promise<number>;
    findAll(): Cat[];
}
