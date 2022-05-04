import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecentTxsController } from './recentTxs.controller';
import { RecentTxsService } from './recentTxs.service';
import { RecentTxs, RecentTxsSchema } from './schema/recentTxs.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: RecentTxs.name, schema: RecentTxsSchema }])],
  controllers: [RecentTxsController],
  providers: [RecentTxsService],
})
export class RecentTxsModule {}