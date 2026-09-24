// Set the confirmed birth date (YYYY-MM-DD) to enable birthday-based updates.
// An age alone cannot establish an exact birthday.
export const profile = {
  birthDate: null as string | null,
  confirmedAge: 8,
  confirmedOn: '2026-09-24',
};

export function ageLabel(locale: 'en' | 'ru', now = new Date()): string {
  let age = profile.confirmedAge;
  if (profile.birthDate) {
    const [year, month, day] = profile.birthDate.split('-').map(Number);
    age = now.getUTCFullYear() - year;
    if (now.getUTCMonth() + 1 < month || (now.getUTCMonth() + 1 === month && now.getUTCDate() < day)) age--;
  }
  const unit = locale === 'en' ? 'years old' : age % 10 === 1 && age % 100 !== 11 ? 'год' : age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 12 || age % 100 > 14) ? 'года' : 'лет';
  const confirmed = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(profile.confirmedOn));
  return `${age} ${unit}${profile.birthDate ? '' : locale === 'ru' ? ` (на ${confirmed})` : ` (as of ${confirmed})`}`;
}
