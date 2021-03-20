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
          name="contractAddress"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Contract address
        </Label>
        <TextField
          name="contractAddress"
          defaultValue={props.quest?.contractAddress}
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
          defaultValue={props.quest?.methodName}
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
          defaultValue={props.quest?.purchaseBalance}
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
          defaultValue={props.quest?.domain}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="domain" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.quest?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="tokenId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Token id
        </Label>
        <TextField
          name="tokenId"
          defaultValue={props.quest?.tokenId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="tokenId" className="rw-field-error" />

        <Label
          name="merchantId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Merchant id
        </Label>
        <TextField
          name="merchantId"
          defaultValue={props.quest?.merchantId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="merchantId" className="rw-field-error" />

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
          readonly
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
