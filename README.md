# MicroServiços com Nodejs

 - Utilizando: 
  - Node 
  - Kafka

## Fluxo do APP

 - API principal ( Station )
 - Geração de certificados;

 ## Fluxo 

 - API principal envia uma mensagem pro serviço de certificado para gerar o certificado
 - Micro-Serviço de certificado devolve uma reposta ( síncrona/assíncrona )

 - Receber uma resposta assíncrona de quando o email com o certificado foi enviado;

 ## O que sabemos ?

  - REST ( latência )
  - Redis / RabbitMQ / **KAFKA**

  - Nubank, Uber, Paypal, Netflix;