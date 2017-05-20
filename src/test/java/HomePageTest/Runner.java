package HomePageTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(tags="@HomeTest", format={"pretty","html:reports"})
public class Runner {

}
