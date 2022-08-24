# Image Processing API

- Image Processing's API for resizeing images and return endpoint to access the image using it.

## Setup Steps

To get started:

1 - Clone the repo on the machine.

2 - Install all dependencies and devDependencies by running `npm install` command.

### The scripts needed to test/start/build your application

- `npm run prettier` To formate code.

- `npm run lint` For testing and formatter again.

- `npm run build` To convert .TS files from src/ to .JS files in server/.

- `npm run test` or `npm run jasmine` To test success.

##### Runing the program locally in development mode

`npm run dev`

- and then head to your browser at [a http://localhost:5000](http://localhost:5000) and it should be working.

##### Runing the program locally in production mode

`npm run start`

- and then head to your browser at [a http://localhost:5000](http://localhost:5000) and it should be working.

### you can use this api using all of this images

• encenadaport
• fjord
• icelandwaterfall
• palmtunnel
• santamonica


### The endpoints that should be accessed to test that you have created the required functionality

[a http://localhost:5000](http://localhost:5000)

[a http://localhost:5000/api](http://localhost:5000/api)

[a http://localhost:5000/api/images](http://localhost:5000/api/images)

[a http://localhost:5000/api/images?name=encenadaport&width=300&height=400](http://localhost:5000/api/images?name=encenadaport&width=300&height=400)


- You can find the images that you intered in 'assets/images/thumbnail' and you can delete any images after using it in the endpoint.