# STAR
README

## Link to demo:
https://orbital-b3d35.web.app/
## Repo Link:
https://github.com/bigcrushes/STAR

## Motivation 
COVID-19 has greatly impacted our daily lives, such that some aspects of our lives have been changed forever. Out of the many impacts COVID-19 has had on our lives, one glaring impact that COVID-19 has had on us is the general decline in mental health. It has left many feeling depressed, anxious and lonely due to the COVID-19 measures which have left many cooped up at home. Hence, with the measures finally easing, we would like to create something which can help Singaporeans to leave their houses and socialise with their friends while exploring places in Singapore. 

## Aim 
We hope to encourage Singaporeans to leave their house and engage in more physical activity while exploring Singapore and having fun amidst this pandemic.

## Features 
The Web-based application will provide a list of routes around Singapore through riddles which they can solve with friends. Finishing routes will give users achievements, giving them a sense of satisfaction. These achievements also help users identify routes that their friends have not done, allowing them to reach out to complete these routes together. We will provide a myriad of routes, consisting not only of long and short routes but also routes in different areas of Singapore (North, South, East West) to provide convenience.

Users would be able to do the following:
- Sign up/Login
- Choose from a variety of routes all over Singapore
- Gain achievements through completing routes
- View their own profile pages showing their achievements and routes completed
- Add friends to view each others pages and achievements

## Tech Stack
- JavaScript
- HTML
- CSS
- React
- Firebase

Version Control
GitHub

## System Design
Our web app requires users to login/sign up to be able to access the different routes. There will be variety of routes for the users to try. Routes can span across different regions in Singapore or concentrate in a certain area of Singapore, and can also vary in number of places for each route. Hints will be given for each location so that users able to try and guess their next location, adding to the fun of exploring new places in Singapore. 

### Login
Users can log in using either their gmail account or their email and password provided it has been authenticated.

### Sign In page

### Sign Up
Users are also able to sign up for an account with their email and password.

### Missions
The missions page will act as the home page once the user is signed in. There are instructions for users on how to use our web app at the top of our missions page. This page contains the variety of routes that we have created for users to explore. Beside each route also contains the difficulty level and the number of users that have completed the route. Users area able to mark a routes as completed by ticking the checkbox that is next to the number of users that have completed the route. 

### Appbar
Our appbar allows user to navigate to their profile or logout.

### Hints 
Our routes contain hints for the users to find the answer to their next location.

### Profile
The profile page is accessible through the appbar at the top right corner and shows the following:
First name
Last name
Profile picture
Date since account was created
Routes completed
As earlier stated, users marks a completed route by ticking the check box on the missions page. We have made it such that profile page of users only display their completed routes.


