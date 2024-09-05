import { SignUpView } from '@/features';
import { UserLayout } from '@/shared/layout';

import type { NextPageWithLayout } from '../_app';

const SignUp: NextPageWithLayout = () => <SignUpView />;

SignUp.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default SignUp;
