import { Injectable } from "@nestjs/common";
import { PrismaService } from 'prisma/prisma.service';
import { CreateMusicDto } from "./dto/create-music.dto";
import { Music } from "./entities/music.entity";

@Injectable()
export class MusicService {
musics: Music[
    
] = [];
constructor(private readonly prisma: PrismaService) {}

    findAll():Promise<Music[]>{
        return this.prisma.musics.findMany();
    }

    findOne({ id }: { id: string; }):Promise<Music>{
        return this.prisma.musics.findUnique({
            where: {
                id,
            }
        })
    }


    create({ dto }: { dto: CreateMusicDto; }): Promise<Music> {
        const data: Music = {...dto};

        return this.prisma.musics.create({data});
    }
}