import type { IFormatRGB } from '../typescript/interfaces';
export declare class ColorsConverter {
    /**
     *
     * @param {string} hex hex - The color in hexadecimal format.
     * @returns {}
     */
    convertHexToRGB(hex: string): IFormatRGB;
    private componentToHex;
    convertRGBToHex(rgb: IFormatRGB): string;
}
