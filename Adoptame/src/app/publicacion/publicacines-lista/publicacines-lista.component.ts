import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Publicacion } from 'src/app/shared/models/publicacion.model';
import { PublicacionesService} from '../../shared/services/publicaciones.service'
@Component({
  selector: 'app-publicacines-lista',
  templateUrl: './publicacines-lista.component.html',
  styleUrls: ['./publicacines-lista.component.scss']
})
export class PublicacinesListaComponent implements OnInit {
  
  ciudades = [
    {
      region: "Región Metropolitana de Santiago",
      comunas: [
        "Cerrillos",
        "Cerro Navia",
        "Conchalí",
        "El Bosque",
        "Estación Central",
        "Huechuraba",
        "Independencia",
        "La Cisterna",
        "La Florida",
        "La Granja",
        "La Pintana",
        "La Reina",
        "Las Condes",
        "Lo Barnechea",
        "Lo Espejo",
        "Lo Prado",
        "Macul",
        "Maipú",
        "Ñuñoa",
        "Pedro Aguirre Cerda",
        "Peñalolén",
        "Providencia",
        "Pudahuel",
        "Quilicura",
        "Quinta Normal",
        "Recoleta",
        "Renca",
        "Santiago",
        "San Joaquín",
        "San Miguel",
        "San Ramón",
        "Vitacura",
        "Puente Alto",
        "Pirque",
        "San José de Maipo",
        "Colina",
        "Lampa",
        "Tiltil",
        "San Bernardo",
        "Buin",
        "Calera de Tango",
        "Paine",
        "Melipilla",
        "Alhué",
        "Curacaví",
        "María Pinto",
        "San Pedro",
        "Talagante",
        "El Monte",
        "Isla de Maipo",
        "Padre Hurtado",
        "Peñaflor"
      ]
    },
    {
      region: "Tarapacá",
      comunas: [
        "Iquique",
        "Alto Hospicio",
        "Pozo Almonte",
        "Camiña",
        "Colchane",
        "Huara",
        "Pica"
      ]
    },
    {
      region: "Antofagasta",
      comunas: [
        "Antofagasta",
        "Mejillones",
        "Sierra Gorda",
        "Taltal",
        "Calama",
        "Ollagüe",
        "San Pedro de Atacama",
        "Tocopilla",
        "María Elena"
      ]
    },
    {
      region: "Atacama",
      comunas: [
        "Copiapó",
        "Caldera",
        "Tierra Amarilla",
        "Chañaral",
        "Diego de Almagro",
        "Vallenar",
        "Alto del Carmen",
        "Freirina",
        "Huasco"
      ]
    },
    {
      region: "Coquimbo",
      comunas: [
        "La Serena",
        "Coquimbo",
        "Andacollo",
        "La Higuera",
        "Paiguano",
        "Vicuña",
        "Illapel",
        "Canela",
        "Los Vilos",
        "Salamanca",
        "Ovalle",
        "Combarbalá",
        "Monte Patria",
        "Punitaqui",
        "Río Hurtado"
      ]
    },
    {
      region: "Valparaíso",
      comunas: [
        "Valparaíso",
        "Casablanca",
        "Concón",
        "Juan Fernández",
        "Puchuncaví",
        "Quintero",
        "Viña del Mar",
        "Isla de Pascua",
        "Los Andes",
        "Calle Larga",
        "Rinconada",
        "San Esteban",
        "La Ligua",
        "Cabildo",
        "Papudo",
        "Petorca",
        "Zapallar",
        "Quillota",
        "Calera",
        "Hijuelas",
        "La Cruz",
        "Nogales",
        "San Antonio",
        "Algarrobo",
        "Cartagena",
        "El Quisco",
        "El Tabo",
        "Santo Domingo",
        "San Felipe",
        "Catemu",
        "Llaillay",
        "Panquehue",
        "Putaendo",
        "Santa María",
        "Quilpué",
        'Limache',
        "Olmué",
        "Villa Alemana"
      ]
    },
    {
      region: "Región del Libertador Gral. Bernardo O’Higgins",
      comunas: [
        "Rancagua",
        "Codegua",
        "Coinco",
        "Coltauco",
        "Doñihue",
        "Graneros",
        "Las Cabras",
        "Machalí",
        "Malloa",
        "San Francisco de Mostazal",
        "Olivar",
        "Peumo",
        "Pichidegua",
        "Quinta de Tilcoco",
        "Rengo",
        "Requínoa",
        "San Vicente de Tagua Tagua",
        "Pichilemu",
        "La Estrella",
        "Litueche",
        "Marchihue",
        "Navidad",
        "Paredones",
        "San Fernando",
        "Chépica",
        "Chimbarongo",
        "Lolol",
        "Nancagua",
        "Palmilla",
        "Peralillo",
        "Placilla",
        "Pumanque",
        "Santa Cruz"
      ]
    },
    {
      region: "Región del Maule",
      comunas: [
        "Talca",
        "Constitución",
        "Curepto",
        "Empedrado",
        "Maule",
        "Pelarco",
        "Pencahue",
        "Río Claro",
        "San Clemente",
        "San Rafael",
        "Cauquenes",
        "Chanco",
        "Pelluhue",
        "Curicó",
        "Hualañé",
        "Licantén",
        "Molina",
        "Rauco",
        "Romeral",
        "Sagrada Familia",
        "Teno",
        "Vichuquén",
        "Linares",
        "Colbún",
        "Longaví",
        "Parral",
        "Retiro",
        "San Javier de Loncomilla",
        "Villa Alegre",
        "Yerbas Buenas"
      ]
    },
    {
      region: "Región del Biobío",
      comunas: [
        "Concepción",
        "Coronel",
        "Chiguayante",
        "Florida",
        "Hualqui",
        "Lota",
        "Penco",
        "San Pedro de la Paz",
        "Santa Juana",
        "Talcahuano",
        "Tomé",
        "Hualpén",
        "Lebu",
        "Arauco",
        "Cañete",
        "Contulmo",
        "Curanilahue",
        "Los Álamos",
        "Tirúa",
        "Los Ángeles",
        "Antuco",
        "Cabrero",
        "Laja",
        "Mulchén",
        "Nacimiento",
        "Negrete",
        "Quilaco",
        "Quilleco",
        "San Rosendo",
        "Santa Bárbara",
        "Tucapel",
        "Yumbel",
        "Alto Biobío"
      ]
    },
    {
      region: "Región de la Araucanía",
      comunas: [
        "Temuco",
        "Carahue",
        "Cunco",
        "Curarrehue",
        "Freire",
        "Galvarino",
        "Gorbea",
        "Lautaro",
        "Loncoche",
        "Melipeuco",
        "Nueva Imperial",
        "Padre las Casas",
        "Perquenco",
        "Pitrufquén",
        "Pucón",
        "Saavedra",
        "Teodoro Schmidt",
        "Toltén",
        "Vilcún",
        "Villarrica",
        "Cholchol",
        "Angol",
        "Collipulli",
        "Curacautín",
        "Ercilla",
        "Lonquimay",
        "Los Sauces",
        "Lumaco",
        "Purén",
        "Renaico",
        "Traiguén",
        "Victoria"
      ]
    },
    {
      region: "Región de Los Ríos",
      comunas: [
        "Valdivia",
        "Corral",
        "Lanco",
        "Los Lagos",
        "Máfil",
        "Mariquina",
        "Paillaco",
        "Panguipulli",
        "La Unión",
        "Futrono",
        "Lago Ranco",
        "Río Bueno"
      ]
    },
    {
      region: "Región de Los Lagos",
      comunas: [
        "Puerto Montt",
        "Calbuco",
        "Cochamó",
        "Fresia",
        "Frutillar",
        "Los Muermos",
        "Llanquihue",
        "Maullín",
        "Puerto Varas",
        "Castro",
        "Ancud",
        "Chonchi",
        "Curaco de Vélez",
        "Dalcahue",
        "Puqueldón",
        "Queilén",
        "Quellón",
        "Quemchi",
        "Quinchao",
        "Osorno",
        "Puerto Octay",
        "Purranque",
        "Puyehue",
        "Río Negro",
        "San Juan de la Costa",
        "San Pablo",
        "Chaitén",
        "Futaleufú",
        "Hualaihué",
        "Palena"
      ]
    },
    {
      region: "Región Aisén del Gral. Carlos Ibáñez del Campo",
      comunas: [
        "Coihaique",
        "Lago Verde",
        "Aisén",
        "Cisnes",
        "Guaitecas",
        "Cochrane",
        "O’Higgins",
        "Tortel",
        "Chile Chico",
        "Río Ibáñez"
      ]
    },
    {
      region: "Región de Magallanes y de la Antártica Chilena",
      comunas: [
        "Punta Arenas",
        "Laguna Blanca",
        "Río Verde",
        "San Gregorio",
        "Cabo de Hornos (Ex Navarino)",
        "Antártica",
        "Porvenir",
        "Primavera",
        "Timaukel",
        "Natales",
        "Torres del Paine"
      ]
    },
  
    {
      region: "Arica y Parinacota",
      comunas: ["Arica", "Camarones", "Putre", "General Lagos"]
    },
  
    {
      region: "Región de Ñuble",
      comunas: [
        "Cobquecura",
        "Coelemu",
        "Ninhue",
        "Portezuelo",
        "Quirihue",
        "Ránquil",
        "Treguaco",
        "Bulnes",
        "Chillán Viejo",
        "Chillán",
        "El Carmen",
        "Pemuco",
        "Pinto",
        "Quillón",
        "San Ignacio",
        "Yungay",
        "Coihueco",
        "Ñiquén",
        "San Carlos",
        "San Fabián",
        "San Nicolás"
      ]
    }
  ];

