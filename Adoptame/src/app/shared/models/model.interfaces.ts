export interface RegionI{
    id:number;
    nombre:string
}
export interface ComunaI{
    id:number;
    regionId:number;
    nombre:string;
}