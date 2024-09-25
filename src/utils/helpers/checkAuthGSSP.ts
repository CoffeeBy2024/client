import { ParsedUrlQuery } from 'querystring';

import axios from 'axios';
import { GetServerSidePropsContext, PreviewData } from 'next';

import { AuthService } from '@/shared/api';

export const checkAuthGSSP = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
): Promise<boolean> => {
  const { req } = context;
  const cookies = req.headers.cookie;

  let isAuthorized = false;
  try {
    await AuthService.refreshTokens({
      config: {
        headers: {
          Cookie: cookies || '',
        },
      },
    });
    isAuthorized = true;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      //? DO I REALLY NEED TO LOG THIS?
      console.error('Status:', err.status);
      console.error('Message:', err.message);
    } else {
      console.error('Unexpected Error:', err);
    }
  }

  return isAuthorized;
};
