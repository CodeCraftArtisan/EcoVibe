package com.codecraft.ecovibe.model.dto;

import com.codecraft.ecovibe.controller.security.model.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "comment")
public class Comment {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id;
  private User author;
  @Column(columnDefinition="TEXT")
  private String content;
  private String date;
  @ManyToOne
  private Post post;

}
