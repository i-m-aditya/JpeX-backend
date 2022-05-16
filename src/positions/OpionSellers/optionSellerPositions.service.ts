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

  async getActiveShortsForUser(user: string): Promise<OptionSellerPosition[]> {
    return this.optionSellerPositionModel.find({
      user: user,
      status: 'ACTIVE'
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

  async findByEpoch(epoch: Number): Promise<OptionSellerPosition[]> {

    console.log("Epoch", epoch);
    
    return this.optionSellerPositionModel.find({
      epoch: epoch,
      status: "ACTIVE"
    })
  }
}
