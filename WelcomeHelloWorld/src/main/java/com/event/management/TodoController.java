package com.event.management;

import java.net.URI;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.PersistentEntityResource;
import org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin("http://localhost:4200")
public class TodoController {
	
	@Autowired
	TodoRepos repos;
	
	@GetMapping("users/{username}/todos")
	public List<Todo> getAllTodo(@PathVariable String username)
	{
		List<Todo> t = repos.findAll();
		return t;
	} 
	
	@RequestMapping("fetechTodoForUpdate/{id}")
	public Todo fetechTodoForUpdate(@PathVariable Integer id) throws Exception
	{
		Optional<Todo> todo = repos.findById(id);
		
		return todo.get();
		
	}
	
	@CrossOrigin("http://localhost:4200")
	@PutMapping("updateTodo/{id}")
	public ResponseEntity<Void> updateTodo(@PathVariable Integer id, @RequestBody Todo to)
	{
		Todo created = repos.save(to);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(created.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
	@PostMapping("addTodo")
	public ResponseEntity addTodo(@RequestBody Todo todo)
	{
		Todo created = repos.save(todo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(created.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
	@DeleteMapping("deleteTodo/{id}")
	public ResponseEntity deleteTodo(@PathVariable Integer id)
	{
		Todo todo = repos.getOne(id);
		if(todo == null)
		{
			return ResponseEntity.ok("Not Found");
		}
		else
		{
			repos.deleteById(id);
			return ResponseEntity.noContent().build();
		}
		
	}
	
	@GetMapping("hello")
	public HelloMessage helloTodo()
	{
		return new HelloMessage("Hello Wonderful Peoples WyDOin (:");
		
	}

}
