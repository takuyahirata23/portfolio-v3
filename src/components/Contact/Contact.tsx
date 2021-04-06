import { Field, Form } from '../../elements'
export default function Contact() {
  const onChange = () => undefined
  const onSubmit = () => undefined
  return (
    <Form onSubmit={onSubmit}>
      <Field id="subject" name="subject" value="" onChange={onChange} />
      <Field id="email" name="email" value="" onChange={onChange} />
      <Field id="message" name="message" value="" onChange={onChange} />
    </Form>
  )
}
