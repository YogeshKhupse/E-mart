package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // For registration
    public User register(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setLoyalty(false);         
        user.setLoyaltyPoints(10); 
        return userRepository.save(user);
    }

    // For login and token generation
    public String loginAndGenerateToken(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return jwtUtil.generateToken(user.getUsername());
        }
        return null;
    }

    // Optional: fetch user info by username
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
