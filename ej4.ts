interface Equipo {
  nombre: string;
  tipo: string;
  estado: string;
}

class InventarioViejo {
  private items: string[] = [];

  agregarItem(descripcion: string): void {
    this.items.push(descripcion);
  }

  obtenerItems(): string[] {
    return this.items;
  }
}

interface Inventario {
  agregarEquipo(equipo: Equipo): void;
  listarEquipos(): Equipo[];
}

class AdaptadorInventario implements Inventario {
  private inventarioViejo: InventarioViejo;

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }

  agregarEquipo(equipo: Equipo): void {
    this.inventarioViejo.agregarItem(`${equipo.nombre}|${equipo.tipo}|${equipo.estado}`);
  }

  listarEquipos(): Equipo[] {
    return this.inventarioViejo.obtenerItems().map((item) => {
      const [nombre, tipo, estado] = item.split("|");
      return { nombre, tipo, estado };
    });
  }
}

const adaptador = new AdaptadorInventario(new InventarioViejo());
adaptador.agregarEquipo({ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" });

for (const equipo of adaptador.listarEquipos()) {
  console.log(`${equipo.nombre} - tipo: ${equipo.tipo} - estado: ${equipo.estado}`);
}
