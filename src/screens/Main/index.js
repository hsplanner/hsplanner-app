import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native';
import { PlannerList } from '../../components/organisms/PlannerList';

export const Main = () => {
  const { navigate } = useNavigation();
  const dataFetch = [
    {
      id: 'assa',
      title: 'Tito 6º ano',
      description: 'Charlot Masson'
    },
    {
      id: 'asdd',
      title: 'Tito 6º ano',
      description: 'Charlot Masson'
    },
  ]
  return (
    <View>
      <Text>Plannersss</Text>
      <PlannerList data={dataFetch}/>
  </View>
  )
}
