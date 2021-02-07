export const resolvers = {
  Query: {
    member() {
      return members[0]
    }
  },
  Member: {
    __resolveReference(object: {id: string, name: string}){
      return members.find(member => member.id === object.id)
    }
  }
};

const members = [
  {
    id: "1",
    name: 'member_01'
  },
  {
    id: "2",
    name: 'member_02'
  },
  {
    id: "3",
    name: 'member_03'
  },
]
