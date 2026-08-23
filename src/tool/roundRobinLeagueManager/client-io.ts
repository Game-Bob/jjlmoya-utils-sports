import { createLeagueShareUrl } from './sharing';
import { isLeagueRecord, type LeagueRecord } from './logic';

export function createClientId(): string {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  return `league-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export async function copyLeagueLink(record: LeagueRecord): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(createLeagueShareUrl(window.location.href, record));
    return true;
  } catch {
    return false;
  }
}

export function downloadLeagueBackup(record: LeagueRecord): void {
  const blob = new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${record.config.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'league'}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export async function readLeagueBackup(file: File): Promise<LeagueRecord | null> {
  try {
    const parsed: unknown = JSON.parse(await file.text());
    return isLeagueRecord(parsed) ? parsed : null;
  } catch {
    return null;
  }
}
