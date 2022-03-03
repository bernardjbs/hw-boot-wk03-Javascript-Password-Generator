# Random Password Generator

## The App
This is a web application that enables a user to generate random passwords based on the following criteria when the "Generate Password" button is clicked: 

- Prompt the number of characters for the password. The characters must be between 8 to 128 characters. 
- Confirm if the following character types are included in the password: 
    1. lowercase
    2. uppercase
    3. numbers
    4. special characters
- The inputs must be validated and at least one character type must be selected
- The password that matches the selected criteria is diaplayed on the page. 

## The Webpage
The webpage contains: 
- A title "Password Generator"
- A Status text
- A text area where the password is gerated
- A Generate Password button
- A Reset button

## How it works
The page starts with 
- The status "Generate a Password"
- A text area stating "Your secure password" where the generated password will be placed. The text area has a red dashed border

![Website Screen Shot](/assets/screenshots/01.jpg)

When the "Generate Password" button is pressed the user is prompted to enter the character length from 8 to 128
![Website Screen Shot](/assets/screenshots/02a.jpg)

If the input is not valid an alert message is popped and the user is prompted to enter the character length from 8 to 128
![Website Screen Shot](/assets/screenshots/03.jpg)

When the number of characters passed validation, the user is asked to confirm the following criteria for the password to be generated: 

Lowercase? 
\
![Website Screen Shot](/assets/screenshots/04.jpg)

Uppercase? 
\
![Website Screen Shot](/assets/screenshots/05.jpg)

Numeric? 
\
![Website Screen Shot](/assets/screenshots/06.jpg)

Special Characters? 
\
![Website Screen Shot](/assets/screenshots/07.jpg)
\

At least one character type has to be selected, else an alert message is popped and the user is prompted to choose at least one character type
\
![Website Screen Shot](/assets/screenshots/08.jpg)

When all the criteria is validated, the password is generated in the text area. The border is changed to green and the border is thicker. The password status changes to "Your Password"  
![Website Screen Shot](/assets/screenshots/09.jpg)

When the reset button is pressed, the page changes back to the original state. 
![Website Screen Shot](/assets/screenshots/01a.jpg)

A responsive layout is also applied when the screen is 450px or less which will fit mobile devices. 
![Website Screen Shot](/assets/screenshots/10.jpg)

## Link to deployment application
https://bernardjbs.github.io/hw-boot-wk03-Javascript-Password-Generator/