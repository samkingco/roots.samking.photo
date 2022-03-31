import { gql } from 'urql';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

/** The block at which the query should be executed. */
export type Block_Height = {
  /** Value containing a block hash */
  readonly hash?: InputMaybe<Scalars['Bytes']>;
  /** Value containing a block number */
  readonly number?: InputMaybe<Scalars['Int']>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   *
   */
  readonly number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  readonly __typename?: 'Query';
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
  readonly rootsPhoto?: Maybe<RootsPhoto>;
  readonly rootsPhotos: ReadonlyArray<RootsPhoto>;
  readonly rootsStatus?: Maybe<RootsStatus>;
  readonly rootsStatuses: ReadonlyArray<RootsStatus>;
  readonly transfer?: Maybe<Transfer>;
  readonly transfers: ReadonlyArray<Transfer>;
  readonly wallet?: Maybe<Wallet>;
  readonly wallets: ReadonlyArray<Wallet>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryRootsPhotoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRootsPhotosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RootsPhoto_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RootsPhoto_Filter>;
};


export type QueryRootsStatusArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRootsStatusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RootsStatus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RootsStatus_Filter>;
};


export type QueryTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type QueryWalletArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWalletsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Wallet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Wallet_Filter>;
};

export type RootsPhoto = {
  readonly __typename?: 'RootsPhoto';
  readonly id: Scalars['ID'];
  readonly owner: Wallet;
  readonly ownerHistory: ReadonlyArray<Wallet>;
  readonly primarySaleAt: Scalars['BigInt'];
  readonly primarySaleBuyer: Wallet;
  readonly primarySalePrice: Scalars['BigInt'];
  readonly tokenId: Scalars['BigInt'];
  readonly tokenURI: Scalars['String'];
  readonly transfers: ReadonlyArray<Transfer>;
};


export type RootsPhotoOwnerHistoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Wallet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Wallet_Filter>;
};


export type RootsPhotoTransfersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Transfer_Filter>;
};

