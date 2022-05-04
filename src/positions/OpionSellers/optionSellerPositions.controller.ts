import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OptionSellerPositionDto } from './dto/create-optionSeller-position.dto';
import { OptionSellerPositionService } from './optionSellerPositions.service';
import { OptionSellerPosition } from './schema/optionSellerPositions.schema';


@Controller('positions/seller')
export class OptionSellerPositionController {
  constructor(private readonly positionService: OptionSellerPositionService) {}

  @Post()
  async create(@Body() createPositionDto: OptionSellerPositionDto) {
    console.log("Yelllllo");
    await this.positionService.create(createPositionDto);
  }

  @Get()
  async findAll(): Promise<OptionSellerPosition[]> {
    console.log('Fetch all');

    return await this.positionService.findAll();
  }

  @Get(":user")
  async findByUser(@Param("user") user:string): Promise<OptionSellerPosition[]> {
    console.log("Find by user");
    
    return await this.positionService.getAllPositionsForUser(user)
  }

  @Post("update")
  async updatePosition(@Body() positionDto: OptionSellerPositionDto) {
    console.log("Update Position", positionDto);

    this.positionService.updatePosition(positionDto)
    
  }
}
