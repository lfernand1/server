import { ApiProperty } from "@nestjs/swagger";


export class CreateMusicDto {
  @ApiProperty({
    description: "O número da música",
    example: 1
  })
  number: number;
}
