import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const TransactionForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.transaction?.id)
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
          name="timestamp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Timestamp
        </Label>
        <TextField
          name="timestamp"
          defaultValue={props.transaction?.timestamp}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="timestamp" className="rw-field-error" />

        <Label
          name="blockNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Block number
        </Label>
        <TextField
          name="blockNumber"
          defaultValue={props.transaction?.blockNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="blockNumber" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>
        <TextField
          name="status"
          defaultValue={props.transaction?.status}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="status" className="rw-field-error" />

        <Label
          name="questId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quest id
        </Label>
        <TextField
          name="questId"
          defaultValue={props.transaction?.questId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="questId" className="rw-field-error" />

        <Label
          name="heroId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hero id
        </Label>
        <TextField
          name="heroId"
          defaultValue={props.transaction?.heroId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="heroId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TransactionForm
