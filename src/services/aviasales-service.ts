import { ResponseTickets } from '../types/ticket';

export default class AviasalesService {
  private readonly _apiBase = 'https://aviasales-test-api.kata.academy';

  private _searchId: string;

  private _createdSearchId: boolean;

  init = async () => {
    try {
      const body = await this.getResource(this.getURLRequest('/search'));
      const { searchId } = body;

      this._searchId = searchId;
      this._createdSearchId = true;
    } catch (error) {
      console.error('Couldnt create searchId', error);
    }
  };

  getURLRequest(pathname: string) {
    const urlRequest = new URL(`${pathname}`, this._apiBase);
    return urlRequest;
  }

  async getResource(url: string | URL) {
    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  constructor() {
    this._searchId = '';
    this._createdSearchId = false;
  }

  async fetchTickets(): Promise<ResponseTickets> {
    if (!this._createdSearchId) {
      throw new Error('SearchId is not created');
    }
    const urlRequest = this.getURLRequest(`/tickets`);
    urlRequest.searchParams.append('searchId', this._searchId);

    const data = await this.getResource(urlRequest);
    return data;
  }

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
}
