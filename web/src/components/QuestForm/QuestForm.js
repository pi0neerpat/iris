import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const QuestForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.quest?.id)
  }

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
          name="methodName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Method name
        </Label>
        <TextField
          name="methodName"
          defaultValue={props.quest?.methodName || 'mint'}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="methodName" className="rw-field-error" />

        <Label
          name="purchaseBalance"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Purchase balance
        </Label>
        <TextField
          name="purchaseBalance"
          defaultValue={props.quest?.purchaseBalance | '0'}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="purchaseBalance" className="rw-field-error" />

        <Label
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