export type RootsPhoto_Filter = {
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly owner?: InputMaybe<Scalars['String']>;
  readonly ownerHistory?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly ownerHistory_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly ownerHistory_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly ownerHistory_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly ownerHistory_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly ownerHistory_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly owner_contains?: InputMaybe<Scalars['String']>;
  readonly owner_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_ends_with?: InputMaybe<Scalars['String']>;
  readonly owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_gt?: InputMaybe<Scalars['String']>;
  readonly owner_gte?: InputMaybe<Scalars['String']>;
  readonly owner_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly owner_lt?: InputMaybe<Scalars['String']>;
  readonly owner_lte?: InputMaybe<Scalars['String']>;
  readonly owner_not?: InputMaybe<Scalars['String']>;
  readonly owner_not_contains?: InputMaybe<Scalars['String']>;
  readonly owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly owner_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_starts_with?: InputMaybe<Scalars['String']>;
  readonly owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly primarySaleAt?: InputMaybe<Scalars['BigInt']>;
  readonly primarySaleAt_gt?: InputMaybe<Scalars['BigInt']>;
  readonly primarySaleAt_gte?: InputMaybe<Scalars['BigInt']>;
  readonly primarySaleAt_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly primarySaleAt_lt?: InputMaybe<Scalars['BigInt']>;
  readonly primarySaleAt_lte?: InputMaybe<Scalars['BigInt']>;
  readonly primarySaleAt_not?: InputMaybe<Scalars['BigInt']>;
  readonly primarySaleAt_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly primarySaleBuyer?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_contains?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_ends_with?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_gt?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_gte?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly primarySaleBuyer_lt?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_lte?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_not?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_not_contains?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly primarySaleBuyer_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_starts_with?: InputMaybe<Scalars['String']>;
  readonly primarySaleBuyer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly primarySalePrice?: InputMaybe<Scalars['BigInt']>;
  readonly primarySalePrice_gt?: InputMaybe<Scalars['BigInt']>;
  readonly primarySalePrice_gte?: InputMaybe<Scalars['BigInt']>;
  readonly primarySalePrice_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly primarySalePrice_lt?: InputMaybe<Scalars['BigInt']>;
  readonly primarySalePrice_lte?: InputMaybe<Scalars['BigInt']>;
  readonly primarySalePrice_not?: InputMaybe<Scalars['BigInt']>;
  readonly primarySalePrice_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly tokenId?: InputMaybe<Scalars['BigInt']>;
  readonly tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  readonly tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  readonly tokenId_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  readonly tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  readonly tokenId_not?: InputMaybe<Scalars['BigInt']>;
  readonly tokenId_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly tokenURI?: InputMaybe<Scalars['String']>;
  readonly tokenURI_contains?: InputMaybe<Scalars['String']>;
  readonly tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  readonly tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenURI_gt?: InputMaybe<Scalars['String']>;
  readonly tokenURI_gte?: InputMaybe<Scalars['String']>;
  readonly tokenURI_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tokenURI_lt?: InputMaybe<Scalars['String']>;
  readonly tokenURI_lte?: InputMaybe<Scalars['String']>;
  readonly tokenURI_not?: InputMaybe<Scalars['String']>;
  readonly tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  readonly tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenURI_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  readonly tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum RootsPhoto_OrderBy {
  Id = 'id',
  Owner = 'owner',
  OwnerHistory = 'ownerHistory',
  PrimarySaleAt = 'primarySaleAt',
  PrimarySaleBuyer = 'primarySaleBuyer',
  PrimarySalePrice = 'primarySalePrice',
  TokenId = 'tokenId',
  TokenUri = 'tokenURI',
  Transfers = 'transfers'
}

export type RootsStatus = {
  readonly __typename?: 'RootsStatus';
  readonly id: Scalars['ID'];
  readonly maxPhotos: Scalars['BigInt'];
  readonly primarySalePrice: Scalars['BigInt'];
  readonly totalBurned: Scalars['BigInt'];
  readonly totalSold: Scalars['BigInt'];
};

export type RootsStatus_Filter = {
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly maxPhotos?: InputMaybe<Scalars['BigInt']>;
  readonly maxPhotos_gt?: InputMaybe<Scalars['BigInt']>;
  readonly maxPhotos_gte?: InputMaybe<Scalars['BigInt']>;
  readonly maxPhotos_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly maxPhotos_lt?: InputMaybe<Scalars['BigInt']>;
  readonly maxPhotos_lte?: InputMaybe<Scalars['BigInt']>;
  readonly maxPhotos_not?: InputMaybe<Scalars['BigInt']>;
  readonly maxPhotos_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly primarySalePrice?: InputMaybe<Scalars['BigInt']>;
  readonly primarySalePrice_gt?: InputMaybe<Scalars['BigInt']>;
  readonly primarySalePrice_gte?: InputMaybe<Scalars['BigInt']>;
  readonly primarySalePrice_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly primarySalePrice_lt?: InputMaybe<Scalars['BigInt']>;
  readonly primarySalePrice_lte?: InputMaybe<Scalars['BigInt']>;
  readonly primarySalePrice_not?: InputMaybe<Scalars['BigInt']>;
  readonly primarySalePrice_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalBurned?: InputMaybe<Scalars['BigInt']>;
  readonly totalBurned_gt?: InputMaybe<Scalars['BigInt']>;
  readonly totalBurned_gte?: InputMaybe<Scalars['BigInt']>;
  readonly totalBurned_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalBurned_lt?: InputMaybe<Scalars['BigInt']>;
  readonly totalBurned_lte?: InputMaybe<Scalars['BigInt']>;
  readonly totalBurned_not?: InputMaybe<Scalars['BigInt']>;
  readonly totalBurned_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalSold?: InputMaybe<Scalars['BigInt']>;
  readonly totalSold_gt?: InputMaybe<Scalars['BigInt']>;
  readonly totalSold_gte?: InputMaybe<Scalars['BigInt']>;
  readonly totalSold_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalSold_lt?: InputMaybe<Scalars['BigInt']>;
  readonly totalSold_lte?: InputMaybe<Scalars['BigInt']>;
  readonly totalSold_not?: InputMaybe<Scalars['BigInt']>;
  readonly totalSold_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
};

export enum RootsStatus_OrderBy {
  Id = 'id',
  MaxPhotos = 'maxPhotos',
  PrimarySalePrice = 'primarySalePrice',
  TotalBurned = 'totalBurned',
  TotalSold = 'totalSold'
}

export type Subscription = {
  readonly __typename?: 'Subscription';
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
  readonly rootsPhoto?: Maybe<RootsPhoto>;
  readonly rootsPhotos: ReadonlyArray<RootsPhoto>;
  readonly rootsStatus?: Maybe<RootsStatus>;
  readonly rootsStatuses: ReadonlyArray<RootsStatus>;
  readonly transfer?: Maybe<Transfer>;
  readonly transfers: ReadonlyArray<Transfer>;
  readonly wallet?: Maybe<Wallet>;
  readonly wallets: ReadonlyArray<Wallet>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionRootsPhotoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRootsPhotosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RootsPhoto_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RootsPhoto_Filter>;
};


export type SubscriptionRootsStatusArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRootsStatusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RootsStatus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RootsStatus_Filter>;
};


export type SubscriptionTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type SubscriptionWalletArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWalletsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Wallet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Wallet_Filter>;
};

export type Transfer = {
  readonly __typename?: 'Transfer';
  readonly from: Wallet;
  readonly id: Scalars['ID'];
  readonly photo: RootsPhoto;
  readonly timestamp: Scalars['BigInt'];
  readonly to: Wallet;
  readonly txHash: Scalars['Bytes'];
};

