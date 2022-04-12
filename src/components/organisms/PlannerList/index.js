import React from 'react';
import {PlannerCard} from '../../molecules';
import {PlannerListContainer} from './styles';

export const PlannerList = ({data}) => {
  return (
    <PlannerListContainer
      data={data}
      renderItem={({item}) => (
        <PlannerCard item={item} />
      )}
      keyExtractor={item => item?.id}
    />
  );
};
