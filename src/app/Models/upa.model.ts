export interface Sistema {
    id: number;
    nombre: string;
    dispositivos: Dispositivo[];
  }
  
  export interface Dispositivo {
    id: number;
    nombre: string;
  }
  
  export interface Upa {
    id?: number;
    nombre: string;
    ubicacion: string;
    usuarioId: number;
    sistemas?: Sistema[]; // relación
  }
  