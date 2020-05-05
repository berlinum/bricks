import React, { useState, useEffect, useCallback, useContext } from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header/Header';
import Title from '../components/Header/Title';
import Action from '../components/Header/Action';
import Label from '../components/Header/Label';
import { Arrow, Delete } from '../assets/icons/Actions';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import MainArea from '../components/MainArea';
import CardDetail from '../components/CardDetail';
import useHttp from '../hooks/useHttp.hook';
import AuthContext from '../context/AuthContext';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const TitleCenter = styled(Title)`
  margin: 30px 0 0 0;
  text-align: center;
`;

const Link = styled(NavLink)`
  position: absolute;
  z-index: 1;
  text-decoration: none;
`;
const ActionRight = styled(NavLink)`
  position: absolute;
  z-index: 1;
  right: 0;
  text-decoration: none;
`;
const DetailPage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [setDetails, setSetDetails] = useState([]);
  const { request } = useHttp();
  const { setId } = useParams();

  const handleDelete = async () => {
    try {
      await request(`/api/collection/mysets/${setId}`, 'DELETE', null, {
        Authorization: `Bearer ${auth.token}`,
      });
      history.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  const getSetDetails = useCallback(async () => {
    try {
      const data = await request(
        `/api/collection/mysets/${setId}`,
        'GET',
        null,
        {
          Authorization: `Bearer ${auth.token}`,
        }
      );
      setSetDetails(data);
    } catch (error) {
      console.error(error);
    }
  }, [request, auth.token, setId]);

  useEffect(() => {
    getSetDetails();
  }, [getSetDetails]);

  return (
    <>
      <Header>
        <Link to="/collection/mysets">
          <Action>
            <Arrow />
            <Label>Back</Label>
          </Action>
        </Link>
        <TitleCenter>Collection</TitleCenter>
        <ActionRight>
          <Action onClick={handleDelete}>
            <Delete />
          </Action>
        </ActionRight>
      </Header>
      <MainArea>
        <Container>
          <CardDetail
            details={{
              id: setDetails._id,
              title: setDetails.name,
              subtitle: setDetails.theme,
              description: setDetails.description,
              img: setDetails.set_img_url,
            }}
          />
        </Container>
      </MainArea>
    </>
  );
};

export default DetailPage;
