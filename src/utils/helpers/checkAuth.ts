const imitateUserAuthCheck = async function (): Promise<boolean> {
  const result = (await new Promise((res) => {
    setTimeout(() => res(false), 100);
  })) as boolean;
  return result;
};

export const checkAuth = async () => {
  const userIsAuthenticated = await imitateUserAuthCheck();
  return userIsAuthenticated;
};
