package com.codeclan.example.server.components;

import com.codeclan.example.server.models.Rps2Comment;
import com.codeclan.example.server.models.RpsComment;
import com.codeclan.example.server.repositories.Rps2Repository;
import com.codeclan.example.server.repositories.RpsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner{

    @Autowired
    RpsRepository rpsRepository;

    @Autowired
    Rps2Repository rps2Repository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){

        RpsComment rpsComment = new RpsComment(
                "Yer da", "Ah sell the avon"
        );
        rpsRepository.save(rpsComment);

        RpsComment rpsComment2 = new RpsComment(
                "shrek", "get outta ma swamp!"
        );
        rpsRepository.save(rpsComment2);
        RpsComment rpsComment3 = new RpsComment(
                "yer maw", "yer da sells avon"
        );
        rpsRepository.save(rpsComment3);

        Rps2Comment rps2Comment = new Rps2Comment(
                "Comment Daddy", "Comments are king"
        );
        rps2Repository.save(rps2Comment);

    }

}
