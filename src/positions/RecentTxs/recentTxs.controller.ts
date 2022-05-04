import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RecentTxsDto } from './dto/create-recentTxs.dto';
import { RecentTxsService as RecentTxsService } from './recentTxs.service';
import { RecentTxs } from './schema/recentTxs.schema';


@Controller('txs')
export class RecentTxsController {
  constructor(private readonly txService: RecentTxsService) {}

  @Post()
  async create(@Body() createTxDto: RecentTxsDto) {
    await this.txService.create(createTxDto);
  }

  @Get()
  async findAll(): Promise<RecentTxs[]> {
    console.log('Fetch all');

    return await this.txService.findAll();
  }

}
