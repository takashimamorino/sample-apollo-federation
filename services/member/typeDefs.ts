import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    member(id: ID): Member
    members: [Member]
  }

  type Member @key(fields: "id") {
    id: ID!
    name: String!
  }
`;
