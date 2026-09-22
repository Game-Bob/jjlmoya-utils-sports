import { describe, expect, it } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

interface LinkFailure {
  tool: string;
  message: string;
}

function validateUrl(tool: string, rawUrl: string, seen: Set<string>): LinkFailure[] {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return [{ tool, message: `invalid URL: ${rawUrl}` }];
  }

  const failures: LinkFailure[] = [];
  if (url.protocol !== 'https:') failures.push({ tool, message: `non-HTTPS URL: ${rawUrl}` });
  if (url.pathname === '/' && !url.search && !url.hash) {
    failures.push({ tool, message: `generic homepage, cite the exact document: ${rawUrl}` });
  }
  if (seen.has(url.href)) failures.push({ tool, message: `duplicate source URL: ${rawUrl}` });
  seen.add(url.href);
  return failures;
}

describe('QA: bibliography links are specific and usable', () => {
  it('uses unique HTTPS links to exact source pages instead of generic homepages', async () => {
    const failures: LinkFailure[] = [];

    for (const tool of ALL_TOOLS) {
      const loader = tool.entry.i18n.en;
      if (!loader) {
        failures.push({ tool: tool.entry.id, message: 'English locale loader is missing' });
        continue;
      }

      const content = (await loader()) as ToolLocaleContent;
      const seen = new Set<string>();

      for (const entry of content.bibliography ?? []) {
        failures.push(...validateUrl(tool.entry.id, entry.url, seen));
      }
    }

    const messages = failures.map(({ tool, message }) => `${tool}: ${message}`);
    expect(messages, `Bibliography hygiene failures:\n${messages.join('\n')}`).toEqual([]);
  });
});
