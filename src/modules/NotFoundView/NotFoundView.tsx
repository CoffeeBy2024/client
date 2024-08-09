import Link from 'next/link';

import { Button, Container, Typography } from '@/components';
import { ROUTES } from '@/utils/constants';

const TEXT = {
  TITLE: 'Page Not Found',
  RETURN_BTN: 'Return',
};

const NotFoundView = () => {
  return (
    <section className="h-full">
      <Container className="flex flex-col items-center justify-center gap-5">
        <Typography tag="h1" variant="title-1">
          {TEXT.TITLE}
        </Typography>
        <Button size="medium" variant="contained">
          <Link href={ROUTES.ROOT.path}>{TEXT.RETURN_BTN}</Link>
        </Button>
      </Container>
    </section>
  );
};

export { NotFoundView };
