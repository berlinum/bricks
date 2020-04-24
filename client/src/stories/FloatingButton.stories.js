import React, { useState } from 'react';
import FloatingButton from '../components/FloatingButton';

export default {
  title: 'Button',
  component: FloatingButton,
};

export const AnimatedFloatingButton = () => {
  const [active, setActive] = useState(false);

  return (
    <FloatingButton value={active} onButtonClick={() => setActive(!active)} />
  );
};
