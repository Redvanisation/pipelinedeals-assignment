import { data as deals } from './deals.json';

const DEALS_ENDPOINT = '/api/v1/deals';

module.exports = {
  get: jest.fn((url) => {
    switch(url) {
      case DEALS_ENDPOINT:
        return Promise.resolve({
          data: deals
        });
    }
  })
};
