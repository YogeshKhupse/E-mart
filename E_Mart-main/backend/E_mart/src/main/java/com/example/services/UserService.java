package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.dtos.RegisterRequest;
import com.example.model.User;
import com.example.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void register(RegisterRequest request) {
        if (userRepo.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEmail(request.getEmail());
        user.setPhoneNo(request.getPhoneNo());
        user.setLoyalty(request.isLoyalty());
        user.setLoyaltyPoints(0);
        userRepo.save(user);
    }
}
