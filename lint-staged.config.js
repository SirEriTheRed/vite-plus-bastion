// SPDX-FileCopyrightText: 2026 ts-bastion contributors
// SPDX-FileContributor: EriTheRed aka Azelann Borde <azelann.borde@gmail.com>
//
// SPDX-License-Identifier: MIT

export default {
  ".github/workflows/*.{yml,yaml}": [
    "bash -c 'command -v actionlint >/dev/null 2>&1 && actionlint -color || echo \"skip actionlint (not installed)\"'",
  ],
  "*.{js,ts}": ["eslint --fix", "prettier --write"],
  "*.md": ["eslint --fix", "prettier --write"],
  "*.json": ["prettier --write"],
  "*.ts": ["bash -c 'pnpm run type-check'"],
  "package.json": ["pnpm run lint:package", "pnpm run package:sort"],
  "*": ["secretlint"]
};
