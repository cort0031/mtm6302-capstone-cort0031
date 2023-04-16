# mtm6302-capstone-cort0031
#### Martin Cortes
#### 041 045 266
## Pokedex
Using the PokeApi, you will design and develop a Pokedex web application that will display a gallery of pokemon with images. Users should be able to choose to load more pokemon, view details about a specific pokemon, and mark pokemon as "caught".

## Mockup Design
The mockup added to this repository includes the sprites of the first 150 pokemon, including number and types. After clicking the pokemon, it will show the pokemon in detail and data that the PokeAPI has in the database such as abilities, moves, stats and types.

## Prototype
For the third part of the assignment, an html, a css and a javascript file were created. For the design, I used the mockup created in the previous assignment using the bootstrap framework. The protoype was design using the "mobile first" principle. After the screen for mobile was styled, a second one for desktop was created. To have all the pokemon portrayed in the pokedex, an image folder was loaded with pokemon sprites. In the javascript file scrit.js , a dynamic list included with information about each pokemon, including stats, name, number, sprites and types.

## Functional Web Application
For the final part of the assignment, a dynamic list was required, but this time the information was retrieved from an API through an asynchronous request, for this we used the javascript file dexinfo.js. The limit in the URL was set to 150 to show the original pokemon from the first game. The design kept following the structure applied in the mockup. For the Persistent Data section of the requirements, a catch toggle switch was created in the pokemon page, by click it will mark the pokemon as catched and save its status on the local storage using the boolean from the status of the switch. Whenever the user leaves the pokemon catch or released, if the user reloads the page, the saved status of the pokemon will be kept, this section will be applied through the use of a different javascript file called localstorage.js. 