export type Transfer_Filter = {
  readonly from?: InputMaybe<Scalars['String']>;
  readonly from_contains?: InputMaybe<Scalars['String']>;
  readonly from_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly from_ends_with?: InputMaybe<Scalars['String']>;
  readonly from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly from_gt?: InputMaybe<Scalars['String']>;
  readonly from_gte?: InputMaybe<Scalars['String']>;
  readonly from_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly from_lt?: InputMaybe<Scalars['String']>;
  readonly from_lte?: InputMaybe<Scalars['String']>;
  readonly from_not?: InputMaybe<Scalars['String']>;
  readonly from_not_contains?: InputMaybe<Scalars['String']>;
  readonly from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly from_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly from_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly from_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly from_starts_with?: InputMaybe<Scalars['String']>;
  readonly from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly photo?: InputMaybe<Scalars['String']>;
  readonly photo_contains?: InputMaybe<Scalars['String']>;
  readonly photo_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly photo_ends_with?: InputMaybe<Scalars['String']>;
  readonly photo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly photo_gt?: InputMaybe<Scalars['String']>;
  readonly photo_gte?: InputMaybe<Scalars['String']>;
  readonly photo_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly photo_lt?: InputMaybe<Scalars['String']>;
  readonly photo_lte?: InputMaybe<Scalars['String']>;
  readonly photo_not?: InputMaybe<Scalars['String']>;
  readonly photo_not_contains?: InputMaybe<Scalars['String']>;
  readonly photo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly photo_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly photo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly photo_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly photo_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly photo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly photo_starts_with?: InputMaybe<Scalars['String']>;
  readonly photo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_not?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly to?: InputMaybe<Scalars['String']>;
  readonly to_contains?: InputMaybe<Scalars['String']>;
  readonly to_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly to_ends_with?: InputMaybe<Scalars['String']>;
  readonly to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly to_gt?: InputMaybe<Scalars['String']>;
  readonly to_gte?: InputMaybe<Scalars['String']>;
  readonly to_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly to_lt?: InputMaybe<Scalars['String']>;
  readonly to_lte?: InputMaybe<Scalars['String']>;
  readonly to_not?: InputMaybe<Scalars['String']>;
  readonly to_not_contains?: InputMaybe<Scalars['String']>;
  readonly to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly to_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly to_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly to_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly to_starts_with?: InputMaybe<Scalars['String']>;
  readonly to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum Transfer_OrderBy {
  From = 'from',
  Id = 'id',
  Photo = 'photo',
  Timestamp = 'timestamp',
  To = 'to',
  TxHash = 'txHash'
}

export type Wallet = {
  readonly __typename?: 'Wallet';
  readonly address: Scalars['Bytes'];
  readonly id: Scalars['ID'];
  readonly photos: ReadonlyArray<RootsPhoto>;
};


export type WalletPhotosArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RootsPhoto_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootsPhoto_Filter>;
};

export type Wallet_Filter = {
  readonly address?: InputMaybe<Scalars['Bytes']>;
  readonly address_contains?: InputMaybe<Scalars['Bytes']>;
  readonly address_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly address_not?: InputMaybe<Scalars['Bytes']>;
  readonly address_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly address_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

export enum Wallet_OrderBy {
  Address = 'address',
  Id = 'id',
  Photos = 'photos'
}

export type _Block_ = {
  readonly __typename?: '_Block_';
  /** The hash of the block */
  readonly hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  readonly number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  readonly __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  readonly block: _Block_;
  /** The deployment ID */
  readonly deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  readonly hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type AllPhotosQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPhotosQuery = { readonly __typename?: 'Query', readonly rootsPhotos: ReadonlyArray<{ readonly __typename?: 'RootsPhoto', readonly tokenId: any, readonly owner: { readonly __typename?: 'Wallet', readonly address: any } }>, readonly rootsStatus?: { readonly __typename?: 'RootsStatus', readonly maxPhotos: any, readonly primarySalePrice: any, readonly totalBurned: any, readonly totalSold: any } | null };

export type PhotoByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PhotoByIdQuery = { readonly __typename?: 'Query', readonly rootsPhoto?: { readonly __typename?: 'RootsPhoto', readonly tokenId: any, readonly owner: { readonly __typename?: 'Wallet', readonly address: any } } | null, readonly rootsStatus?: { readonly __typename?: 'RootsStatus', readonly primarySalePrice: any } | null };


export const AllPhotosDocument = gql`
    query AllPhotos {
  rootsPhotos(orderBy: tokenId) {
    tokenId
    owner {
      address
    }
  }
  rootsStatus(id: "roots.status") {
    maxPhotos
    primarySalePrice
    totalBurned
    totalSold
  }
}
    `;

export function useAllPhotosQuery(options?: Omit<Urql.UseQueryArgs<AllPhotosQueryVariables>, 'query'>) {
  return Urql.useQuery<AllPhotosQuery>({ query: AllPhotosDocument, ...options });
};
export const PhotoByIdDocument = gql`
    query PhotoById($id: ID!) {
  rootsPhoto(id: $id) {
    tokenId
    owner {
      address
    }
  }
  rootsStatus(id: "roots.status") {
    primarySalePrice
  }
}
    `;

export function usePhotoByIdQuery(options: Omit<Urql.UseQueryArgs<PhotoByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<PhotoByIdQuery>({ query: PhotoByIdDocument, ...options });
};