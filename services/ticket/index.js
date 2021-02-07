const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = gql`
  type Query {
    ticket: Ticket
  }

  type Ticket @key(fields: "id") {
    id: ID!
    title: String!
  }
`;

const resolvers = {
  Query: {
    ticket() {
      return tickets[0]
    }
  },
  Ticket: {
    __resolveReference(object){
      return tickets.find(ticket => ticket.id === object.id)
    }
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});

server.listen(4001).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});

const tickets = [
  {
    id: "1",
    title: 'ticket_01'
  },
  {
    id: "2",
    title: 'ticket_02'
  },
  {
    id: "3",
    title: 'ticket_03'
  },
]
