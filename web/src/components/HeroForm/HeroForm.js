import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const HeroForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.hero?.id)
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
          name="address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address
        </Label>
        <TextField
          name="address"
          defaultValue={props.hero?.address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="address" className="rw-field-error" />

        <Label
          name="questId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quest id
        </Label>
        <TextField
          name="questId"
          defaultValue={props.hero?.questId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="questId" className="rw-field-error" />

        <Label
          name="authDetailId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Auth detail id
        </Label>
        <TextField
          name="authDetailId"
          defaultValue={props.hero?.authDetailId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="authDetailId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default HeroForm
