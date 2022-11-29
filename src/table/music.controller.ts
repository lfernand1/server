import { Body, Controller,Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateMusicDto } from "./dto/create-music.dto";
import { MusicService } from "./music.service";

@ApiTags("music")
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