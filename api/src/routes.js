import express from 'express'


const routes = express.Router()

routes.post('/certifications', async (req, res) => {
  //Chamar micro serviço

  await producer.send({
    topic: 'issue-certificate',
    messages: [
      {
        value: 'Hello KafkaJS user'
      }
    ]
  })

  return res.json({ ok: true })
});

export default routes;