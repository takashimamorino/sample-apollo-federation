export const resolvers = {
  Query: {
    ticket: (_: any, { id }: any) => tickets.find((ticket) => ticket.id === id),
    tickets: () => tickets
  },
  Ticket: {
    member(ticket: { id: string, title: string}) {
      return { __typename: "Member", id: ticket.id };
    }
  }
};

const tickets = [
  {
    id: "1",
    title: 'ticket_01',
    assignees: {id: '1'}
  },
  {
    id: "2",
    title: 'ticket_02',
    assignees: {id: '2'}
  },
  {
    id: "3",
    title: 'ticket_03',
    assignees: {id: '3'}
  },
]
