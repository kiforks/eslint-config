import configs from 'eslint-plugin-jest';

/** @type { import("eslint").Linter.Config[] } */
const config = [configs['flat/recommended'], configs['flat/style'], configs['flat/all']];

/** @type { import("eslint").Linter.Config[] } */
// eslint-disable-next-line no-shadow
export default config.map(config => ({ ...config, files: ['**/*.spec.ts', '**/*.host.ts', '**/*.po.ts'] }));
