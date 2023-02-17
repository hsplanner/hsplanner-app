import React, { useState, useEffect } from 'react'
import { Menu, Title } from '../../components';
import { PlannerExplorerList } from '../../components/organisms/PlannerExplorerList';
import { Body, Header, Loader, LoaderContainer, LoadingMessage } from './styles';
import { colors } from '../../styles/colors';
import api from '../../services/api';


export const Explore = () => {
  const [planners, setPlanners] = useState([])

  const [loading, setLoading] = useState(false);

  const getPlanners = async () => {
    try {
      setLoading(true);
      const result = await api.get(`/planners`);
      if(Array.isArray(result.data)) {
        console.log("#entrou")
        console.log("#entrou2", result.data)
        setPlanners(result.data);
      }
      setLoading(false);
      return;
    } catch (error) {
      console.log('errro', {error});
      setLoading(false);
      return error;
    }
  };

  useEffect(() => {
    getPlanners()
  }, [])

  console.log("PLANERS", planners)

  return (
    <>
      <Header>
        <Menu />
        <Title ml={25}>Explorar</Title>
      </Header> 
      <Body>
          {loading ? (
            <LoaderContainer>
              <Loader size="large" color={colors.blueDark} />
              <LoadingMessage>Carregando...</LoadingMessage>
            </LoaderContainer>
          ) : (
                <PlannerExplorerList data={planners} setLoading={setLoading}/> 
              )
          }
      </Body>
    </>
  )
}
