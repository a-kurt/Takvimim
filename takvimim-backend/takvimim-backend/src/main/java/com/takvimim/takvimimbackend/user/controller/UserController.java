package com.takvimim.takvimimbackend.user.controller;

import com.takvimim.takvimimbackend.common.response.MessageResponse;
import com.takvimim.takvimimbackend.service.AuthenticationService;
import com.takvimim.takvimimbackend.service.UserService;
import com.takvimim.takvimimbackend.user.controller.request.AppointmentAddRequest;
import com.takvimim.takvimimbackend.user.controller.request.UserAddRequest;
import com.takvimim.takvimimbackend.user.controller.request.UserUpdateRequest;
import com.takvimim.takvimimbackend.user.controller.response.AppointmentResponse;
import com.takvimim.takvimimbackend.user.controller.response.UserResponse;
import com.takvimim.takvimimbackend.user.entity.Appointment;
import com.takvimim.takvimimbackend.user.entity.User;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Validated
public class UserController {

    private final UserService userService;
    private final AuthenticationService service;
/*  USE REGISTER TO ADD USER
    @PostMapping("/user")
    public MessageResponse addUser(@RequestBody UserAddRequest userAddRequest) {
        return userService.addUser(userAddRequest.toEntity());
    }
 */
    @PostMapping("/appointment")
    public MessageResponse addAppointment(@RequestBody AppointmentAddRequest appointmentAddRequest) {
        if(!Objects.equals(appointmentAddRequest.idSender(), appointmentAddRequest.idReceiver())) {
            userService.addAppointment(appointmentAddRequest.toEntity(), appointmentAddRequest.idReceiver());
        }
        return userService.addAppointment(appointmentAddRequest.toEntity(), appointmentAddRequest.idSender());
    }

    @GetMapping("/test/{id}")
    public void test(@PathVariable Long id) {
        System.out.print("\nTest\n");
        User user = userService.getUserById(id);
        List<Appointment> test = user.getAppointments();
        for (Appointment appointment : test) {
            System.out.println(appointment.getAppointmentName());
        }
    }

    @GetMapping("/users/{id}")
      public UserResponse getUserById(@NotNull @PathVariable Long id){
        User user = userService.getUserById(id);
        return new UserResponse(user);
    }

    @GetMapping("/appointments/{id}")
    //  public UserResponse getStudentById(@NotNull @PathVariable Long id) {
    public List<AppointmentResponse> getAppointmentsByUserId(@PathVariable Long id){
        List<Appointment> appointments = userService.getAppointmentsByUserId(id);
        return appointments.stream().map(AppointmentResponse::new).toList();
    }

    // get fullname using userid
    @GetMapping("/users/{id}/fullname")
    public String getUsernameByUserId(@NotNull @PathVariable Long id){
        return userService.getFullNameById(id);
    }

    @GetMapping("/users")
    public List<UserResponse> getUsers() {
        List<User> users = userService.getUsers();
        return users.stream()
                .map(UserResponse::new)
                .toList();
        // StudentResponse::new aynı şey: student -> new StudentResponse(student)
    }

    @DeleteMapping("/users/{id}")
    public MessageResponse deleteUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }



    @PutMapping("/users/{id}")
    public MessageResponse updateUser(@PathVariable Long id,
                                         @RequestBody UserUpdateRequest userUpdateRequest) {
        return userService.updateUser(id, userUpdateRequest);
    }


}

