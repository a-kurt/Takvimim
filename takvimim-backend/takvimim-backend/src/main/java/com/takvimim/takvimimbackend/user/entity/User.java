package com.takvimim.takvimimbackend.user.entity;

import com.takvimim.takvimimbackend.common.BaseEntity;
import com.takvimim.takvimimbackend.user.Role;
import com.takvimim.takvimimbackend.user.controller.request.UserUpdateRequest;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
@Builder
@Data
@Entity
@NoArgsConstructor
@Getter
@AllArgsConstructor
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String nickname;
    private String email;
    private String phoneNumber;
    private String state;
    private String province;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    @OneToMany(mappedBy = "user")
    private List<Appointment> appointments = new ArrayList<>();

/*
    public Student(String name, String surname, String email, String tcKimlikNo, String studentNumber) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.tcKimlikNo = tcKimlikNo;
        this.studentNumber = studentNumber;
    }

    public void updateStudentInformationForDepartmentChange(String email, String studentNumber) {
        this.email = email;
        this.studentNumber = studentNumber;
    }
*/
    public void update(UserUpdateRequest userUpdateRequest) {
        this.fullName = userUpdateRequest.fullName();
        this.nickname = userUpdateRequest.nickname();
        this.email = userUpdateRequest.email();
        this.phoneNumber = userUpdateRequest.phoneNumber();
        this.state = userUpdateRequest.state();
        this.province = userUpdateRequest.province();
        this.password = userUpdateRequest.password();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }
    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}

