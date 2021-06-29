import {gql} from '@apollo/client';

export const USER_QUERY = gql`
  query Users($offset: Int, $limit: Int) {
    users(offset: $offset, limit: $limit) {
    name
    address
  }}`
