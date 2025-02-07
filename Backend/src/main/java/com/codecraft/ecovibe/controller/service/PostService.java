package com.codecraft.ecovibe.controller.service;

import com.codecraft.ecovibe.model.dto.ModelMapper;
import com.codecraft.ecovibe.model.dto.Post;
import com.codecraft.ecovibe.model.dto.PostDto;
import com.codecraft.ecovibe.model.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class PostService {

  private final PostRepository postRepository;
  private final ModelMapper modelMapper;

  @Autowired
  public PostService(PostRepository postRepository, ModelMapper modelMapper) {
    this.postRepository = postRepository;
    this.modelMapper = modelMapper;
  }

  public PostDto createPost(PostDto postDTO) {
    Post postEntity = modelMapper.postToEntity(postDTO);
    Post savedPost = postRepository.save(postEntity);
    return modelMapper.postToDto(savedPost);
  }

  public List<PostDto> getAllPosts() {
    return postRepository.findAll().stream()
            .map(modelMapper::postToDto)
            .collect(Collectors.toList());
  }

  public PostDto getPostById(UUID uuid) {
    Post post = postRepository.findById(uuid)
            .orElseThrow(() -> new IllegalArgumentException("Post not found with ID: " + uuid));
    return modelMapper.postToDto(post);
  }

  public PostDto updatePost(UUID uuid, PostDto updatedPostDTO) {
    Post existingPost = postRepository.findById(uuid)
            .orElseThrow(() -> new IllegalArgumentException("Post not found with ID: " + uuid));

    existingPost.setContent(updatedPostDTO.getContent());
    existingPost.setDate(updatedPostDTO.getDate());
    // Assume the `author` and `commentList` remain unchanged in updates

    Post savedPost = postRepository.save(existingPost);
    return modelMapper.postToDto(savedPost);
  }

  public void deletePostById(UUID uuid) {
    postRepository.deleteById(uuid);
  }
}
