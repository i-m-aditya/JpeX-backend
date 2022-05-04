export class RecentTxsDto {
  readonly user: string;
  readonly nft: string;
  readonly option: string;
  readonly status: string;
  readonly action: string;
  readonly epoch: Number;
  readonly isEpochExpired: boolean;
  readonly premium: string;
  readonly strike: string;
  readonly quantity: Number;
  readonly oraclePrice:  string;
  readonly expiry: string;
  readonly isClaimable: boolean;
  readonly earnings: Number;
  readonly txUrl: string;
}
