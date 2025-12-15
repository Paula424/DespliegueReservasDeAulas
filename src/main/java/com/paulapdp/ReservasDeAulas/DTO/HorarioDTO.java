package com.paulapdp.ReservasDeAulas.DTO;


import com.paulapdp.ReservasDeAulas.Entities.Horario;

import java.time.LocalTime;

/**
 * ============================================
 * DTOs DE  HORARIO
 * ============================================
 */
// ==========  HORARIO DTO (Response) ==========
/**
 * DTO de respuesta con datos de un  HORARIO
 *
 * Se devuelve en las consultas GET.
 * Incluye toda la información del tramo sin las reservas.
 *
 * Ejemplo JSON:
 * {
 *   "id": 3,
 *   "diaSemana": "LUNES",
 *   "sesionDia": 3,
 *   "horaInicio": "10:30:00",
 *   "horaFin": "11:25:00",
 *   "tipo": "LECTIVA"
 * }
 */
public record HorarioDTO(
        Long id,
        Horario.DiaSemana diaSemana,
        Integer sesionDia,
        LocalTime horaInicio,
        LocalTime horaFin,
        Horario.TipoTramo tipo
) {}

