package com.codecraftartisan.EcoVibe.model.datamodel;

import lombok.Builder;

import java.util.UUID;

public class CommentDto {

    public CommentDto() {
    }

    private UUID id;
    private String postId;
    private String commentAuthor;
    private String commentText;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public String getCommentAuthor() {
        return commentAuthor;
    }

    public void setCommentAuthor(String commentAuthor) {
        this.commentAuthor = commentAuthor;
    }

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }
}