  especie: string[] = ['Gato','Perro','Otros'];
  tipos: string[] = ['Callejero','De casa'];

  comunas: string[] = [''];
  $publicaiones = this.publicacionesServices.publicaciones;
  publicaciones: Publicacion [] = [];

  comunasselec = new FormControl();
  especies = new FormControl();
  regiones = new FormControl();

  filtroEspecies=false;
  filtroRegiones=false;
  filtroComunas=false;

  constructor(private publicacionesServices: PublicacionesService) {

    this.comunasselec= new FormControl(Validators.required,)
    this.especies= new FormControl(Validators.required,)
    this.regiones= new FormControl(Validators.required,)
  }  
  ngOnInit(){
    this.getPubliaciones();

  }
  clickPublicacion($idPublicacion : string){
    console.log('pruebaaaaaaaa');
    console.log($idPublicacion);
  }
  getPubliaciones(){
    this.publicacionesServices.publicaciones
    .subscribe(publiacion =>{
      this.publicaciones = publiacion
    })
  }

  obtenerCiudades(region:string){
    const ciudadElejida = region;  
    for (let i=0; i <this.ciudades.length;i++){
      if(this.ciudades[i].region == ciudadElejida){
        console.log(region,"region afuera");
        console.log(this.ciudades[i].region,"region for");
        this.comunas=this.ciudades[i].comunas;
        console.log(this.comunas,"comunas")
      }
    }
  }


