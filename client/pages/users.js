import Link from 'next/link';
import { ApolloProvider } from "@apollo/client";
import Name from '../components/Name';
import React from 'react';
import client from '../apollo.config'

const Users = () => (
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
