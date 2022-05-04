import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  RecentTxs,
  RecentTxsDocument,
} from './schema/recentTxs.schema';
import { RecentTxsDto } from './dto/create-recentTxs.dto';

@Injectable()
export class RecentTxsService {
  constructor(
    @InjectModel(RecentTxs.name)
    private txModel: Model<RecentTxsDocument>,
  ) {}

  async create(
    createTxDto: RecentTxsDto,
  ): Promise<RecentTxs> {
    const createdPostion = new this.txModel(
      createTxDto,
    );
    return createdPostion.save();
  }

  async findAll(): Promise<RecentTxs[]> {
    return this.txModel.find().exec();
  }

  async getAllPositionsForUser(user: string): Promise<RecentTxs[]> {
    return this.txModel.findOne({
      user: user,
    });
  }

  
}
