---
title: 'INDEX 1391'
description: 'A strategic Deckbuilder Within a Gothic Computer.'
updatedDate: 'March 15 2026'
startDate: 'September 1 2025'
pubDate: 'August 25, 2026'
currentStatus: 'In Production (2026)'
teamSize: '6'
company: 'Unloaded Dice Games'
role: 'Technical Designer | Systems & UI Programmer | Producer'
heroImage: '../../assets/Index1391.png'
skills: ["Unity", "C#", "Jira", "Google Suite", "Gimp", "Python", "Typescript", "Unit Tests"]
links: [{name: "Website", url: "https://www.index1391.com"},
        {name: "Steam Page", url: "https://store.steampowered.com/app/4637680/Index_1391/"},
        {name: "Unloaded Dice Linkedin", url: "https://www.linkedin.com/company/unloaded-dice-games"}]
---
# OVERVIEW
Play as a Machine Priest tasked with purging the VIRUS infecting your faith. 
How far are you willing to bend the rules to restore order?

_Index 1391_ is a roguelike deckbuilder based within the mix between Gothic and computer.
The world is a digital simulation, from which, a holy computer operates every facet of life.
This machine embodies perfect order, everything is a cog in the machine.
The VIRUS is the opposite, an entity of pure chaos, sent to disrupt the sanctum and ruin its harmonious conformity. 
The player is tasked with removing this malicious visitor.
They must use cards and **The Stack** to do so.

Cards represent actions to perform, and **The Stack** is the medium from which those actions are resolved.
The Stack represents a delayed resolution structure, where actions resolve from top to bottom, generally in the order of play. 
Cards and enemies have actions that are played into the Stack, which resolves at the end of the player's turn. 
After the Stack resolves, actions stay in the Stack for the next turn, generating persistence.
The Stack does have a limited capacity, and when overflowed, older (bottom) elements are pushed out of the Stack.

The Stack is often a background structure within games to support resolution, _Index 1391_ is using it as a primary foreground mechanic, from which the player directly interacts.


# CONTRIBUTIONS
## Production
I coordinated the cross-functional team across code, art, design, and QA to ensure the Steam requirements and builds were met on time.
By managing the backlog and planning sprints within Agile frameworks, I ensured consistent progress and adherence to our deadlines. 
I oversee risk management, balance features against time constraints as well as ensuring bug fixes and stability is built into our pipeline.
I also oversaw the marketing campaign of the game, setting up and overseeing the posting schedule to get the most views on our page as possible leading up to launch.

As a result of my efforts, the game is on track to release on Steam by the end of the Calendar year.
![img.png](../../assets/SocialMediaPlanner.png)


## GAME DESIGN RESEARCH
To establish a basis for the design of the game, I did background research into the **Stack** mechanic as seen through other games.
While widely popularized by Magic The Gathering (1994), the stack as a resolution system predates collectible card games and has persisted across decades of board and card game design.

In this research project, I investigated the historical emergence and evolution of stack-based resolution systems by sampling a range of tabletop games over time.
This analysis allowed me to trace how the mechanic developed, adapted, and ultimately became a standard, yet largely background feature in game design.

Building on these findings, _Index 1391_ introduces a novel design approach by bringing the stack into the foreground as the central zone of player interaction.
Instead of functioning passively, the stack becomes an active, visible structure that players directly engage with during gameplay.

To evaluate the games design, I conducted player surveys examining two key questions: 
how understandable a complex resolution mechanic is when presented as a primary interface, 
and how players feel about interacting with such a system directly. 
The results contribute both a historical perspective on the stack and new insights into player experience when foundational mechanics are pushed to the forefront.

The paper can be found [here](/Publications/Resolution_Stack_Research.pdf).

## GAME DESIGN
I was the lead designer on the project, and therefore responsible for the design of the game's core mechanics.
I created documentation related to the game's mechanics and design decisions.
I will outline a couple of key design problems and their solutions.

### COST OF CARDS
#### PROBLEM
The initial design of the game directed that the cost of the cards would be tied to a limited amount of energy awarded per turn.
This initial energy per turn would be 3.
This system copied _Slay the Spire_'s systems, yet felt detached from the game's **Stack** mechanic.

#### SOLUTION
The solution was to introduce a new mechanic that would allow the player to spend energy on the **Stack** itself.
The cost of the cards would be tied to the amount of space a related Protocol/action would take up on the Stack. 
The Stack would limit the amount of cards played through overflowing, rather than a set energy limit. 

### STACK OVERFLOW
#### PROBLEM
The Stack was limited to 10 size of actions it could hold, with each action taking up 1 or more spaces.
The initial design had the Stack overflow and clear the entire Stack.
The limit and subsequent overflow was enacted to act as an interaction space, and to remove some cognitive load from the player.
Despite this, the overflow clearing the Stack was not a natural part of the gameplay, it caused strategy to revolve around clearing the Stack, disrupting the enemies action economy.
We wanted gameplay to revolve around the cards and the interactions within the Stack, not just the Stack overflowing.

