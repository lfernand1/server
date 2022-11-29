import { Body, Controller,Get, Post } from "@nestjs/common";
import { CreateMusicDto } from "./dto/create-music.dto";
import { MusicService } from "./music.service";


@Controller('music')
export class MusicController {
constructor(private musicService: MusicService){}

@Get()
findAll() {
    return this.musicService.findAll();
}

@Post()
create(@Body() CreateMusicDto: CreateMusicDto ){
    return this.musicService.create(CreateMusicDto)
}

}