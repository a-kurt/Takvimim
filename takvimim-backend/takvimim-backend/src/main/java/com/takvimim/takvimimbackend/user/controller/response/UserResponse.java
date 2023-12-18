package com.takvimim.takvimimbackend.user.controller.response;


import com.takvimim.takvimimbackend.user.entity.User;

public record UserResponse(
        Long id,
        String fullName,
        String nickname,
        String email,
        String phoneNumber,
        String state,
        String province,
        String password
) {
    public UserResponse(User user) {
        this(user.getId(), user.getFullName(), user.getNickname(), user.getEmail(), user.getPhoneNumber(),
                user.getState(), user.getProvince(), user.getPassword());
    }
}

