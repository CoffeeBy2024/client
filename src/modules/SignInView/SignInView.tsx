import Link from 'next/link';

import { Button, Typography, Container } from '@/components';
import { ROUTES } from '@/utils/constants';
import { useAuth } from '@/utils/hooks';

const TEXT = {
  H1: 'sign in page',
  SIGN_IN_BTN: 'sign up',
  SIGN_UP_LINK: 'sign up',
};

const SignInView = () => {
  const { setIsAuthenticated } = useAuth();

  return (
    <section className="h-full">
      <Container>
        <Typography tag="h1" variant="title-1">
          {TEXT.H1}
        </Typography>
        <Button
          size="medium"
          variant="contained"
          onClick={() => setIsAuthenticated(true)}
        >
          {TEXT.SIGN_IN_BTN}
        </Button>
        <Link href={ROUTES.SIGN_UP.path} className="bg-orange-300">
          {TEXT.SIGN_UP_LINK}
        </Link>
      </Container>
    </section>
  );
};

export { SignInView };
