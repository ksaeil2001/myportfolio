import emailjs from 'emailjs-com'

const serviceId = process.env.EMAILJS_SERVICE_ID as string
const templateId = process.env.EMAILJS_TEMPLATE_ID as string
const userId = process.env.EMAILJS_USER_ID as string

emailjs
  .send(
    serviceId,
    templateId,
    {
      from_name: 'Test User',
      reply_to: 'test@example.com',
      message: 'This is a test message',
    },
    userId,
  )
  .then(
    (result) => {
      console.log('Success:', result.text)
    },
    (error) => {
      console.error('Error:', error.text || error)
    },
  )

