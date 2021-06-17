export interface Publicacion {
    $idPublicacion?: string;
    idUsuario: string;
    nombreAnimal:string;
    tipo:string;
    celular:string;
    especie:string;
    edad:number;
    tamano:string;
    personalidad :string;
    energia:string;
    esterilizado:string;
    parasitos:string;
    vacunas:string;
    region:string;
    ciudad :string;
    observacion:string;
    imagen: any;
    fileRef?: string;
    estado:string;
}