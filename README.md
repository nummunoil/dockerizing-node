# dockerizing-node

```sh
touch package.json
touch server.js
touch Dockerfile
touch .dockerignore
docker build -t nummunoil/node-web-app .
docker run -p 49160:8080 -d nummunoil/node-web-app
```

ref: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
