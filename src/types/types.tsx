/* eslint-disable import/prefer-default-export */
interface ITicket {
  id: number;
  price: number;
  date: string;
  time: string;
  transplan: string[];
  company: string;
}

type TypeFilter = 'STOP';

export enum EFilterStop {
  'all',
  'stop-0',
  'stop-1',
  'stop-2',
  'stop-3',
  'count',
}

export enum ESort {
  'cheapest',
  'fastest',
  'optimal',
  'count',
}

export type { ITicket, TypeFilter };
