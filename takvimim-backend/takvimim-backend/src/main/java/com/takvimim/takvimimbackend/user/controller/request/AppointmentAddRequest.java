package com.takvimim.takvimimbackend.user.controller.request;

import com.takvimim.takvimimbackend.user.entity.Appointment;
import com.takvimim.takvimimbackend.user.entity.User;

import java.time.LocalDateTime;

public record AppointmentAddRequest(
        Long id,
        User user,
        String appointmentName,
        Long idSender,
        Long idReceiver,
        LocalDateTime startTime,
        LocalDateTime endTime,
        boolean isAccepted

) {
    public Appointment toEntity() {
        return new Appointment(id, new User(), appointmentName, idSender, idReceiver, startTime, endTime, isAccepted);
    }
}
