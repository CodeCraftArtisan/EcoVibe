package com.codecraftartisan.EcoVibe.model.repository;

import com.codecraftartisan.EcoVibe.model.datamodel.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CommentRepository extends JpaRepository<Comment, UUID> {
    List<Comment> findByPostId(String postId);
}
