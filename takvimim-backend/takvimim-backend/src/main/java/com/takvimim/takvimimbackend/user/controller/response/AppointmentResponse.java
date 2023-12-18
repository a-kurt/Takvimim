package com.takvimim.takvimimbackend.user.controller.response;

import com.takvimim.takvimimbackend.user.entity.Appointment;
import com.takvimim.takvimimbackend.user.entity.User;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import java.time.LocalDateTime;

public record AppointmentResponse(
        Long id,
        String appointmentName,
        Long idSender,
        Long idReceiver,
        LocalDateTime startTime,
        LocalDateTime endTime,
        boolean isAccepted
) {
    public AppointmentResponse(Appointment appointment) {
        this(appointment.getId(), appointment.getAppointmentName(), appointment.getIdSender(), appointment.getIdReceiver(), appointment.getStartTime(),
                appointment.getEndTime(), appointment.isAccepted());
    }
}
