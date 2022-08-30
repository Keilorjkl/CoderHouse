class Usuario {
  constructor(nombre , apellido , libros = [], mascota = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascota = mascota;

  }
  
  getFullName (){
    console.log(`Hola Soy ${this.nombre} ${this.apellido} `);
  }

  addPets (mascota) {
    this.mascota.push(mascota);
    
  }

  countMascotas() {
    return this.mascota.length;
     
  }

  addBook(titulo, autor) {
    let libronuevo = {
      titulo,
      autor,
    };
    this.libros.push(libronuevo);
  }
  
  getbookNames() {
    let librosDelUsuario = "";
    for (const libro of this.libros) {
      librosDelUsuario = `${librosDelUsuario}, ${libro.titulo}` ;
    }
    console.log(librosDelUsuario);
  }

}

const usuario1 = new Usuario(
  "Santiago",
  "Ludueña",
  [
    {
      titulo: "Festival de la Blasfemia",
      autor: "By Dross",
    },
    {
      titulo:"Percy Jackson , El Último Héroe del Olimpo",
      autor:"Rick Riordan"
    },  
  ],
  ("Bartolo" , "Suku" ,"Artemisa")
);


console.log(usuario1.getFullName());
console.log(usuario1.mascota);
console.log(usuario1.countMascotas());
console.log(usuario1.libros);
console.log(usuario1.getbookNames());
