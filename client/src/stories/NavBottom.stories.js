import React, { useState } from 'react';
import NavBottom from '../components/NavBottom';
import { Heart, Home, Rocket, Profile } from '../assets/icons/Icons';

export default {
  title: 'Bottom Navigation',
  component: NavBottom,
};

export const NavigationBottom = () => {
  const [active, setActive] = useState('Collection');

  return (
    <NavBottom
      links={[
        { label: 'Collection', Icon: Home },
        {
          label: 'Build It!',
          Icon: Rocket,
        },
        {
          label: 'Wishlist',
          Icon: Heart,
        },
        {
          label: 'Profile',
          Icon: Profile,
        },
      ]}
      value={active}
      onTabClick={(page) => setActive(page)}
    />
  );
};
