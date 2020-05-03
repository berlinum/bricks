import React from 'react';
import ProfileEdit from '../components/ProfileEdit';
import styled from '@emotion/styled';
import colors from '../utils/colors';

export default {
  title: 'Profile',
  component: ProfileEdit,
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 500px;
  background: ${colors.bgLight};
`;

export const ProfilePageEdit = () => (
  <Container>
    <ProfileEdit
      form={[
        { name: 'Name:', type: 'text' },
        { name: 'Change email', type: 'text' },
        { name: 'New password:', type: 'password' },
        { name: 'Confirm new password:', type: 'password' },
      ]}
    />
  </Container>
);
