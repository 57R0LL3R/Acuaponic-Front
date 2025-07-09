import { AsignacionMedios } from "./AsignacionMedios";
import { UnidadMedida } from "./UnidadMedida";

export interface PropiedadSistema {
    IdPropiedadSistema:String;
    IdAsignacionSistema:String;
    IdAsignacionMedio:String;
    IdUnidadMedida:String;
    CantidadAtributo:number;
    Nombre: string;
    upa: string;
    Valor: number;
    tipoMedida: string;
    medioProduccion: string;
    Eventos: [];
    IdAsignacionMedioNavigation:AsignacionMedios;
    //IdAsignacionSistemaNavigation
    IdUnidadMedidaNavigation:UnidadMedida
  }
  