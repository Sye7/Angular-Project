package com.event.management;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepos extends JpaRepository<Todo, Integer> {

}
