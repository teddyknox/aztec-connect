import { EthAddress, GrumpkinAddress } from 'barretenberg/address';
import { Signature } from 'barretenberg/client_proofs/signature';

export * from './schnorr_signer';
export * from './recover_signer';
export * from './web3_signer';

export type EthereumSignature = { v: Buffer; r: Buffer; s: Buffer };

export interface Signer {
  getPublicKey(): GrumpkinAddress;
  signMessage(message: Buffer): Promise<Signature>;
}

export interface EthereumSigner {
  getAddress(): EthAddress;
  signMessage(message: Buffer): Promise<Buffer>;
  signTypedData({ domain, types, message }: any): Promise<EthereumSignature>;
}
