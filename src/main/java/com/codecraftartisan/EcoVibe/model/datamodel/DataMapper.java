package com.codecraftartisan.EcoVibe.model.datamodel;

import org.springframework.stereotype.Component;

@Component
public class DataMapper {

    public CommentDto commentToDto(Comment comment){
        CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setPostId(comment.getPostId());
        commentDto.setCommentAuthor(comment.getCommentAuthor());
        commentDto.setCommentText(comment.getCommentText());
        return commentDto;
    }

    public Comment commentDtoToEntity(CommentDto commentDto){
        Comment comment = new Comment();
        comment.setId(commentDto.getId());
        comment.setPostId(commentDto.getPostId());
        comment.setCommentAuthor(commentDto.getCommentAuthor());
        comment.setCommentText(commentDto.getCommentText());
        return comment;
    }
}
