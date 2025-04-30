/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Controller,
  Delete,
  Get,
  Put,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
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
    try {
      return this.songsService.findAll();
    } catch (error) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    id: number,
  ): string {
    return `fetch song on the based on id ${typeof id}`;
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
