import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  TextAreaField,
} from '@redwoodjs/forms'

import erc721Abi from 'src/utils/erc721Abi'
import { filterEvents, getMethodDisplayName } from 'src/utils/contractHelpers'

const QuestForm = (props) => {
  const [abi, setAbi] = React.useState(JSON.stringify(erc721Abi))
  const [method, setMethod] = React.useState(props.quest?.method)

  const onSubmit = (data) => {
    props.onSave(data, props?.quest?.id)
  }

  const onChangeAbi = (event) => {
    setAbi(event.target.value)
  }

  const methodOptions = filterEvents(JSON.parse(abi)).map((method, index) => ({
    value: method,
    name: getMethodDisplayName(method),
  }))

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quest Name
        </Label>
        <TextField
          name="name"
          placeholder="e.g. NFT Purchase"
          defaultValue={props.quest?.name || 'NFT Purchase'}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />
        <Label
          name="chainId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Chain ID
        </Label>
        <TextField
          name="chainId"
          placeholder="e.g. 100"
          defaultValue={props.quest?.token?.chainId || '100'}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="chainId" className="rw-field-error" />

        <Label
          name="contractAddress"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Contract address
        </Label>
        <TextField
          name="contractAddress"
          defaultValue={
            props.quest?.contractAddress ||
            '0xA8f3447922d786045CB582B0C825723B744a54df'
          }
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="contractAddress" className="rw-field-error" />

        <Label
          name="abi"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          ABI (default ERC721)
        </Label>
        <TextAreaField
          name="abi"
          onChange={onChangeAbi}
          defaultValue={props.quest?.abi || JSON.stringify(erc721Abi)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="abi" className="rw-field-error" />

        <Label
          name="method"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Method
        </Label>
        <select
          validation={{ required: true }}
          errorclassname="rw-input rw-input-error"
          name="method"
          onChange={(e) => setMethod(e.target.value)}
          value={method ? method : ''}
          className="rw-input my-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
        >
          {methodOptions.length !== 1 && (
            <option disabled value="">
              -- select an option --
            </option>
          )}
          {methodOptions.map((option, index) => (
            <option key={`${index}-${option.name}`} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <FieldError name="method" className="rw-field-error" />

        {/*  <Label
          name="domain"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Domain
        </Label>
        <TextField
          name="domain"
          defaultValue={props.quest?.domain || 'localhost:8910'}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="domain" className="rw-field-error" />

        <Label
          name="tokenAddress"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Token address for payment
        </Label>
        <TextField
          name="tokenAddress"
          defaultValue={
            props.quest?.tokenAddress ||
            '0xa8f3447922d786045cb582b0c825723b744a54df'
          }
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="tokenAddress" className="rw-field-error" />

        <Label
          name="triggerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Trigger id
        </Label>
        <TextField
          name="triggerId"
          defaultValue={props.quest?.triggerId}
          readOnly
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="triggerId" className="rw-field-error" />
*/}
        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default QuestForm
