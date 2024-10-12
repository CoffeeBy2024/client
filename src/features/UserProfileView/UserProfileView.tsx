import axios from 'axios';
import { useRouter } from 'next/router';

import { Button, Container, Typography } from '@/shared/ui';
import { useAuth } from '@/utils/hooks';

const TEXT = {
  H1: 'user profile page',
  BTN_LOGOUT: 'logout',
};

const UserProfileView = () => {
  const { logoutUser } = useAuth();
  const router = useRouter();

  const onLogoutClick = async () => {
    try {
      await logoutUser();
      router.push('/');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Status:', err.status);
        console.error('Message:', err.message);
      }
    }
  };

  return (
    <Container>
      <Typography tag="h1" variant="title-1">
        {TEXT.H1}
      </Typography>
      <Button variant="filled" size="medium" onClick={onLogoutClick}>
        {TEXT.BTN_LOGOUT}
      </Button>
    </Container>
  );
};

export { UserProfileView };
