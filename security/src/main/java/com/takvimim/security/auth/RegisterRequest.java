package com.takvimim.security.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String fullName;
    private String username;
    private String email;
    private String phoneNumber;
    private String state;
    private String province;
    private String password;
}
