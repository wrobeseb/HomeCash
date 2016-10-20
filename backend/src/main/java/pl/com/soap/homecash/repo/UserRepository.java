package pl.com.soap.homecash.repo;

import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import pl.com.soap.homecash.model.User;

@EnableScan
public interface UserRepository extends CrudRepository<User, String> { }