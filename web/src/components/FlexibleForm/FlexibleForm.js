import {
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'

const BooleanSelect = ({ initialVal, updateValue }) => {
  return (
    <select
      defaultValue=""
      className="my-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
      onChange={(e) => updateValue(e.target.value)}
    >
      <option disabled value="">
        {' '}
        -- select an option --{' '}
      </option>
      <option value={false} selected={initialVal === 'false'}>
        false
      </option>
      <option value={true} selected={initialVal === 'true'}>
        true
      </option>
    </select>
  )
}

const Dropdown = ({ dropdownOptions = [], updateValue, disabled, val }) => {
  return (
    <select
      value={val ? val : ''}
      className="my-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
      onChange={(e) => updateValue(e.target.value)}
      disabled={disabled}
    >
      {dropdownOptions.length !== 1 && (
        <option disabled value="">
          {' '}
          -- select an option --{' '}
        </option>
      )}
      {dropdownOptions.map((option, index) => (
        <option key={`${index}-${option.name}`} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

const Field = ({
  description,
  placeholder,
  type,
  dropdownOptions,
  disabled,
}) => {
  let field
  switch (type) {
    case 'textfield':
      field = (
        <TextField
          name={description}
          className="block w-full p-1 border rounded text-xs "
          validation={{ required: true }}
          placeholder={placeholder}
        />
      )
      break
    // case 'boolean':
    //   field = <BooleanSelect updateValue={updateValue} initialVal={val} />
    //   break
    // case 'dropdown':
    //   field = (
    //     <Dropdown
    //       updateValue={updateValue}
    //       dropdownOptions={dropdownOptions}
    //       disabled={disabled}
    //       val={val}
    //     />
    //   )
    //   break
    default:
      field = (
        <TextAreaField
          placeholder={placeholder}
          name={description}
          className="block w-full p-1 border rounded h-24 text-xs"
          validation={{ required: true }}
        />
      )
  }

  return (
    <div className="mb-4">
      <Label
        name={description}
        className="block text-sm text-gray-600 uppercase"
      >
        {description}
      </Label>
      {field}
      <FieldError name={description} className="error-message" />
    </div>
  )
}

const FlexibleForm = ({ onSubmit, inputs }) => {
  return (
    <Form className="h-full w-full items-start" onSubmit={onSubmit}>
      {inputs.map((input, i) => (
        <Field {...input} key={i} />
      ))}
      <div className="flex justify-center">
        <Submit className="mt-4 block bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50">
          Submit
        </Submit>
      </div>
    </Form>
  )
}

export default FlexibleForm
