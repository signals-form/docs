export const tsconfig = JSON.stringify(
  {
    compilerOptions: {
      jsx: 'react-jsx',
      esModuleInterop: true,
      baseUrl: '.',
      paths: {
        '@/*': ['./*'],
        "@signals-form/core": ["./signals-form/core"],
        "@signals-form/shared": ["./signals-form/shared"],
        "@signals-form/path": ["./signals-form/path"],
        "@signals-form/react": ["./signals-form/react"],
        "@signals-form/resolvers": ["./signals-form/resolvers"]
      },
    },
  },
  null,
  2
);
