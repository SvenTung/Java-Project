package com.codeclan.example.server.components;

import com.apple.eawt.Application;
import com.codeclan.example.server.models.Comment;
import com.codeclan.example.server.respoitories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner{

    @Autowired
    CommentRepository commentRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){

        Comment comment = new Comment (
                "Yer da", "Hullo there!"
        );
        commentRepository.save(comment);
    }

}
