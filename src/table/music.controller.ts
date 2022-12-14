import { Body, Controller,Delete,Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateMusicDto } from "./dto/create-music.dto";
import { Music } from "./entities/music.entity";
import { MusicService } from "./music.service";
import { ApiOperation } from '@nestjs/swagger'
import { UpdateMusicDto } from "./dto/update-music.dto";

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

@Patch(':id')
@ApiOperation({
  summary: 'Editar uma música pelo ID',
})
update(@Param('id') id: string, @Body() dto: UpdateMusicDto): Promise<Music> {
  return this.musicService.update(id, dto);
}

@Delete(':id')
@HttpCode(HttpStatus.NO_CONTENT)
@ApiOperation({
  summary: 'Remover uma música pelo ID',
})
delete(@Param('id') id: string) {
  this.musicService.delete(id);
}

@Post()
create(@Body() CreateMusicDto: CreateMusicDto ){
    return this.musicService.create({ dto: CreateMusicDto })
}

}