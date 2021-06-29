import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema.js';
  
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  // server.start();

  server.applyMiddleware({app});

  app.use((req,res) => {
    res.status(200);
    res.send('Hello!');
    res.end();
  })

  // to access graphql API from the client side
  // app.use(cors())
  // bodyParser is needed just for POST.
  // app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
  // // for the graphiql interface
  // app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
  
  const port = process.env.PORT || 5000
  app.listen(port, (err) => {
    if (err) throw err
    console.log(`Graphql Server started on: http://localhost:${port}`)
  })

