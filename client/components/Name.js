import {gql, useQuery, InMemoryCache} from '@apollo/client'
import Card from './Card';
import styles from './Name.module.css';
import {useState} from 'react';
import React from 'react';

const Name = () => {
  const [first, setFirst] = useState(20);
  
  const {loading, error, data, fetchMore}  = useQuery(USER_QUERY, {
    variables: {
      offset:20,
      limit:20
    }
  });

  const loadMoreHandler = () => {
    setFirst(prevVal => prevVal+20)

    fetchMore({
      variables: {
        offset:first+20,
        limit:20
      }
    })
  }

  if(loading) {
    return <span> ...loading </span>
  }
  
  if(error) {
    return <p>error</p>
  }

  return (
    <div>
    <div className={styles.Cards}>
    {data.users.map(user => <Card><li>{user.name}</li><li>{user.address}</li>
                                  </Card>)}
    </div>
    <br></br>
    <button  onClick={loadMoreHandler}>Load More</button>
    </div>
    )
}



const USER_QUERY = gql`
  query Users($offset: Int, $limit: Int) {
    users(offset: $offset, limit: $limit) {
    name
    address
  }}`

export default Name;
