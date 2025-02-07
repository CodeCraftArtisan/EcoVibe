package com.codecraft.ecovibe.model.dto;

import com.codecraft.ecovibe.controller.security.model.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "post")
public class Post {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id;
  private User author;
  private String title;
  private String subTitle;
  private String imageUrl;
  @Column(columnDefinition = "TEXT")
  private String content;
  private String date;
  @OneToMany
  private List<Comment>commentList;

}