// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette, paletteColor } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
	interface paletteColor {
		[key: number]: string;
	}

	interface palette {
		tertiary: paletteColor;
	}
}