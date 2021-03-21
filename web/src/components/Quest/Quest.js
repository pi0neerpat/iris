import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Contract } from '@ethersproject/contracts'
import toast from 'react-hot-toast'

import FlexibleForm from 'src/components/FlexibleForm'

import { QUERY } from 'src/components/QuestsCell'

import {
  getMethodDisplayName,
  getArgumentsFromMethod,
  formatContractArgs,
} from 'src/utils/contractHelpers'
import { truncate } from 'src/utils/general'
import { unlockBrowser } from 'src/utils/connect'

const DELETE_QUEST_MUTATION = gql`
  mutation DeleteQuestMutation($id: String!) {
    deleteQuest(id: $id) {
      id
    }
  }
`

const Quest = ({ quest }) => {
  const [loading, setLoading] = React.useState(false)
  const { addMessage } = useFlash()
  const { currentUser } = useAuth()
  const [deleteQuest] = useMutation(DELETE_QUEST_MUTATION, {
    onCompleted: () => {
      navigate(routes.quests())
      addMessage('Quest deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete quest ' + id + '?')) {
      deleteQuest({ variables: { id } })
    }
  }

  const merchantControls = (
    <>
      {currentUser?.address === quest.merchant.owner.address && (
        <>
          <nav className="rw-button-group">
            <Link
              to={routes.editQuest({ triggerId: quest.trigger.id })}
              className="rw-button rw-button-blue"
            >
              Edit
            </Link>
            <a
              href="#"
              className="rw-button rw-button-red"
              onClick={() => onDeleteClick(quest.id)}
            >
              Delete
            </a>
          </nav>
        </>
      )}
    </>
  )

  const onSubmit = async ({ input }) => {
    try {
      setLoading(true)
      toast('Connecting to your wallet...')
      const { walletProvider, network } = await unlockBrowser({ debug: false })
      if (network?.chainId !== Number(quest.chainId))
        throw Error('Please switch to Chain ID ' + quest.chainId)

      console.log(input)
      const inputList = Object.keys(input).map((key) => input[key])
      const args = formatContractArgs(inputList)
      const contract = new Contract(
        contractAddress,
        [quest.method],
        walletProvider.getSigner()
      )
      const tx = await contract[method.name](...args)
      toast.promise(tx.wait(), {
        loading: 'Processing...',
        success: () => {
          setLoading(false)
          return <b>Quest Complete!</b>
        },
        error: (err) => {
          setLoading(false)
          console.log(err)
          return <b>Something went wrong. {truncate(err?.message, 100)}</b>
        },
      })
    } catch (e) {
      setLoading(false)
      console.log(e)
      toast.error(
        `${truncate(e.message, 100)} ${truncate(e.error?.message, 100)}`
      )
    }
  }

  return (
    <div className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="inline-flex flex-col space-y-4 items-center justify-start w-96 pt-7 bg-gradient-to-b from-blue-300 to-purple-400">
          <div className="inline-flex space-x-4 items-center justify-end w-72 h-1/6">
            <div className="flex space-x-4 items-center w-28 h-2"></div>
          </div>
          <div className="mt-4">
            <p className="w-60 h-12  inset-x-0 top-0 mx-auto text-4xl  leading-9 text-center">
              {quest.name}
            </p>
            <div className="inline-flex flex-col items-center justify-end w-80 h-24  left-0 bottom-0">
              <p className="w-full h-1/3 text-2xl font-light leading-loose text-pink-100">
                Operation: {JSON.parse(quest.method).name}
              </p>
              <p className="w-full h-1/3 text-2xl font-light leading-loose text-pink-100">
                Chain Id: {quest.chainId}
              </p>
              <p className="w-full h-1/3 text-2xl font-light leading-loose text-pink-100">
                Contract address: {truncate(quest.contractAddress, 6)}
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-6 items-center justify-end w-full pl-8 pr-9 pt-6 pb-8 bg-black bg-opacity-20 rounded-tl-2xl rounded-tr-2xl">
            <FlexibleForm
              onSubmit={onSubmit}
              inputs={getArgumentsFromMethod(JSON.parse(quest.method))}
              disabled={loading}
            />
          </div>
        </div>
        {merchantControls}
      </div>
    </div>
  )
}

export default Quest
