package com.codecraftartisan.EcoVibe.controller.service;

import com.codecraftartisan.EcoVibe.model.datamodel.Comment;
import com.codecraftartisan.EcoVibe.model.datamodel.CommentDto;
import com.codecraftartisan.EcoVibe.model.datamodel.DataMapper;
import com.codecraftartisan.EcoVibe.model.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CommentService {

    private CommentRepository commentRepository;
    private DataMapper dataMapper;

    @Autowired
    public CommentService(CommentRepository commentRepository, DataMapper dataMapper) {
        this.commentRepository = commentRepository;
        this.dataMapper = dataMapper;
    }

    public CommentDto saveComment(CommentDto commentDto){
        Comment comment = dataMapper.commentDtoToEntity(commentDto);
        Comment savedComment = commentRepository.save(comment);
        return dataMapper.commentToDto(savedComment);
    }

    public CommentDto getCommentById(UUID id) {
        Optional<Comment> comment = commentRepository.findById(id);
        return comment.map(dataMapper::commentToDto).orElse(null);
    }

    public List<CommentDto> getCommentsByPostId(String postId) {
        List<Comment> comments = commentRepository.findByPostId(postId);
        return comments.stream()
                .map(dataMapper::commentToDto)
                .collect(Collectors.toList());
    }

    // Update operation, not needed at the moment
//    public CommentDto updateComment(UUID id, CommentDto commentDto) {
//        Optional<Comment> existingCommentOpt = commentRepository.findById(id);
//
//        if (existingCommentOpt.isPresent()) {
//            Comment existingComment = existingCommentOpt.get();
//
//            existingComment.setPostId(commentDto.getPostId());
//            existingComment.setCommentAuthor(commentDto.getCommentAuthor());
//            existingComment.setCommentText(commentDto.getCommentText());
//
//            Comment updatedComment = commentRepository.save(existingComment);
//            return dataMapper.commentToDto(updatedComment);
//        } else {
//            return null;  // Or maybe throw an exception
//        }
//    }

    // D
    public boolean deleteCommentById(UUID id) {
        if (commentRepository.existsById(id)) {
            commentRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

}
