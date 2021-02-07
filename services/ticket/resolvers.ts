export const resolvers = {
  Query: {
    ticket() {
      return tickets[0]
    }
  },
  Ticket: {
    __resolveReference(object: {id: string, title: string}){
      return tickets.find(ticket => ticket.id === object.id)
    }
  }
};

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
