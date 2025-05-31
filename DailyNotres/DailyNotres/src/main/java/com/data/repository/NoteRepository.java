package com.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.data.entity.Notes;


@Repository
public interface NoteRepository extends JpaRepository<Notes, Integer>{

	List<Notes> findByUserId(long userId);
}
