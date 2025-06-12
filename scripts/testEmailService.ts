import emailjs from 'emailjs-com'

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

emailjs
  .send(
    serviceId,
    templateId,
    {
      from_name: 'Test User',
      reply_to: 'test@example.com',
      message: 'This is a test message',
    },
    publicKey,
  )
  .then(
    (result) => {
      console.log('Success:', result.text)
    },
    (error) => {
      console.error('Error:', error.text || error)
    },
  )

