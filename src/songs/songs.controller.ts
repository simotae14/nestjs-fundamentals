/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Delete, Get, Put, Post, Body } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
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
  delete(): string {
    return 'delete song on the based on id';
  }
}
