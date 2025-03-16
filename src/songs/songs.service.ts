import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local DB
  // local array of songs
  private readonly songs: string[] = [];

  // create a new song
  create(song: string) {
    // Save the song in the DB
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch the songs from the DB
    return this.songs;
  }
}
