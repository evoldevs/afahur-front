import { Component } from '@angular/core';
import { EquipoService } from '../equipo.service';  // Asegúrate de que la ruta sea correcta
import { EquiposDto } from '../models/equipos';  // Importa la interfaz que definiste
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [EquipoService],   // Indicamos que este es un componente standalone
  imports: [CommonModule],  // Importamos HttpClientModule para las peticiones HTTP
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  equipos: EquiposDto[] = [];  // Propiedad donde almacenaremos los equipos

  constructor(private equipoService: EquipoService) {}

  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    this.equipoService.obtenerEquipos().subscribe(
      (data: EquiposDto[]) => {
        this.equipos = data;  // Almacenamos los equipos obtenidos
      },
      (error) => {
        console.error('Error al obtener los equipos:', error);  // Mostramos el error si ocurre
      }
    );
  }
}
