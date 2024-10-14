package com.codecraftartisan.EcoVibe.controller.api;

import com.codecraftartisan.EcoVibe.controller.service.CommentService;
import com.codecraftartisan.EcoVibe.model.datamodel.CommentDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/comment")
public class CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    // Test endpoint
    @GetMapping("/test")
    public ResponseEntity<String> test(){
        return ResponseEntity.ok("Test good");
    }

    // Create a new comment
    @PostMapping
    public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto commentDto) {
        CommentDto savedComment = commentService.saveComment(commentDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedComment);
    }

    // Get a comment by ID
    @GetMapping("/{id}")
    public ResponseEntity<CommentDto> getCommentById(@PathVariable UUID id) {
        CommentDto commentDto = commentService.getCommentById(id);
        return commentDto != null
                ? ResponseEntity.ok(commentDto)
                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    // Get comments by Post ID
    @GetMapping("/post/{postId}")
    public ResponseEntity<List<CommentDto>> getCommentsByPostId(@PathVariable String postId) {
        List<CommentDto> comments = commentService.getCommentsByPostId(postId);
        return comments.isEmpty()
                ? ResponseEntity.status(HttpStatus.NOT_FOUND).build()
                : ResponseEntity.ok(comments);
    }

    // Update a comment, not needed for the moment
//    @PutMapping("/{id}")
//    public ResponseEntity<CommentDto> updateComment(@PathVariable UUID id, @RequestBody CommentDto commentDto) {
//        CommentDto updatedComment = commentService.updateComment(id, commentDto);
//        return updatedComment != null
//                ? ResponseEntity.ok(updatedComment)
//                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//    }

    // Delete a comment
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCommentById(@PathVariable UUID id) {
        boolean deleted = commentService.deleteCommentById(id);
        return deleted
                ? ResponseEntity.noContent().build()
                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
