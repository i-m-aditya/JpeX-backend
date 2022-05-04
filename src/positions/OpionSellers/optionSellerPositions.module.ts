import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OptionSellerPositionController } from './optionSellerPositions.controller';
import { OptionSellerPositionService } from './optionSellerPositions.service';
import { OptionSellerPosition, OptionSellerPositionSchema } from './schema/optionSellerPositions.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: OptionSellerPosition.name, schema: OptionSellerPositionSchema }])],
  controllers: [OptionSellerPositionController],
  providers: [OptionSellerPositionService],
})
export class OptionSellerPositionModule {}