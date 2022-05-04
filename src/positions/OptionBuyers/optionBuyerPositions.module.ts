import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OptionBuyerPositionController } from './optionBuyerpositions.controller';
import { OptionBuyerPositionService } from './optionBuyerPositions.service';
import { OptionBuyerPosition, OptionBuyersPositionSchema } from './schema/optionBuyerPositions.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: OptionBuyerPosition.name, schema: OptionBuyersPositionSchema }])],
  controllers: [OptionBuyerPositionController],
  providers: [OptionBuyerPositionService],
})
export class OptionBuyerPositionModule {}