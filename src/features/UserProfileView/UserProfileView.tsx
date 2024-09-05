import { Typography } from '@/shared/ui';

const TEXT = {
  H1: 'user profile page',
};

const UserProfileView = () => {
  return (
    <Typography tag="h1" variant="title-1">
      {TEXT.H1}
    </Typography>
  );
};

export { UserProfileView };
