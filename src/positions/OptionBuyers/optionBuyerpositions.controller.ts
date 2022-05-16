import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OptionBuyerPositionDto } from './dto/create-optionBuyer-position.dto';
import { OptionBuyerPositionService } from './optionBuyerPositions.service';
import { OptionBuyerPosition } from './schema/optionBuyerPositions.schema';


@Controller('positions/buyer')
export class OptionBuyerPositionController {
  constructor(private readonly positionService: OptionBuyerPositionService) {}

  @Post()
  async create(@Body() createPositionDto: OptionBuyerPositionDto) {
    console.log("Creating long position");
    await this.positionService.create(createPositionDto);
  }
  @Get(":user")
  async getActiveLongsForUser(@Param("user") user:string): Promise<OptionBuyerPosition[]> {
    console.log("Get active longs");
    
    return await this.positionService.getActiveLongsForUser(user)
  }

  @Post("update")
  async updatePosition(@Body() positionDto: OptionBuyerPositionDto) {
    console.log("Update Position", positionDto);

    this.positionService.updateUserPosition(positionDto)
    
  }
}
