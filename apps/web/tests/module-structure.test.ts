// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
//
// SPDX-License-Identifier: MIT

import { readdirSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

const MODULES_DIRECTORY = join(import.meta.dirname, '../src/modules');
const REQUIRED_ENTRIES = [
  'components',
  'pages',
  'composables',
  'services',
  'stores',
  'types',
  'tests',
] as const;

const moduleNames = readdirSync(MODULES_DIRECTORY).filter((name) => !name.startsWith('.'));

describe('module structure', () => {
  it('has at least one module', () => {
    expect.hasAssertions();
    expect(moduleNames.length).toBeGreaterThan(0);
  });

  it.each(moduleNames)('module %s exposes index.ts and the 7 standard folders', (moduleName) => {
    expect.hasAssertions();

    const entries = readdirSync(join(MODULES_DIRECTORY, moduleName));

    expect(entries).toContain('index.ts');

    for (const entry of REQUIRED_ENTRIES) {
      expect(entries).toContain(entry);
    }
  });
});
