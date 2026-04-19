import { createTheme, type MantineColorsTuple } from '@mantine/core';

// Custom brand palette (example) — use your own colors here.
const wpBlue: MantineColorsTuple = [
  '#e6f4ff',
  '#c7e3ff',
  '#98caff',
  '#67afff',
  '#3e97ff',
  '#2388ff',
  '#0a80ff',
  '#006be6',
  '#005fd0',
  '#0050b8',
];

export const theme = createTheme({
  primaryColor: 'wpBlue',
  colors: { wpBlue },
  defaultRadius: 'md',
  cursorType: 'pointer',
});
