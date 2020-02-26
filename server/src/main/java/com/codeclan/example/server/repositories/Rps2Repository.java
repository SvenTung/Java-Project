package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.Rps2Comment;
import com.codeclan.example.server.models.RpsComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Rps2Repository extends JpaRepository<Rps2Comment, Long> {
}
