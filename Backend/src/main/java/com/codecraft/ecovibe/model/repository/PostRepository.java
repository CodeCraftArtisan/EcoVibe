package com.codecraft.ecovibe.model.repository;

import com.codecraft.ecovibe.model.dto.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PostRepository extends JpaRepository<Post, UUID> {
}
