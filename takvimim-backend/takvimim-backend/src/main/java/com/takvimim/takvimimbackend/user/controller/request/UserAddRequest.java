package com.takvimim.takvimimbackend.user.controller.request;

import com.takvimim.takvimimbackend.user.Role;
import com.takvimim.takvimimbackend.user.entity.User;

import java.util.ArrayList;

public record UserAddRequest(
        Long id,
        String fullName,
        //@NotBlank
        String nickname,
        //@NotBlank
        //@Email
        String email,
        //@NotBlank
        //@Size(min = 7, max = 7)
        String phoneNumber,
        String state,
        String province,
        String password

) {
    public User toEntity() {
        return new User(id, fullName, nickname, email, phoneNumber, state, province, password, Role.USER, new ArrayList<>());
    }
}
