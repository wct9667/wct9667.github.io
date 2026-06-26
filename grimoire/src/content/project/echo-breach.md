---
title: 'Echo Breach'
description: 'A Desperate Fight for Survival in the Depths of Space.'
updatedDate: 'March 15 2026'
startDate: 'September 1 2024'
pubDate: 'December 13, 2024'
currentStatus: 'Prototype (2024)'
teamSize: '5'
company: 'Singularity Studios'
role: 'System & UI Programmer'
heroImage: '../../assets/EchoBreach.png'
skills: ["Unity", "C#", "Unity Shaderlab"]
links: [{name: "Play the Game", url: "https://wct9667.itch.io/echo-breach"}]
---
# OVERVIEW
Echo Breach is a 3d horror game in Unity. 
2 players find themselves on a spaceship, destined to crash into the planet below. 
They must work together to escape and survive.
Each character has a different set of abilities; brain vs brawn.
The brain gets a flashlight, and can unlock doors. 
The brawn can smash things and push heavy objects.

#  CONTRIBUTIONS
## FLASHLIGHT
The flashlight was an important piece of the gameplay. 
The brain uses it to illuminate the world, revealing hidden secrets. 
It has a limited battery, yet recharges over time when not in use.

## TRANSPARENCY SYSTEM
By far the most complex system I implemented.
Players had a locked perspective, so getting in spots that were hard to see was a commonality.
I created a system that raycasts from the camera, dynamically increasing alpha on objects blocking the player from the camera.
This material could be used on any object, so certain objects could stay solid.

## INTERACTION SYSTEM
The interaction system in the game was also important.
Players needed to be able to interact with objects in their world, such as items, doors, or boxes
I created an abstract interaction system where interactable objects would derive from a base class.
Objects closest to the player could be interacted with, and do custom interactions depending on the context.
Interactions could also be locked, and would not show if a certain player could not interact.

Doors were an extension of the interaction system, I created doors that could lock or unlock with a provided context.
These were important to push the player in a certain direction, blocking them from further access to the map until conditions were completed.

## FLASHLIGHT & INTERACTION PROMPTS
The flashlight UI in the game had to show the charge of the flashlight as it changed based on use.
The trickier UI to implement was the interaction prompts, as they had to show near objects that could be interacted with.
The solution was to make them world-space UI and billboard them to the main camera. 
To make the UI render over other objects, it was rendered to a separate UI camera, allowing the prompts to not get blocked by other elements of the world.

## DIEGETIC UI SCREENS
I created the diegetic screens of the planet and countdown timer within the ship.
These gave the player's information regarding their fate, as if they ran out of time they would lose.
Rather than make these separate from the world as part of the overall screen, it was fitting to make them a part of the space-ship.
This UI required render-textures that would be used on materials, and additional cameras that would render objects such as a timer to those textures while the game was running. 
This effect created screens which could be placed around the ship to show specific UI diegetically and keep the player immersed in the game experience.
To make the UI more interesting, I dispersed static broken displays within the level in addition to the dynamic diegetic screens.


## MENU UI
I programmed the Volume Slider to hook into global volume settings for the game, ensuring that all sound-producing objects also hooked into the volume system. 
The main menu initially felt bland, so in an effort to make it more dynamic and feel alive, I implemented lighting into the main menu.
This took the form of a vignette effect, with a flashing red light in the middle of the screen.
I also made the planet scale slowly from the ship's viewport as if the ship were actively crashing into the planet, imparting a sense of urgency to the player even within the menus. 

##  TECH ART
I also worked on various tech-art tasks within the game that needed doing.
I set up the lights and lighting within the scene.
I baked lighting and set up lighting and reflection volumes for further realism.
The game was on Web-GL so the resolution and quality of the lighting was limited by Web-GL's performance.
I implemented the post-process effects such as bloom into the scene to make buttons feel more realistic.
Finally, I created shaders for use within the transparency system, as well as a static screen shader to create broken displays within the level.





