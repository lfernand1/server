import { Injectable } from "@nestjs/common";
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMusicDto } from "./dto/create-music.dto";
import { UpdateMusicDto } from "./dto/update-music.dto";
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
        const findUnique = this.prisma.musics.findUnique;
        return findUnique({
            where: {
                id,
            }
        })
    }

    update(id: string, dto: UpdateMusicDto): Promise<Music> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string) {
        await this.prisma.musics.delete({ where: { id } });
      }


    create({ dto }: { dto: CreateMusicDto; }): Promise<Music> {
        const musics: Music = {
            ...dto,
            id: ""
        };

        return this.prisma.musics.create({musics});
    }
}