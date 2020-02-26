package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.RpsComment;
import com.codeclan.example.server.repositories.RpsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class rpsController {

    @Autowired
    RpsRepository rpsRepository;

    @GetMapping(value="/rps")
        public ResponseEntity<List<RpsComment>> getAllComments(){
                   return new ResponseEntity<>(rpsRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value="/rps")
    public ResponseEntity<RpsComment> createComment(@RequestBody RpsComment rpsComment){
        rpsRepository.save(rpsComment);
        return new ResponseEntity<>(rpsComment, HttpStatus.CREATED);
    }

}
