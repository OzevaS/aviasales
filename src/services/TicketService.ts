import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { ITicket } from '../types/ticket';

export const ticketsAPI = createApi({
  reducerPath: 'ticketsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aviasales-test-api.kata.academy' }),
  endpoints: (build) => ({
    fetchTickets: build.query<ITicket[], unknown>({
      query: () => ({
        url: '/tickets',
      }),
    }),
  }),
});

// async _getTickets(origin: string, destination: string, date: string): Promise<ITicket[]> {
//   return [
//     {
//       id: 1,
//       price: 100,
//       company: 'Авиакомпания',
//       date: '10:45 – 08:00',
//       time: '21ч 15м',
//       transplan: ['HKG', 'JNB'],
//     },
//     {
//       id: 2,
//       price: 100,
//       company: 'Авиакомпания',
//       date: '10:45 – 08:00',
//       time: '21ч 15м',
//       transplan: ['HKG', 'JNB'],
//     },
//     {
//       id: 3,
//       price: 100,
//       company: 'Авиакомпания',
//       date: '10:45 – 08:00',
//       time: '21ч 15м',
//       transplan: ['HKG', 'JNB'],
//     },
//     {
//       id: 4,
//       price: 100,
//       company: 'Авиакомпания',
//       date: '10:45 – 08:00',
//       time: '21ч 15м',
//       transplan: ['HKG', 'JNB'],
//     },
//     {
//       id: 5,
//       price: 100,
//       company: 'Авиакомпания',
//       date: '10:45 – 08:00',
//       time: '21ч 15м',
//       transplan: ['HKG', 'JNB'],
//     },
//   ];
// }
