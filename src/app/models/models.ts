export interface HotelModel {
	id: string;
	activo: string;
	nombre: string;
	ciudad: string;
	direccion: string;
	estrella: string;
	portadaUrl: string;
	habitaciones: HabitacionModel[];
}

export interface HabitacionModel {	
	id: string;
	activo: boolean;
	costoBase: string;
	impuesto: string;
	tipoHabitacion: string;
	piso: string;
	nuemeroHabitacion: string;
	cantidadPersona: string;
}

export interface FiltroHotelModel {
	ciudad: string;
	cantidadPersona: string;
	fechaEntrada: string;
	fechaSalida: string;
}

