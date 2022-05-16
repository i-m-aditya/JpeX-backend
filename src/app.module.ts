import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from "dotenv";
import { CatsModule } from './cats/cats.module';
import { OptionSellerPositionModule } from './positions/OpionSellers/optionSellerPositions.module';
import { OptionBuyerPositionModule } from './positions/OptionBuyers/optionBuyerPositions.module';
import { RecentTxsModule } from './positions/RecentTxs/recentTxs.module';

dotenv.config()


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://0xsensei:WSkVr2TqbNcHruOE@cluster0.tyxoc.mongodb.net", {
      dbName: "test",
    }),
    CatsModule,
    OptionSellerPositionModule,
    OptionBuyerPositionModule,
    RecentTxsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
