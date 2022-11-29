import { Injectable } from "@nestjs/common";
import { PrismaService } from 'prisma/prisma.service';
import { CreateMusicDto } from "./dto/create-music.dto";
import { Music } from "./entities/music.entity";

@Injectable()
export class MusicService {
musics: Music[] = [];
constructor(private readonly prisma: PrismaService) {}

    findAll() {
        return this.musics;
    }
    create(createMusicDto: CreateMusicDto) {
        const music: Music = {id:'ramdom_id', ...createMusicDto}

this.musics.push(music)

        return music;
    }
}