import { Typography } from '@/components';

const TEXT = {
  H1: 'menu page',
};

const MenuView = () => {
  return (
    <Typography tag="h1" variant="title-1">
      {TEXT.H1}
    </Typography>
  );
};

export { MenuView };
