import { Major, Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Aaron in Madrid',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: Major.S_SI,
    archived: false
  },
  {
    title: 'Aaron in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: Major.L,
    archived: false
  },

  {
    title: 'Aaron in New York',
    description: 'Description du voyage',
    date: dateToday,
    student: 'MJ',
    major: Major.ES,
    archived: false
  },

];
