export type PublicationAuthor = {
  id: string;
  name: string;
  username: string;
  profilePicture: string;
};

export type PublicationOgMetaData = {
  image: string | null;
};

export type PublicationDarkModePreferences = {
  logo: string | null;
};

export type PublicationPreferences = {
  logo: string | null;
  darkMode: PublicationDarkModePreferences | null;
  navbarItems: Array<Record<string, any>>;
};

export type PublicationLinks = {
  twitter?: string | null;
  github?: string | null;
  linkedin?: string | null;
  hashnode?: string | null;
};

export type PublicationIntegrations = {
  gaTrackingID?: string | null;
  umamiWebsiteUUID?: string | null;
  fbPixelID?: string | null;
  hotjarSiteID?: string | null;
  matomoURL?: string | null;
  matomoSiteID?: string | null;
  fathomSiteID?: string | null;
  fathomCustomDomain?: string | null;
  fathomCustomDomainEnabled?: boolean;
  plausibleAnalyticsEnabled?: boolean;
};

export type Publication = {
  id: string;
  title: string;
  displayTitle: string;
  url: string;
  descriptionSEO: string;
  isTeam: boolean;
  favicon: string;
  author: PublicationAuthor;
  ogMetaData: PublicationOgMetaData;
  preferences: PublicationPreferences;
  links: PublicationLinks;
  integrations: PublicationIntegrations;
};
