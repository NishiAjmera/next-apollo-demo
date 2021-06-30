import { Card } from './Card';
import styles from './Name.module.css';
import React, {useState} from 'react';
import '../src/generated/graphql'
import { useUsersQuery } from '../src/generated/graphql';


interface User {
  name: String,
  address: String, 
  email: String,
  phoneNumber: String
}

export const Name: React.FC = () => {
  const [first, setFirst] = useState(20);


   const { data, loading, error, fetchMore }: {data: any, loading:any, error?:any, fetchMore:any} = useUsersQuery({
       variables: {
          offset: 20, 
          limit: 20
       },
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
    {data.users.map((user: User, index: number) => 
          <Card key={index}>
            <li>{user.name}</li>
            <li>{user.address}</li>
          </Card>)}
    </div>
    <br></br>
    <button  onClick={loadMoreHandler}>Load More</button>
    </div>
    )
}


