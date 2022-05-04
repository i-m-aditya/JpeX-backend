import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  OptionBuyerPosition,
  OptionBuyerPositionDocument,
} from './schema/optionBuyerPositions.schema';
import { OptionBuyerPositionDto } from './dto/create-optionBuyer-position.dto';

@Injectable()
export class OptionBuyerPositionService {
  constructor(
    @InjectModel(OptionBuyerPosition.name)
    private optionBuyerPositionModel: Model<OptionBuyerPositionDocument>,
  ) {}

  async create(
    createOptionSellerPositionDto: OptionBuyerPositionDto,
  ): Promise<OptionBuyerPosition> {
    const createdPostion = new this.optionBuyerPositionModel(
      createOptionSellerPositionDto,
    );
    return createdPostion.save();
  }

  async findAll(): Promise<OptionBuyerPosition[]> {
    return this.optionBuyerPositionModel.find().exec();
  }

  async getAllPositionsForUser(user: string): Promise<OptionBuyerPosition[]> {
    return this.optionBuyerPositionModel.findOne({
      user: user,
    });
  }

  async updateUserPosition(updatedPosition: OptionBuyerPosition) {
    return this.optionBuyerPositionModel.updateOne(
      {
        user: updatedPosition.user,
        strike: updatedPosition.strike,
        status: 'ACTIVE',
      },
      {
        $set: updatedPosition,
      },
    );
  }

  // async updatePositionStatus(
  //   updatedPosition: OptionBuyerPosition
  // ) {
  //   return this.optionBuyerPositionModel.updateOne(
  //     {
  //       user: updatedPosition.user,
  //       status: "ACTIVE"
  //     },
  //     {
  //       $set: {
  //         status: 'INACTIVE'
  //       }
  //     }
  //   )
  // }
}
