/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local DB
  // local array of songs
  private readonly songs: any = [];

  // create a new song
  create(song) {
    // Save the song in the DB
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    throw new Error('Error in DB while fetching record');
    // fetch the songs from the DB
    return this.songs;
  }
}
