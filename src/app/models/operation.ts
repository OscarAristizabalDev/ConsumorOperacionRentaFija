import { Fraction } from "./fraction";

export class Operation {
    IdOperation: string;
    Nemonic: string;
    Side: string;
    rentaFijaTerceros: boolean;
    rentaFijaFics: boolean;
    subasta: boolean;
    CodigoDepDirecto: string;
    CuentaSebra: string;
    ValorConstancia: string;
    FechaConstancia: Date;
    opcional1: string;
    opcional2: string;
    Fractions: Array<Fraction>;
    TagCustodio: string;
    px: string;
    DigitoVerificacion: string;
    UserComplemented: string;
    InitialsCommercial: string;
}
