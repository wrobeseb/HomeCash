package pl.com.soap.homecash.repo;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.junit4.SpringRunner;

import pl.com.soap.homecash.model.User;

@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT)
@RunWith(SpringRunner.class)
public class UserRepositoryIntegrationTest {
    @Autowired
    private UserRepository userRepository;

    @After
    public void tearDown() {
        userRepository.deleteAll();
    }

    @Test
    public void findByUserName() {
        final User user = new User();
        user.setUserName("userName");
        user.setFirstName("firstName");
        user.setFirstName("lastName");
        userRepository.save(user);

        final User actualUser = userRepository.findOne(user.getUserName());
        assertEquals(user, actualUser);
    }
}