  filtrar(){
    //Especie y region
    if(this.filtroEspecies && this.filtroRegiones && !this.filtroComunas){
      this.publicacionesServices.filterByRegionEspecie(this.especies.value,this.regiones.value).subscribe(data=>{
        this.publicaciones = data})
    }else{
      //region
    if(this.filtroRegiones && !this.filtroComunas && !this.filtroEspecies){
      console.log("tipo")
      this.publicacionesServices.filterByregion(this.regiones.value).subscribe(data=>{
        this.publicaciones = data})
    }else{
      //especie
      if(this.filtroEspecies && !this.filtroRegiones && !this.filtroComunas){
        this.publicacionesServices.filterByespecie(this.especies.value).subscribe(data=>{
          this.publicaciones = data})
      }else{
        //region,comuna,especie
        if(this.filtroComunas && this.filtroRegiones  && this.filtroEspecies){
          this.publicacionesServices.filterByAll(this.regiones.value,this.comunasselec.value,this.especies.value).subscribe(data=>{
            this.publicaciones = data})
        }else{
          if(this.filtroComunas && this.filtroRegiones && !this.filtroEspecies){
            this.publicacionesServices.filterByComunas(this.comunasselec.value).subscribe(data=>{
              this.publicaciones = data})
          }
        }
      }
    }
  }
}
  
  filtroregion(region:string){
    this.filtroRegiones=true;
    this.obtenerCiudades(region);
  }

  filtroespecie(especie:string){
    this.filtroEspecies=true;
  }

  limpiarfiltros(){
    this.getPubliaciones();
    this.especies.reset();
    this.comunasselec.reset();
    this.regiones.reset();
    this.filtroEspecies=false;
    this.filtroComunas=false;
    this.filtroRegiones=false;
  }

  filtroComuna(){
    this.filtroComunas=true;
  }


}
