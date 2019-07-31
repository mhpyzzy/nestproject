import { Cat } from './interfaces';
import { CatsService } from './cats.service';
interface CreateCatDto {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<any>;
    findAll(): Promise<Cat[]>;
    getError(): Promise<void>;
    getUserInfo(params: any): string;
}
export {};
