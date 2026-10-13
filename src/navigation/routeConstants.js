export const ROUTES = {
  SPLASH: '/splash',
  LANDING: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  HOME: '/home',
  BROWSE: '/browse',
  REELS: '/reels',
  CHAT: '/chat',
  PROFILE: '/profile',
  MOVIE: '/movie',
  SETTINGS: '/settings',
  NOTIFICATIONS: '/notifications',
  MONETIZATION: '/monetization',
  INSIGHTS: '/insights',
};

// Compatibility aliases mirroring deeds routesConstants
export const routesConstants = {
  Login: ROUTES.LOGIN,
  Splash: ROUTES.SPLASH,
  Notification: ROUTES.NOTIFICATIONS,
  Settings: ROUTES.SETTINGS,
  Home: ROUTES.HOME,
  Browse: ROUTES.BROWSE,
  Profile: ROUTES.PROFILE,
  EditProfile: ROUTES.PROFILE,
  savedPosts: ROUTES.PROFILE,
  Chat: ROUTES.CHAT,
  chatCard: ROUTES.CHAT,
  newChat: ROUTES.CHAT,
  post: ROUTES.HOME,
  reels: ROUTES.REELS,
  movie: ROUTES.MOVIE,
  ratings: ROUTES.MOVIE,
  monetization: ROUTES.MONETIZATION,
  insights: ROUTES.INSIGHTS,
  finance: ROUTES.MONETIZATION,
  intro: ROUTES.LANDING,
  video: ROUTES.MOVIE,
};

export default ROUTES;
