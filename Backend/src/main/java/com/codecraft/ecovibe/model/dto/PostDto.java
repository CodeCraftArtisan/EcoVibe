package com.codecraft.ecovibe.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Setter
@Getter
public class PostDto {

  private UUID id;
  private String authorUsername;
  private String title;
  private String subTitle;
  private String imageUrl;
  private String content;
  private String date;
  private List<UUID> commentIds;
}
