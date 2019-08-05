import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Cat } from './interfaces';
import { CatsService } from './cats.service';
import { async } from 'rxjs/internal/scheduler/async';

interface CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post('create')
  async create(@Body() createCatDto: CreateCatDto): Promise<any> {
    await this.catsService.create(createCatDto);
    return 'success';
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Get('error')
  async getError() {
    throw new HttpException(
      {
        code: 1002,
        msg: 'this is a customer errors!!!!!!!!!!!!!!!!!!!!',
      },
      HttpStatus.FORBIDDEN,
    );
  }

  @Get('user/:id/age/:age')
  getUserInfo(@Param() params): string {
    return { ...params };
  }
}
