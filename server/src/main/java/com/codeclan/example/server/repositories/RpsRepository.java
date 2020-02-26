package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.RpsComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RpsRepository extends JpaRepository<RpsComment, Long>{

}