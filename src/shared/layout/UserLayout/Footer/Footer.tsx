import { Container, Typography } from '@/shared/ui';

const TEXT = {
  APP_YEAR_CREATION: 2024,
};

const Footer = () => {
  return (
    <footer className="bg-[#543310]">
      <Container className="flex items-center justify-center py-3">
        <Typography tag="p" variant="footer-1">
          {TEXT.APP_YEAR_CREATION}
        </Typography>
      </Container>
    </footer>
  );
};

export { Footer };
