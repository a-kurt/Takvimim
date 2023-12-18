package com.takvimim.takvimimbackend.user.entity;

import com.takvimim.takvimimbackend.common.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class Appointment{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private User user;
    private String appointmentName;
    private Long idSender;
    private Long idReceiver;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private boolean isAccepted;
}


