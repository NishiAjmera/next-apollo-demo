import { gql } from "apollo-server-express";
import casual from "casual";

let users = [];
casual.define('user', () => {
  return {
    id: casual.integer,
    name: casual.name,
    address: casual.address,
    email: casual.email,
    phoneNumber: casual.phone
  };
});

for (var i = 0; i < 2000; ++i) {
  users.push(casual.user);
}


export const typeDefs =  gql`
type Query {
  users(offset: Int, limit: Int): [User]
}

type User {
  id: Int
  name: String 
  address: String
  email: String
  phoneNumber: String
}
`
export const resolvers = {
  Query: {
    users: (parents, args) => {
    if(args.offset && (!args.limit || args.limit == 0)) {
      return users.slice(0,args.offset);
    } 
    if(args.offset && args.limit) {
      return users.slice(args.limit, args.limit+args.offset);
    }
    return users;
    },
  },
};

