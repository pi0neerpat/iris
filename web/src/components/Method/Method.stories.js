import Method from './Method'
import { Flash } from '@redwoodjs/web'

const method = {
  inputs: [
    { internalType: 'address', name: 'recipient', type: 'address' },
    { internalType: 'uint256', name: 'amount', type: 'uint256' },
  ],
  name: 'transfer',
  outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
  stateMutability: 'nonpayable',
  type: 'function',
}
const method2 = {
  inputs: [],
  name: 'totalSupply',
  outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
  stateMutability: 'view',
  type: 'function',
}

const contractAddress = '0xf2d68898557ccb2cf4c10c3ef2b034b2a69dad00'

export const generated = () => {
  return (
    <div className="m-4 flex">
      <Flash timeout={3000} />
      <Method
        method={method}
        network={'goerli'}
        contractAddress={contractAddress}
      />
      <Method
        method={method2}
        network={'goerli'}
        contractAddress={contractAddress}
      />
    </div>
  )
}

export default { title: 'Components/Method' }
