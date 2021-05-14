import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ListAllEntities, Cats } from './entities/cat.entity';
@Controller('cats')
export class CatsController {
    cats: Cats[] = [
    {id:0, name:'Romeo', age:7, breed:'Persiano'},
    {id:1, name:'Bizet', age:12, breed:'Abissino'},
    {id:2, name:'Matisse', age:10, breed:'Bengala'},
    {id:3, name:'Minou', age:5, breed:'Ragdoll'},
    {id:4, name:'Napoleone', age:9, breed:'Sphynx'}
];

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get('/getAll')
  findAll(@Query() query: ListAllEntities) {
    return JSON.stringify(this.cats);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return JSON.stringify(this.cats[`${id}`]);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}

/*@Controller('cats')
export class CatsController {
    constructor(private readonly appService: CatsService) {}
  /*@Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @MessagePattern('createCat')
  create(@Payload() CreateCatDto: CreateCatDto) {
    return this.appService.create(CreateCatDto);
  }

  @Get()
  @MessagePattern('findAllCats')
  findAll() {
    return this.appService.findAll();
  }

  @MessagePattern('findOneCat')
  findOne(@Payload() id: number) {
    return this.appService.findOne(id);
  }

  @MessagePattern('updateCat')
  update(@Payload() updateUserDto: UpdateCatDto) {
    return this.appService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern('removeCat')
  remove(@Payload() id: number) {
    return this.appService.remove(id);
  }
}*/