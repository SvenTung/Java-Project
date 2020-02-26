package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.Rps2Comment;
import com.codeclan.example.server.models.RpsComment;
import com.codeclan.example.server.repositories.Rps2Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class rps2Controller {

    @Autowired
    Rps2Repository rps2Repository;

    @GetMapping(value="/rps2")
    public ResponseEntity<List<Rps2Comment>> getAllComments(){
        return new ResponseEntity<>(rps2Repository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value="/rps2")
    public ResponseEntity<Rps2Comment> createComment(@RequestBody Rps2Comment rps2Comment){
        rps2Repository.save(rps2Comment);
        return new ResponseEntity<>(rps2Comment, HttpStatus.CREATED);
    }

}