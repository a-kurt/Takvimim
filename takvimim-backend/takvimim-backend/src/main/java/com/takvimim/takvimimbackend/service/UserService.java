package com.takvimim.takvimimbackend.service;


import com.takvimim.takvimimbackend.common.response.MessageResponse;
import com.takvimim.takvimimbackend.common.response.MessageType;
import com.takvimim.takvimimbackend.user.controller.request.UserUpdateRequest;
import com.takvimim.takvimimbackend.user.entity.Appointment;
import com.takvimim.takvimimbackend.user.entity.User;
import com.takvimim.takvimimbackend.user.repository.AppointmentRepository;
import com.takvimim.takvimimbackend.user.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final AppointmentRepository appointmentRepository;
    public MessageResponse addUser(User user) {
        userRepository.save(user);
        return new MessageResponse("User has been added successfully.", MessageType.SUCCESS);
    }
    public MessageResponse addAppointment(Appointment appointment, Long userId) {
        User user = getUserById(userId);
        appointment.setUser(user);
        appointmentRepository.save(appointment);
        return new MessageResponse("Appointment has been added successfully.", MessageType.SUCCESS);
    }

    public User getUserById(Long id) {
//        return studentRepository.findById(id)
//                .orElseThrow(() -> new EntityNotFoundException());
        return userRepository.findById(id)
                .orElseThrow(EntityNotFoundException::new);
    }

    public String getFullNameById(Long id) {
        return userRepository.findFullNameById(id);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public List<Appointment> getAppointmentsByUserId(long id) {
        User user = userRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        return user != null ? user.getAppointments() : null;
    }

    public MessageResponse deleteUser(Long id) {
        if(!userRepository.existsById(id)) {
            return new MessageResponse("Cannot be deleted, User doesnt exist", MessageType.ERROR);
        }
        userRepository.deleteById(id);
        return new MessageResponse("User deleted successfully", MessageType.SUCCESS);
    }

    @Transactional
    public MessageResponse updateUser(Long id, UserUpdateRequest userUpdateRequest) {
        User user = userRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        user.update(userUpdateRequest);
        userRepository.save(user);
        return new MessageResponse("The User has been updated", MessageType.SUCCESS);
    }
}

