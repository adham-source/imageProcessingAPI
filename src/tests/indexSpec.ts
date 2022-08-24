import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  const imageNamesAllow = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica'];

  it('gets the root endpoint', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toBe(200);
  });
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.statusCode).toBe(200);
  });
  it('test without params', async () => {
    const response = await request.get('/api/images');
    expect(response.text).toEqual('Error! Please process image into url query by adding name, width and height.');
  });

  it('The image name is incorrect', async () => {
    const response = await request.get('/api/images').query({
      name: 'hghj',
      width: 800,
      height: 900,
    });
    expect(response.statusCode).toBe(400);
  });

  it('Image size of a width not available or equal NAN', async () => {
    const response = await request.get('/api/images').query({
      name: imageNamesAllow[1],
      width: 'jljl',
      // w: 100,
      height: 900,
    });
    expect(response.text).toEqual('Error! Please write width image and must be number.');
  });
});
