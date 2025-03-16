import { Controller, Delete, Get, Put, Post } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create('Animals by Martin Garrix');
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
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
