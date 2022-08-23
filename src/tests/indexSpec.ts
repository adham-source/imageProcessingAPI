import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the root endpoint', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toBe(200);
  });
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.statusCode).toBe(200);
  });
});
