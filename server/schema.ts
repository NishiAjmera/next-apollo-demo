import { gql } from "apollo-server-express";
import casual from "casual";

interface User {
  name: String,
  address: String, 
  email: String,
  phoneNumber: String
}

interface Args {
  offset: number,
  limit: number
}

let users = new Array<User>();
// casual.define('user', () => {
//   return {
//     name: casual.name,
//     address: casual.address,
//     email: casual.email,
//     phoneNumber: casual.phone
//   };
//   // return user;
// });

for (var i = 0; i < 2000; ++i) {
  users.push({
    name: casual.name,
    address: casual.address,
    email: casual.email,
    phoneNumber: casual.phone
  });
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
    users: (parents: any, args: Args) => {
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

