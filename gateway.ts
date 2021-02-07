import { ApolloServer } from 'apollo-server'
import { ApolloGateway } from '@apollo/gateway'

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'tickets', url: 'http://localhost:4001' },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
