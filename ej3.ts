interface Observador {
  actualizar(nombre: string, estado: string): void;
}

class Soporte implements Observador {
  actualizar(nombre: string, estado: string): void {
    console.log(`Soporte: el equipo ${nombre} cambió de estado a "${estado}"`);
  }
}

class RegistroLog implements Observador {
  actualizar(nombre: string, estado: string): void {
    console.log(`Log: se registró el cambio de ${nombre} a "${estado}"`);
  }
}

class Equipo {
  private observadores: Observador[] = [];
  private nombre: string;
  private estado: string;

  constructor(nombre: string, estado: string) {
    this.nombre = nombre;
    this.estado = estado;
  }

  agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    for (const observador of this.observadores) {
      observador.actualizar(this.nombre, this.estado);
    }
  }
}

const equipo = new Equipo("Notebook HP", "disponible");
equipo.agregarObservador(new Soporte());
equipo.agregarObservador(new RegistroLog());
equipo.cambiarEstado("en reparación");
