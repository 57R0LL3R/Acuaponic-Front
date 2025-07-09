import { TipoMedicion } from "./TipoMedicion";

export interface UnidadMedida{
    IdUnidadMedida:String;
    IdTipoMedicion:String;
    Nombre:String;
    Simbolo:String;
    CantidadElementos:[];
    Eventos:[];
    IdTipoMedicionNavigation:TipoMedicion;
    Medicions:[];
    PropiedadSistemas:[];
}