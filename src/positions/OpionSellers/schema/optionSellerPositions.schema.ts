import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OptionSellerPositionDocument = OptionSellerPosition & Document;

@Schema()
export class OptionSellerPosition {
  @Prop()
  user: string;
  @Prop()
  nft: string;
  @Prop()
  pfpUrl: string;
  @Prop()
  option: string;
  @Prop()
  status: string;
  @Prop()
  tokenId?: Number;
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
  settlementDeposit?: Number;
  @Prop()
  isDepositForSettlementApproved?: boolean;
  @Prop()
  txUrl: string;
}

export const OptionSellerPositionSchema =
  SchemaFactory.createForClass(OptionSellerPosition);
