import { gql } from 'apollo-server'
export const typeDefs = gql`
  type Query {
    ticket: Ticket
  }

  type Ticket @key(fields: "id") {
    id: ID!
    title: String!
  }
`;
