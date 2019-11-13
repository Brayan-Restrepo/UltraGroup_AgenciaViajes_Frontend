export interface HotelModel {
	id: string;
	activo: boolean;
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

export interface ReservaModel{
        id: string;
        habitacionId: string;
        fechaEntrada: string;
        fechaSalida: string;
        huespedes: HuespedesModel[];
        contactoEmergencia: ContactoEmergenciaModel;
}

export interface HuespedesModel{
	id: string;
	nombres: string;
	apellidos: string;
	fechaNacimiento: string;
	genero: string;
	tipoDocumento: string;
	numeroDocumento: string;
	email: string;
	telefono: string;
}

export interface ContactoEmergenciaModel {
	nombreCompleto: string;
	telefono: string;
}

export interface UserModel {
	name: string;
	login: string;
	password: string;
}