package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(maxAge = 3600, origins = "*", allowedHeaders = "*")
@Controller
@RequestMapping
public class MainController {
    @Autowired
    private PatientRepository patientRepository;

    @PostMapping(path="/add")
    public @ResponseBody Patient addNewPatient (@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Patient> getAllUsers() {

        return patientRepository.findAll();
    }
}

