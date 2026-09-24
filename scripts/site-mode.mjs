export function siteEnabled(env = process.env) {
  const value = env.SITE_ENABLED ?? (env.CI ? 'false' : 'true');
  if (value !== 'true' && value !== 'false') {
    throw new Error('SITE_ENABLED must be exactly "true" or "false".');
  }
  return value === 'true';
}
