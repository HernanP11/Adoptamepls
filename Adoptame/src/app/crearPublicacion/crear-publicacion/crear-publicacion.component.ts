import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from 'src/app/shared/models/publicacion.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { PublicacionesService } from 'src/app/shared/services/publicaciones.service';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.scss']
})
export class CrearPublicacionComponent implements OnInit {

  form: FormGroup;
  private image: any;
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
        "Limache",
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

 
  tamano: string[] = ['No lo sé','Pequeño','Mediano','Grande'];
  especie: string[] = ['Gato','Perro','Otros'];
  tipos: string[] = ['Callejero','De casa'];
  energia: string[] = ['No lo sé','Alta','Media','Baja'];
  personalidad: string[] = ['Alegre','Agresivo','Asustadizo','Cariñoso','Enojon','Perezoso','Tranquilo' ];
  vacunas: string[] = ['No lo sé','Si','No'];
  esterilizado: string[] = ['No lo sé','Si','No'];
  parasitos: string[] = ['No lo sé','Si','No'];
  
  edades: string[] = ['No lo sé','Entre 1 y 3 meses','Entre 4 y 6 meses','Entre 7 meses y 1 año','1 año','2 años','3 años','4 años','5 años','6 años','7 años','8 años','9 años','10 años más'];
  login:any
  
  comunas: string[] = [''];

  constructor(
    private formBuilder: FormBuilder,
    private publicacionesService: PublicacionesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService,
  
  ) { 
    this.authService.loggedIn.subscribe( res => {
      this.login= res;
    })

    this.form = this.formBuilder.group({
      nombreAnimal:['', [Validators.required]],
      tipo:['', [Validators.required]],
      celular:['', [Validators.required]],
      especie: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      tamano: ['', [Validators.required]],
      personalidad : ['', [Validators.required]],
      energia: ['', [Validators.required]],
      esterilizado:['', [Validators.required]],
      parasitos:['', [Validators.required]],
      vacunas:['', [Validators.required]],
      region:['', [Validators.required]],
      ciudad :['', [Validators.required]],
      observacion:['', [Validators.required]],
      imagen: ['', [Validators.required]],
    })
  }

  


  crearPublicacion(event:Event){
    event.preventDefault();
    if (this.form.valid) {
      const publiacion = this.form.value;
      this.publicacionesService.insertarPublicacion(publiacion,this.image)
      this.form.reset();
      console.log('entro')
    }
    console.log(' no entro')
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

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

  ngOnInit(): void {
  }


}
