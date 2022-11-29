import { Injectable } from "@nestjs/common";
import { CreateMusicDto } from "./dto/create-music.dto";
import { Music } from "./entities/music.entity";

@Injectable()
export class MusicService {
musics: Music[] = [];

    findAll() {
        return this.musics;
    }
    create(createMusicDto: CreateMusicDto) {
        const music: Music = {id:'ramdom_id', ...createMusicDto}

this.musics.push(music)

        return music;
    }
}