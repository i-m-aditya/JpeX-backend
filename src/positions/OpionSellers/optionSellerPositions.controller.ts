import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OptionSellerPositionDto } from './dto/create-optionSeller-position.dto';
import { OptionSellerPositionService } from './optionSellerPositions.service';
import { OptionSellerPosition } from './schema/optionSellerPositions.schema';

@Controller('positions/seller')
export class OptionSellerPositionController {
  constructor(private readonly positionService: OptionSellerPositionService) {}

  @Post()
  async create(@Body() createPositionDto: OptionSellerPositionDto) {
    console.log('Creating short position');
    await this.positionService.create(createPositionDto);
  }

  @Get(':user')
  async getAllShortPositionsForUser(
    @Param('user') user: string,
  ): Promise<OptionSellerPosition[]> {
    console.log('Get all shorts');

    return await this.positionService.getActiveShortsForUser(user);
  }

  @Post('update')
  async updatePosition(@Body() positionDto: OptionSellerPositionDto) {
    console.log('Update Position', positionDto);

    this.positionService.updatePosition(positionDto);
  }

  @Get('epoch/:epoch')
  async findByEpoch(
    @Param('epoch') epoch: Number,
  ): Promise<OptionSellerPosition[]> {
    console.log('Find by epoch triggered');
    return await this.positionService.findByEpoch(epoch);
  }
}
