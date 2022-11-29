import { Body, Controller,Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateMusicDto } from "./dto/create-music.dto";
import { Music } from "./entities/music.entity";
import { MusicService } from "./music.service";

@ApiTags("music")
@Controller('music')
export class MusicController {
constructor(private musicService: MusicService){}

@Get()
findAll() {
    return this.musicService.findAll();
}

@Get(":id")
@ApiOperation({
  summary: "Visualizar uma música"
})
findOne(@Param("id") id: string): Promise<Music> {
  return this.musicService.findOne(id);
}


@Post()
create(@Body() CreateMusicDto: CreateMusicDto ){
    return this.musicService.create({ dto: CreateMusicDto })
}

}