#### SOLUTION
Overflow was changed to push older actions out of the Stack from the bottom. 
This operated much like the queue data structure rather than a stack.
This was successful in changing the gameplay to be more intuitive, building in longer term strategies as protocols on the Stack could linger for longer before being cleared.
It also made cost of cards not a pure downside, as larger cost cards could push more unwanted protocols out of the Stack, while also being easier to push out themselves.


### ARCHETYPES
#### PROBLEM
Cards were designed around three archetypes:
- **AGGRO**: Aggressively and chaotically attacking enemies with little regard for defense.
- **CONTROL**: Controlling the Stack, weighting defensive actions more heavily.
- **COMBO**: Creating the perfect sequence of actions to maximize damage.

- These three archetypes had some dissonance with the game's **Stack** mechanic. 
For one, our narrative, design, and aesthetics were heavily influenced by the dichotomy of Order vs Chaos.
Introducing a third archetype to this made this relationship less clear.
Furthermore, the strategies of the archetypes were not well-defined, leading to a lack of consistency in the gameplay and clarity in content design.

#### SOLUTION
The archetypes were downsized to two:
- **CHAOS**: Chaos embodies powerful unpredictability, cards could be powerful or weak depending on chance. Embodies the VIRUS.
- **ORDER**: Order is personified by predictable outcomes to play actions. Every card will have a predictable outcome. Embodies the Sanctum the player is defending.
 
- This simplified the gameplay and content design, with the archetypes being more easily understood and defined.
  Card content was streamlined to focus on the Stack from within the framework of an archetype.
  This change also aligned with the narrative and aesthetics of the game, creating a more cohesive and consistent experience.

## PROTOTYPING
To generate content and refine the game's mechanics, a paper prototype was created.
This prototype was used for the first semester of the project, and was periodically revisited to assess design without technical debt.
Using Python and Gimp, I setup card image creation automation from a Google spreadsheet.
Paper cards were first created in a spreadsheet, then using python, automatically generated images from a Gimp template.
They then were printed, cut, and sleeved into a deck with a solid backing.
These were used with die and 3d printed pieces, and paper rules, to create a gameplay experience. 
A moderator was present to act as the computer behind the gameplay, moving pieces and performing enemy actions. 

I managed this process from the start, generating paper content, rules, and guides from which the paper prototype was rendered functional.
The prototype allowed for rapid iteration of mechanics at an extremely low cost. 
This also limited technical debt, as the paper prototype was a reliable reference for the game's mechanics.

Below is an example of a card from the 3rd version of the paper prototype. 
![Card.jpg](../../assets/Card.jpg)

## CONTENT DESIGN & IMPLEMENTATION
I was responsible for the content design of the game, the cards, enemies, doctrines, keywords etc.
This started with a generation of ideas in spreadsheets, testing them on paper, and finally creating them within our Unity game engine.
Content was created in a modular way, leveraging the CAT (Content Authoring Tool) to generate pieces that linked to one another.
This tool, along with a sandbox tool, allowed for easy content creation and testing.
I generated a majority of the card and doctrine content within the game through the CAT and related tools.

As a part of this work, I also did extensive QA testing of the game's mechanics.
After creating each item of content, I tested it multiple times leveraging our tooling to ensure it was working as intended.
In some cases unit tests were leveraged on specific components to ensure they were working. 
Through such a process, I often found bugs within backend systems and would work on documenting them to ensure they would be fixed.
Such discovery of bugs caught critical issues early, allowing for more time to fix critical infrastructure, and exposed me to almost every system in the game.

Each content update had a log of changes made.
This allowed for a clear history of design and allowed for others to easily test new content.
I can provide an example upon request.


## PROGRAMMING
In addition to generating content within the game, I programmed parts of the game's systems to allow for content to function.
The most important items I contributed are below.

- **Run Systems:** Management of the player's deck and health over the course of the game.
- **Effects:** The individual modular components that make up an effect. Predicates, gates, and operations. These are scripts that deal damage, draw cards, target enemy protocols etc. These were linked to in the CAT and other external tools to easily edit content within the game.
- **Handlers:** The Handlers for doctrines, allowing them to have custom functionality.

- **Data Tracking Systems:** The systems that track player data for balance and statistics. These systems were unit tested and use the game's event system to track data, which is sent to a Google database.
- **Tool Extensions:** Extensions to the CAT and relational tools to improve functionality.

## UI PROGRAMMING
I programmed various aspects of the game's UI, most importantly the Cards and non-battle screens.

- **Hand UI:** The hand of cards that the player interacts with. Controls when and where a card can be played, and can be reordered to the player's liking.
- **Card UI:** The cards themselves, implementation of UI designs that programmatically create cards when needed (such as when a card is drawn).
- **Main Menu UI:** The main menu animations and functionality. This does not include the settings.

- **Card Screen UI:** UI screens to display cards and related information. These are made up of the various rewards and deck view screens. These leverage pooling to reduce the number of objects created. They also have toggleable interactively depending on the application.










