const mapping: Record<string, string> = {
  organizations: 'organization',
  quotes: 'quote',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
