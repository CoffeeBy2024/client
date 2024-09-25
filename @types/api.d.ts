enum Provider {
  PASSWORD = 'password',
  GOOGLE = 'google',
}

interface User {
  id: number;
  firstName: string;
  lastName: string | null;
  email: string;
  provider: Provider;
  emailVerified: boolean;
  emailVerificationLink: string | null;
  location: string | null;
  tokens: Token[];
}

type RegisterUserDto = Pick<User, 'firstName' | 'lastName' | 'email'> & {
  password: string;
  confirmPassword: string;
}

type LoginUserDto = Pick<RegisterUserDto, 'email', 'password'>

type UsersResponse = User[];
type UserResponse = User;

type RegisterUserResponse = User;
type LoginUserResponse = {  
  accessToken: string,
  user: User
}

interface RefreshToken {
  id: number;
  value: string;
  expiresAt: Date;
  userAgent: string;
  user: User;
}

type AccessToken = {
  accessToken: string
};

type LogoutResponse = Omit<RefreshToken, 'id' | 'user'> | null;

type AccessTokenResponse = AccessToken
type RefreshTokensResponse = {
  accessToken: string,
  user: User,
}