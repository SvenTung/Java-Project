package com.codeclan.example.server.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table
public class Comment implements Serializable {

    @Column
    private String author;

    @Column
    private String body;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Comment(String author, String body){
        this.author = author;
        this.body = body;
    }

    public Comment() {

    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
