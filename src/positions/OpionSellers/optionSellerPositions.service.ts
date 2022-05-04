import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OptionSellerPosition, OptionSellerPositionDocument } from './schema/optionSellerPositions.schema';
import { OptionSellerPositionDto } from './dto/create-optionSeller-position.dto';

@Injectable()
export class OptionSellerPositionService {
  constructor(
    @InjectModel(OptionSellerPosition.name) private optionSellerPositionModel: Model<OptionSellerPositionDocument>,
  ) {}

  async create(createOptionSellerPositionDto: OptionSellerPositionDto): Promise<OptionSellerPosition> {
    const createdPostion = new this.optionSellerPositionModel(createOptionSellerPositionDto);
    return createdPostion.save();
  }

  async findAll(): Promise<OptionSellerPosition[]> {
    return this.optionSellerPositionModel.find().exec();
  }

  async getAllPositionsForUser(user: string): Promise<OptionSellerPosition[]> {
    return this.optionSellerPositionModel.findOne({
      user: user,
    });
  }

  async updatePosition(
    updatedPosition: OptionSellerPosition,
  ) {
    return this.optionSellerPositionModel.updateOne(
      {
        user: updatedPosition.user,
        tokenId: updatedPosition.tokenId,
        status: 'ACTIVE'
      },
      {
        $set: updatedPosition,
      },
    );
  }
}
