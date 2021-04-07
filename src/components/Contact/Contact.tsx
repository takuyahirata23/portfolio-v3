import { Box, Typography } from '@material-ui/core'
import { Field, Form } from '../../elements'
import { useFields } from '../../hooks'
import useStyles from './useStyles'

// type IV = {
//   name: string
//   subject: string
//   email: string
//   message: string
// }

const initialValues = {
  name: '',
  subject: '',
  email: '',
  message: '',
}

export default function Contact() {
  const { fields, handleChange } = useFields(initialValues)
  const cls = useStyles()
  const onSubmit = () => undefined

  return (
    <Box className={cls.formWrapper} align="center">
      <Typography variant="h3" gutterBottom>
        Questions? Get in touch!
      </Typography>
      <Form onSubmit={onSubmit}>
        <Field
          id="name"
          name="name"
          value={fields.name}
          onChange={handleChange}
          GridItemProps={{
            md: 6,
          }}
          required
        />
        <Field
          id="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          GridItemProps={{
            md: 6,
          }}
        />
        <Field
          id="subject"
          name="subject"
          value={fields.subject}
          onChange={handleChange}
        />
        <Field
          id="message"
          name="message"
          value={fields.message}
          onChange={handleChange}
          rows={5}
          multiline
        />
      </Form>
    </Box>
  )
}
