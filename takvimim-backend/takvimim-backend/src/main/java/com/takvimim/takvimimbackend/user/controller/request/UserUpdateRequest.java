package com.takvimim.takvimimbackend.user.controller.request;

import java.util.ArrayList;

public record UserUpdateRequest(
        //@NotBlank
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
}

