```
yarn add @apollo/client graphql
yarn add subscriptions-transport-ws
```

Setup service
```
curl https://codeload.github.com/howtographql/react-apollo/tar.gz/starter | tar -xz --strip=1 react-apollo-starter/server
cd server
yarn
npx prisma generate
yarn dev
```