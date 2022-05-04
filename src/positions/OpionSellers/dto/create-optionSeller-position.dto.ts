export class OptionSellerPositionDto {
  readonly user: string;
  readonly nft: string;
  readonly pfpUrl: string;
  readonly option: string;
  readonly status: string;
  readonly tokenId?: Number;
  readonly action: string;
  readonly epoch: Number;
  readonly isEpochExpired: boolean;
  readonly premium: string;
  readonly strike: string;
  readonly quantity: Number;
  readonly oraclePrice:  string;
  readonly expiry: string;
  readonly isClaimable: boolean;
  readonly settlementDeposit? : Number;
  readonly isDepositForSettlementApproved?: boolean;
  readonly txUrl: string;
}
