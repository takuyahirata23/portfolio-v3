import { Box, Typography } from '@material-ui/core'
import { Field, Form } from '../../elements'
import { useFields } from '../../hooks'
import useStyles from './useStyles'

const initialValues = {
  name: '',
  subject: '',
  email: '',
  message: '',
}

export default function Contact() {
  const { fields, handleChange, validate } = useFields(initialValues)
  const cls = useStyles()

  const onSubmit = (e: any) => {
    e.preventDefault()
    validate()
  }

  return (
    <Box className={cls.formWrapper}>
      <Typography variant="h3" gutterBottom>
        Questions? Get in touch!
      </Typography>
      <Form onSubmit={onSubmit}>
        <Field
          name="name"
          onChange={handleChange}
          fromFields={fields.name}
          GridItemProps={{
            md: 6,
          }}
          required
        />
        <Field
          name="email"
          fromFields={fields.email}
          onChange={handleChange}
          GridItemProps={{
            md: 6,
          }}
          required
        />
        <Field
          name="subject"
          fromFields={fields.subject}
          onChange={handleChange}
          required
        />
        <Field
          name="message"
          fromFields={fields.message}
          onChange={handleChange}
          rows={5}
          multiline
          required
        />
      </Form>
    </Box>
  )
}
