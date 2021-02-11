# dockerizing-node

## express

```sh
touch package.json
touch server.js
touch Dockerfile
touch .dockerignore
docker build -t nummunoil/node-web-app .
docker run -p 49160:8080 -d nummunoil/node-web-app
```

ref: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

## http

```sh
touch app.js
touch Dockerfile.http
docker build -t nummunoil/node-http  -f Dockerfile.http .
docker run -d -p 1234:3000 nummunoil/node-http
```
