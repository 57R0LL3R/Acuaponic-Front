import { Elemento } from "./Elemento";
import { PropiedadSistema } from "./PropiedadSistema";
import { UnidadMedida } from "./UnidadMedida";

export interface Evento{
    IdEvento:String;
    IdAsignacionSistema:String;
    IdElemento:String;
    IdAtributoSistema:String;
    IdUnidadMedida:String;
    IdTipoEvento:String;
    Cantidad:number;
    FechaEvento:String;
    //IdAsignacionSistemaNavigation:asignacionSistema;
    IdAtributoSistemaNavigation:PropiedadSistema|null;
    IdElementoNavigation:Elemento;
    //IdTipoEventoNavigation:TipoEvento;
    IdUnidadMedidaNavigation:UnidadMedida;
}