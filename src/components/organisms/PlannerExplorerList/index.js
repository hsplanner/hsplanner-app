import React from 'react';
import {PlannerExplorerCard} from '../../molecules';
import {PlannerListContainer} from './styles';

export const PlannerExplorerList = ({data, setLoading}) => {
  return (
    <PlannerListContainer
      data={data}
      renderItem={({item}) => (
        <PlannerExplorerCard item={item} setLoading={setLoading}/>
      )}
      keyExtractor={item => item?._id}
    />
  );
};
