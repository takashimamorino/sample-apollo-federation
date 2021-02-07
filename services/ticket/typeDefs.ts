import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    ticket(id: ID): Ticket
    tickets: [Ticket]
  }

  type Ticket {
    id: ID!
    title: String!
    assignees: Member
  }

  extend type Member @key(fields: "id") {
    id: ID! @external
  }
`;
