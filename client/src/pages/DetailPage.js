import React, { useState, useEffect, useCallback } from 'react';
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
import { Loading } from '../assets/icons/Loading';
import cogoToast from 'cogo-toast';
import Message from '../components/Message';

const TitleCenter = styled(Title)`
  margin: 30px 0 0 0;
  text-align: center;
`;

const Link = styled(NavLink)`
  position: absolute;
  z-index: 1;
  text-decoration: none;
`;

const ActionRight = styled.a`
  position: absolute;
  z-index: 1;
  right: 0;
  cursor: pointer;
`;

const DetailPage = () => {
  const history = useHistory();
  const [setDetails, setSetDetails] = useState([]);
  const { request, loading, error, clearError } = useHttp();
  const { setId } = useParams();

  useEffect(() => {
    error && console.error(error);
    clearError();
  }, [error, clearError]);

  const handleDelete = async () => {
    try {
      const delSet = await request(
        `/api/collection/mysets/${setId}`,
        'DELETE',
        null
      );
      await cogoToast.error(<Message>{delSet}</Message>);
      history.goBack();
    } catch (e) {
      // empty
    }
  };

  const getSetDetails = useCallback(async () => {
    try {
      const data = await request(
        `/api/collection/mysets/${setId}`,
        'GET',
        null
      );
      setSetDetails(data);
    } catch (e) {
      // empty
    }
  }, [request, setId]);

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
        <ActionRight onClick={handleDelete}>
          <Action>
            <Delete />
          </Action>
        </ActionRight>
      </Header>
      <MainArea>
        {loading && <Loading />}
        <CardDetail
          details={{
            id: setDetails._id,
            title: setDetails.name,
            subtitle: setDetails.theme,
            description: setDetails.description,
            img: setDetails.set_img_url,
          }}
        />
      </MainArea>
    </>
  );
};

export default DetailPage;
