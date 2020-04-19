import React, { useState } from 'react';
import NavTop from '../components/NavTop';

export default {
  title: 'Bottom Navigation',
  component: NavTop,
};

export const NavigationTop = () => {
  const [active, setActive] = useState('My Sets');

  return (
    <NavTop
      links={[
        { label: 'My Sets' },
        {
          label: 'My Parts',
        },
      ]}
      value={active}
      onTabClick={(page) => setActive(page)}
    />
  );
};
