import type { IColor, IFindOptions } from '../typescript/interfaces';
export declare class ResolveColor {
    colors: Array<IColor>;
    constructor();
    find(arg: string, options: IFindOptions): IColor[];
    findByName(arg: string, options: IFindOptions): IColor[];
    findByHex(arg: string, options: IFindOptions): IColor[];
    findByRgb(arg: string, options: IFindOptions): IColor[];
    private prepar;
}
