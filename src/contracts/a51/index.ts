import { ChainId } from '@vnaysn/jediswap-sdk-core'
import A51_ABI from './abi.json'

//update abi

const A51_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.GOERLI]: '0x017f27c895a91af4a52c707e6da1533ffaaf6f29130f56db57fc291b64b55a24',
}

export { A51_ABI, A51_ADDRESS }
