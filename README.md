<div align="center">

**`Blog with Node.js, Express, MongoDB, Mocha and Docker`**

***`Skills`***
<div align="center">
<img alt="NodeJS" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
<img alt="Express" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"/>
<img alt="MongoDB" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
<img alt="Mocha" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"/>
<img alt="Docker" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />
<br/>


### Create .env.development, add port and the MongoDB connection string
```sh
PORT=
MONGO_URL=
```

## Node
### Install the dependencies
```sh
npm i
```

### Execute the application
```sh
npm start
```

### Execute the application (Development mode)
```sh
npm run dev
```

### Execute the tests
```sh
npm test
```

## Docker
### Build image
```sh
docker build -t node.js-express-mongodb-blog:1.0.0 .
```
### Create and run container
```sh
docker run -d -p 3000:3000 --env-file .env.development --name node.js-express-mongodb-blog node.js-express-mongodb-blog:1.0.0
```
