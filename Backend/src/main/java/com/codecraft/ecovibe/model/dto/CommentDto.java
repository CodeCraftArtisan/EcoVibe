package com.codecraft.ecovibe.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Setter
@Getter
public class CommentDto {

  private UUID id;
  private String authorUsername;
  private UUID postId;
  private String content;
  private String date;
}
