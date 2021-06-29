import Link from 'next/link';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import {Name} from '../components/Name';
import React from 'react';

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

const Users: React.FC = () => (
  <ApolloProvider client={client}>
    Welcome Users
    <Name />
    <br/><br/>
    <Link href="/"><a>Home</a></Link>
    <br/><br/>
    <Link href="/about"><a>About</a></Link>
    </ApolloProvider>
)

export default Users;