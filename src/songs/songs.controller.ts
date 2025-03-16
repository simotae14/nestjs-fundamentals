import { Controller, Delete, Get, Put, Post } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create(): string {
    return 'create a new song endpoint';
  }

  @Get()
  findAll(): string {
    return 'find all songs endpoint';
  }

  @Get(':id')
  findOne(): string {
    return 'fetch song on the based on id';
  }

  @Put(':id')
  update(): string {
    return 'update song on the based on id';
  }

  @Delete(':id')
  remove(): string {
    return 'delete song on the based on id';
  }
}
