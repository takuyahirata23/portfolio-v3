import { O } from '../utils/types'

export default function emailNotification({
  name,
  email,
  subject,
  message,
  createdAt,
}: O) {
  return `
  <div>
    <h1>${name} has sent you an email at ${createdAt}</h1> 
    <h2>Preview</h2>
    <div>
      <p><string>Name</string>: ${name}</p>
      <p><string>Subject</string>: ${subject}</p>
      <p><string>Email</string>: ${email}</p>
      <p><string>Message</string>: ${message}</p>
    </div>
  </div>
  `
}
