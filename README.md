# TSDoc Test Reporter Kitchen Sink

Showcasing TSDoc Test Reporter output.

This repository is setup to run both jest and vitest and output reports for both but uses `vitest` as the main report to show. Because both test frameworks are in the same repository each test is duplicated and prefixed with either `vitest` or `jest`. Vitest has some more features and test block names so some tests may differ.

## Testing

### Vitest

```bash
pnpm test
```

### Jest

```bash
pnpm test:jest
```
