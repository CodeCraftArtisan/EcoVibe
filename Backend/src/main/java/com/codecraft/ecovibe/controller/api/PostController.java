package com.codecraft.ecovibe.controller.api;

import com.codecraft.ecovibe.controller.service.PostService;
import com.codecraft.ecovibe.model.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/posts")
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    // Create a new post
    @PostMapping
    public ResponseEntity<PostDto> createPost(@RequestBody PostDto postDTO) {
        PostDto createdPost = postService.createPost(postDTO);
        return ResponseEntity.status(201).body(createdPost);
    }

    // Get all posts
    @GetMapping
    public ResponseEntity<List<PostDto>> getAllPosts() {
        List<PostDto> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }

    // Get a post by ID
    @GetMapping("/{id}")
    public ResponseEntity<PostDto> getPostById(@PathVariable UUID id) {
        PostDto post = postService.getPostById(id);
        return ResponseEntity.ok(post);
    }

    // Update a post by ID
    @PutMapping("/{id}")
    public ResponseEntity<PostDto> updatePost(
            @PathVariable UUID id,
            @RequestBody PostDto updatedPostDTO) {
        PostDto updatedPost = postService.updatePost(id, updatedPostDTO);
        return ResponseEntity.ok(updatedPost);
    }

    // Delete a post by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable UUID id) {
        postService.deletePostById(id);
        return ResponseEntity.noContent().build();
    }
}
