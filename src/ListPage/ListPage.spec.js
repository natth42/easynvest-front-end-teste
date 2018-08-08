import ListPage from './ListPage';
jest.mock('./ListPage');

beforeEach(() => {
    ListPage.mockClear();
    localStorage.clear();
});

