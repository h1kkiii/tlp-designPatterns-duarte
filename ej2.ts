abstract class Equipo {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  abstract detalles(): string;
}

class Notebook extends Equipo {
  private ram: string;
  private procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    super(nombre);
    this.ram = ram;
    this.procesador = procesador;
  }

  detalles(): string {
    return `Notebook - ${this.nombre} - RAM: ${this.ram} - Procesador: ${this.procesador}`;
  }
}

class Desktop extends Equipo {
  private ram: string;
  private procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    super(nombre);
    this.ram = ram;
    this.procesador = procesador;
  }

  detalles(): string {
    return `Desktop - ${this.nombre} - RAM: ${this.ram} - Procesador: ${this.procesador}`;
  }
}

class Servidor extends Equipo {
  private ram: string;
  private procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    super(nombre);
    this.ram = ram;
    this.procesador = procesador;
  }

  detalles(): string {
    return `Servidor - ${this.nombre} - RAM: ${this.ram} - Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {
  crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo {
    switch (tipo) {
      case "Notebook":
        return new Notebook(nombre, ram, procesador);
      case "Desktop":
        return new Desktop(nombre, ram, procesador);
      case "Servidor":
        return new Servidor(nombre, ram, procesador);
      default:
        throw new Error(`Tipo de equipo desconocido: ${tipo}`);
    }
  }
}

const fabrica = new EquipoFactory();
const equipos: Equipo[] = [
  fabrica.crearEquipo("Notebook", "Notebook HP", "16GB", "Intel i5"),
  fabrica.crearEquipo("Desktop", "PC Oficina", "8GB", "AMD Ryzen 5"),
  fabrica.crearEquipo("Servidor", "Servidor Dell", "64GB", "Intel Xeon"),
];

for (const equipo of equipos) {
  console.log(equipo.detalles());
}
