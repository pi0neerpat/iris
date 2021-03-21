import { Contract } from '@ethersproject/contracts'
import { useFlash } from '@redwoodjs/web'
import FlexibleForm from 'src/components/FlexibleForm'
import BigNumberHelper from 'src/components/BigNumberHelper'

import {
  getMethodDisplayName,
  getArgumentsFromMethod,
  formatContractArgs,
} from 'src/utils/contractHelpers'
import { truncate } from 'src/utils/helpers'
import { unlockBrowser } from 'src/utils/web3'

const Method = ({ method, contractAddress }) => {
  const { addMessage } = useFlash()
  const [response, setResponse] = React.useState()

  const isViewMethod = method.stateMutability === 'view'

  const parseResponse = (res) => {
    if (typeof res === 'object') {
      if (res._isBigNumber) return <BigNumberHelper bn={res} />
      return JSON.stringify(res)
    }
    return res
  }

  const onSubmit = async ({ input }) => {
    try {
      const inputList = Object.keys(input).map((key) => input[key])
      const args = formatContractArgs(inputList)
      const { walletProvider } = await unlockBrowser({ debug: false })
      const contract = new Contract(
        contractAddress,
        [method],
        walletProvider.getSigner()
      )
      if (isViewMethod) {
        const response = await contract[method.name](...args)
        console.log(`Calling method ${method.name}(${args}). Response:`)
        console.log(response)
        return setResponse(parseResponse(response))
      }
      const tx = await contract[method.name](...args)
      return { tx }
    } catch (e) {
      console.log(e)
      // TODO: remove this toast message in favor of errors
      addMessage(
        `${truncate(e.message, 100)} ${truncate(e.error?.message, 100)}`,
        {
          classes: 'error-style',
        }
      )
      return { error: e }
    }
  }

  return (
    <div className="w-96 bg-white shadow overflow-hidden sm:rounded-lg ">
      <div className="bg-gray-50 px-4 py-5 text-center font-semibold  text-xl">
        {getMethodDisplayName(method)}
      </div>
      <div className="h-96 overflow-y-auto p-2">
        <FlexibleForm
          id={`${method.name}`}
          inputs={getArgumentsFromMethod(method)}
          {...props}
        />
      </div>

      {isViewMethod && (
        <div className="bg-gray-50 px-4 py-5 text-center font-semibold  text-m">
          Result {response}
        </div>
      )}
    </div>
  )
}

export default Method
