import { Typography } from '@/shared/ui/Typography/Typography';

const TEXT = {
  H1: 'home page',
};

const HomeView = () => {
  return (
    <Typography tag="h1" variant="title-1">
      {TEXT.H1}
    </Typography>
  );
};

export { HomeView };
