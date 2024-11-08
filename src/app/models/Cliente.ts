export interface Cliente {
    id?:                     string;
    nombre:                  string;
    email:                   string;
    telefono:                string;
    preferenciaNotificacion: string;
    saldo:                   number;
    fondos?:                  Fondo[];
}

export interface Fondo {
    id?:          string;
    nombre:      string;
    montoMinimo: number;
    categoria:   string;
}

export interface FondosIds {
    idsFondos: string[];
}

export interface Transaccion {
   
    fondo:   Fondo;
    tipo:      string;
    fecha:     Date;
    monto:     number;
}
