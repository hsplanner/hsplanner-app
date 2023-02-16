import React from 'react';
import {UserCard} from '../../molecules';
import {UserListContainer} from './styles';

export const UserList = ({data}) => {
  const data2 = [{
    name: "John Júnior",
    username: "@iamjohn"
  },
  {
    name: "Maria Vitória",
    username: "@mari2019"
  },
  {
    name: "Carol da Silva",
    username: "@carolzinha20"
  },
  {
    name: "Wesley Rocha",
    username: "@rochawesley"
  },
]
  console.log("Data", data)
  return (
    <UserListContainer
      data={data2}
      renderItem={({item}) => (
        <UserCard item={item} />
      )}
      keyExtractor={item => item?._id}
    />
  );
};
