import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OptionBuyerPositionDocument = OptionBuyerPosition & Document;

@Schema()
export class OptionBuyerPosition {
  @Prop()
  user: string;
  @Prop()
  nft: string;
  @Prop()
  option: string;
  @Prop()
  status: string;
  @Prop()
  action: string;
  @Prop()
  epoch: Number;
  @Prop()
  isEpochExpired: boolean;
  @Prop()
  premium: string;
  @Prop()
  strike: string;
  @Prop()
  quantity: Number;
  @Prop()
  oraclePrice: string;
  @Prop()
  expiry: string;
  @Prop()
  isClaimable: boolean;
  @Prop()
  earnings?: Number;
  @Prop()
  txUrl: string;
}

export const OptionBuyersPositionSchema =
  SchemaFactory.createForClass(OptionBuyerPosition);
