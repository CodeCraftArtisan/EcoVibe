package com.codecraft.ecovibe.controller.service;

import com.codecraft.ecovibe.model.dto.Comment;
import com.codecraft.ecovibe.model.dto.CommentDto;
import com.codecraft.ecovibe.model.dto.ModelMapper;
import com.codecraft.ecovibe.model.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public CommentService(CommentRepository commentRepository, ModelMapper modelMapper) {
        this.commentRepository = commentRepository;
        this.modelMapper = modelMapper;
    }

    public CommentDto createComment(CommentDto commentDto) {
        Comment commentEntity = modelMapper.commentToEntity(commentDto);
        Comment savedComment = commentRepository.save(commentEntity);
        return modelMapper.commentToDto(savedComment);
    }

    public List<CommentDto> getAllComments() {
        return commentRepository.findAll().stream()
                .map(modelMapper::commentToDto)
                .collect(Collectors.toList());
    }

    public CommentDto getCommentById(UUID uuid) {
        Comment comment = commentRepository.findById(uuid)
                .orElseThrow(() -> new IllegalArgumentException("Comment not found with ID: " + uuid));
        return modelMapper.commentToDto(comment);
    }

    public List<CommentDto> getCommentsByPostId(UUID postId) {
        return commentRepository.findByPostId(postId).stream()
                .map(modelMapper::commentToDto)
                .collect(Collectors.toList());
    }

    public CommentDto updateComment(UUID uuid, CommentDto updatedCommentDto) {
        Comment existingComment = commentRepository.findById(uuid)
                .orElseThrow(() -> new IllegalArgumentException("Comment not found with ID: " + uuid));

        existingComment.setContent(updatedCommentDto.getContent());
        existingComment.setDate(updatedCommentDto.getDate());
        // Assume the `author` and `post` remain unchanged in updates

        Comment savedComment = commentRepository.save(existingComment);
        return modelMapper.commentToDto(savedComment);
    }

    public void deleteCommentById(UUID uuid) {
        commentRepository.deleteById(uuid);
    }
}
