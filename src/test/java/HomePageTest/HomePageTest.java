package HomePageTest;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class HomePageTest {
	@Given("^Open Browser as (.*)$")//Special character to match with 
	public void OpenBrowser(String Browser){
		System.out.println("Opening the browser " + Browser);
	}
	@Then ("^Enter URL as (.*)$")
	public void EnterURL(String URL){
		System.out.println("Entering URL" + URL);
	}
	@Then ("^Enter Username as (.*)$")
	public void EnterUsername(String Username){
		
		System.out.println("Entering Username" + Username);
	}
	@Then ("^Enter mobilenumber as (.*)$")
	public void EnterMobilenumber(String Mobilenumber){
		System.out.println("Entering Mobile number" + Mobilenumber);
	}
	@And ("^Enter Pickup Address as (.*)$")
	public void EnterPickupAddress(String Pickup){
		System.out.println("Entering Pickup Address" + Pickup);
	}
	@And ("^Enter Drop Address as (.*)$")
	public void EnterDropAddress(String Drop){
		System.out.println("Entering DropAddress" + Drop);
	}
	@Then ("^select Vehicle Type as (.*)$")
	public void EnterVehicleType(String Vehicle){
		System.out.println("Entering DropAddress" + Vehicle);
	}
	@And ("^click Booklater checkbox$")
	public void ClickBookLater(){
		System.out.println("Clicking Book Later");
	}
	@But ("^Dont click book button$")
	public void BookButton(){
		System.out.println("Leave Book Button");
	}
}