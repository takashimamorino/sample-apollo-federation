export const resolvers = {
  Query: {
    member(id: string) {
      return members.find(member => member.id === id)
    },
    members() {
      return members
    }
  },
  Member: {
    __resolveReference(object: {id: string, title: string}) {
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
