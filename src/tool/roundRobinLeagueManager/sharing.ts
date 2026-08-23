import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';
import { isLeagueRecord, type LeagueLibrary, type LeagueRecord } from './logic';

export function encodeLeague(record: LeagueRecord): string {
  return compressToEncodedURIComponent(JSON.stringify(record));
}

export function decodeLeague(value: string): LeagueRecord | null {
  try {
    const decompressed = decompressFromEncodedURIComponent(value);
    if (!decompressed) return null;
    const parsed: unknown = JSON.parse(decompressed);
    return isLeagueRecord(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function createLeagueShareUrl(currentUrl: string, record: LeagueRecord): string {
  const url = new URL(currentUrl);
  url.search = '';
  url.searchParams.set('league', encodeLeague(record));
  return url.toString();
}

export function sharedLeagueId(token: string): string {
  let hash = 2166136261;
  for (let index = 0; index < token.length; index += 1) {
    hash ^= token.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `shared-${(hash >>> 0).toString(36)}`;
}

export function importSharedLeague(library: LeagueLibrary, currentUrl: string, now: string): string | null {
  const token = new URL(currentUrl).searchParams.get('league');
  if (!token) return library.activeLeagueId;
  const decoded = decodeLeague(token);
  if (!decoded) return library.activeLeagueId;
  const id = sharedLeagueId(token);
  if (!library.leagues.some((league) => league.id === id)) {
    library.leagues.push({ ...decoded, id, createdAt: now, updatedAt: now });
  }
  return id;
}
