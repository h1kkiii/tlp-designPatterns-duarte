interface Equipo {
  nombre: string;
  tipo: string;
  estado: string;
}

class Inventario {
  private static instancia: Inventario;
  private equipos: Equipo[] = [];

  private constructor() {}

  static obtenerInstancia(): Inventario {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }

  agregarEquipo(equipo: Equipo): void {
    this.equipos.push(equipo);
  }

  listarEquipos(): Equipo[] {
    return this.equipos;
  }
}

const inventario1 = Inventario.obtenerInstancia();
inventario1.agregarEquipo({ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" });

for (const equipo of inventario1.listarEquipos()) {
  console.log(`${equipo.nombre} - ${equipo.tipo} - ${equipo.estado}`);
}

const inventario2 = Inventario.obtenerInstancia();
console.log(`¿Es la misma instancia? ${inventario1 === inventario2}`);
