import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Aaron in Madrid',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: 'S-SI'
  },
  {
    title: 'Aaron in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: 'L'
  },

  {
    title: 'Aaron in New York',
    description: 'Description du voyage',
    date: dateToday,
    student: 'MJ',
    major: 'ES'
  },

];
