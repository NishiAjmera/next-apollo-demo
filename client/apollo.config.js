import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";

const httpLink = new HttpLink({
    uri: "http://localhost:5001/graphql"
  });
  
  
  
const client = new ApolloClient({
    // The `from` function combines an array of individual links
    // into a link chain
    link: from([httpLink]),
    cache: new InMemoryCache(  {
      typePolicies: {
      Query: {
        fields: {
          users: {
            // The keyArgs list and merge function are the same as above.
            keyArgs: [],
            merge(existing = [], incoming) {
              return [...incoming];
            },
          }
        }
      }
    }
  })
  });

  export default client;