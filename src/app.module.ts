import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from "dotenv";
import { OptionSellerPositionModule } from './positions/OpionSellers/optionSellerPositions.module';
import { OptionBuyerPositionModule } from './positions/OptionBuyers/optionBuyerPositions.module';
import { RecentTxsModule } from './positions/RecentTxs/recentTxs.module';

dotenv.config()


@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: "test",
    }),
    OptionSellerPositionModule,
    OptionBuyerPositionModule,
    RecentTxsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
