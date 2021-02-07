import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    member: Member
  }

  type Member @key(fields: "id") {
    id: ID!
    name: String!
  }
`;
