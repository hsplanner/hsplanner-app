import React from 'react';
import {UserCardStudent} from '../../molecules';
import {UserListContainer} from './styles';

export const UserListStudent = ({data}) => {
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
      data={data}
      renderItem={({item}) => (
        <UserCardStudent item={item} />
      )}
      keyExtractor={item => item?._id}
    />
  );
};
