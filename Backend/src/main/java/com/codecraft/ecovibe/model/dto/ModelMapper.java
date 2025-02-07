package com.codecraft.ecovibe.model.dto;

import com.codecraft.ecovibe.controller.security.model.User;
import com.codecraft.ecovibe.controller.security.model.UserRepository;
import com.codecraft.ecovibe.model.repository.CommentRepository;
import com.codecraft.ecovibe.model.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class ModelMapper {

  private final UserRepository userRepository;
  private final CommentRepository commentRepository;
  private final PostRepository postRepository;

  @Autowired
  public ModelMapper(UserRepository userRepository, CommentRepository commentRepository, PostRepository postRepository) {
    this.userRepository = userRepository;
    this.commentRepository = commentRepository;
    this.postRepository = postRepository;
  }

  public PostDto postToDto(Post post) {
    PostDto dto = new PostDto();
    dto.setId(post.getId());
    dto.setAuthorUsername(post.getAuthor() != null ? post.getAuthor().getUsername() : null);
    dto.setTitle(post.getTitle());
    dto.setSubTitle(post.getSubTitle());
    dto.setImageUrl(post.getImageUrl());
    dto.setContent(post.getContent());
    dto.setDate(post.getDate());
    dto.setCommentIds(post.getCommentList() != null
      ? post.getCommentList().stream()
      .map(Comment::getId)
      .collect(Collectors.toList())
      : null);
    return dto;
  }

  public Post postToEntity(PostDto dto) {
    Post post = new Post();
    post.setId(dto.getId());
    post.setContent(dto.getContent());
    post.setDate(dto.getDate());
    post.setTitle(dto.getTitle());
    post.setSubTitle(dto.getSubTitle());
    post.setImageUrl(dto.getImageUrl());
    if (dto.getAuthorUsername() != null) {
      Optional<User> user = userRepository.findByEmail(dto.getAuthorUsername());
      user.ifPresent(post::setAuthor);
    }
    if (dto.getCommentIds() != null) {
      List<Comment> comments = commentRepository.findAllById(dto.getCommentIds());
      post.setCommentList(comments);
    }
    return post;
  }

  public CommentDto commentToDto(Comment comment) {
    CommentDto dto = new CommentDto();
    dto.setId(comment.getId());
    dto.setAuthorUsername(comment.getAuthor() != null ? comment.getAuthor().getUsername() : null);
    dto.setPostId(comment.getPost() != null ? comment.getPost().getId() : null);
    dto.setContent(comment.getContent());
    dto.setDate(comment.getDate());
    return dto;
  }

  public Comment commentToEntity(CommentDto dto) {
    Comment comment = new Comment();
    comment.setId(dto.getId());
    comment.setContent(dto.getContent());
    comment.setDate(dto.getDate());
    if (dto.getAuthorUsername() != null) {
      Optional<User> user = userRepository.findByEmail(dto.getAuthorUsername());
      user.ifPresent(comment::setAuthor);
    }
    if (dto.getPostId() != null) {
      Optional<Post> post = postRepository.findById(dto.getPostId());
      post.ifPresent(comment::setPost);
    }
    return comment;
  }
}
