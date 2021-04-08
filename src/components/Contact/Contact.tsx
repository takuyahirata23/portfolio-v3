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
  const { fields, handleChange } = useFields(initialValues)
  const cls = useStyles()

  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <Box className={cls.formWrapper}>
      <Typography variant="h3" gutterBottom>
        Questions? Get in touch!
      </Typography>
      <Form onSubmit={onSubmit}>
        <Field
          name="name"
          value={fields.name}
          onChange={handleChange}
          GridItemProps={{
            md: 6,
          }}
          required
        />
        <Field
          name="email"
          value={fields.email}
          onChange={handleChange}
          GridItemProps={{
            md: 6,
          }}
          required
        />
        <Field
          name="subject"
          value={fields.subject}
          onChange={handleChange}
          required
        />
        <Field
          name="message"
          value={fields.message}
          onChange={handleChange}
          rows={5}
          multiline
          required
        />
      </Form>
    </Box>
  )
}
