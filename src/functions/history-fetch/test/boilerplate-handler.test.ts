// eslint-disable-next-line no-unused-vars,import/no-unresolved
import { BoilerplateHandlerMocks } from './boilerplate-handler.mocks';

describe('Boilerplate handler', () => {
  beforeAll(() => {
    console.log('test');
  });

  afterAll(() => {
  });

  beforeEach(() => {
  });

  it('Should run the test', async () => {
    console.log('Test has been run successfully');
    expect(true).toBe(true);
  });
});
