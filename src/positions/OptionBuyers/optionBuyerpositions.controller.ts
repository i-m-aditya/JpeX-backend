import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OptionBuyerPositionDto } from './dto/create-optionBuyer-position.dto';
import { OptionBuyerPositionService } from './optionBuyerPositions.service';
import { OptionBuyerPosition } from './schema/optionBuyerPositions.schema';


@Controller('positions/buyer')
export class OptionBuyerPositionController {
  constructor(private readonly positionService: OptionBuyerPositionService) {}

  @Post()
  async create(@Body() createPositionDto: OptionBuyerPositionDto) {
    console.log("Yelllllo");
    await this.positionService.create(createPositionDto);
  }

  @Get()
  async findAll(): Promise<OptionBuyerPosition[]> {
    console.log('Fetch all');

    return await this.positionService.findAll();
  }

  @Get(":user")
  async findByUser(@Param("user") user:string): Promise<OptionBuyerPosition[]> {
    console.log("Find by user");
    
    return await this.positionService.getAllPositionsForUser(user)
  }

  @Post("update")
  async updatePosition(@Body() positionDto: OptionBuyerPositionDto) {
    console.log("Update Position", positionDto);

    this.positionService.updateUserPosition(positionDto)
    
  }
}
