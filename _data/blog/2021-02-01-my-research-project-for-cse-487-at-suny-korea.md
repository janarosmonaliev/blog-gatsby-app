---
template: BlogPost
path: /pandemic-simulation
date: 2021-02-01T09:42:14.244Z
title: My research project for CSE 487 at SUNY Korea
metaDescription: >-
  A research project for CSE487 course under StonyBrook curriculum on pandemic
  simulation using ThreeJS. It shows different tendencies of how viruses like
  COVID-19 (Coronavirus) spread.
flair: Development
thumbnail: /assets/simulations-banner.png
---
## Project Idea

When I was coming up with a project idea at the beginning of the semester, I wanted to create something that would help the community around me in some way. I wanted to educate people about something important. Then, an idea of making a pandemic simulation came to my mind. The motivation behind it was to show users different tendencies of how pandemics spread. Once the research proposal was accepted, I started thinking about the technical setup. I had quite a bit of experience in web development and thus, decided to go along with JavaScript.

# Development

In the early stages of development, I wanted to run simulations on actual 3D maps of real cities. I thought that showing simulations in 3D would give users a better learning experience. I have found a couple of open-source projects, but unfortunately, all of them were deemed to be incompatible with my technical needs ([Harp.GL](http://harp.gl/), [Tangram.JS](https://github.com/tangrams/tangram)), as I needed access to buildings and roads during runtime. Then, I have found a 3D framework, called [ThreeJS](http://threejs.org/). After spending some time familiarizing myself with the framework, I realized that I could build my own city. Admittedly, the city built from scratch would not resemble the actual city structure in terms of topography. Nevertheless, I thought that it was a good direction to go.

## My first city

After spending some time searching for open-source projects to take inspiration from, I have stumbled upon a [city generation project ](https://thatfrenchgamedev.com/games/random-city-generator/)that was written by [Pierre Planeau](https://thatfrenchgamedev.com/pierre-planeau/). However, his 472-line project was using much older version of ThreeJS, 66th to be specific (current stable release is v125). So, to use his procedural city generation algorithm, I basically had to rewrite the entire code to be compatible with the latest version of ThreeJS (fixing his bugs was also a bonus). After doing that, I faced another problem - importing separate modules of ThreeJS into a static javascript file. Its documentation suggested using package bundling tools like [Webpack](https://webpack.js.org/). Learning it on the go was an interesting experience too. Later, I was able to build a city that looked like this:

![Procedutral city built with ThreeJS](/assets/generated-city-2.png "City")

## Generating Paths and Animation

Displaying population movement interactively was an issue in terms implementation and efficiency, e.g. finding a shortest path for each blob, animating each blob's walking trace, etc. So, I simplified my city to eliminate this problem. Now, it had 25 districts with 4 buildings in each district. Since the city's structure is fairly simple now, the graph path is generated empirically, using building's district index and position within. Using complex algorithms like Djikstra's would have overcomplicated things, e.g. a 5x5 district city with 4 buildings within each would need a graph with 84 nodes and 94 edges!

![Graph of the city](/assets/city-graph.png "Blobs' movement graph path")

Blobs' movement is animated by taking their movement path, which is essentially a list of vectors, and calculating the location of a point at`t`th percentage relative to the length of the vector path. So, on each frame, it increments that`t`by a small fraction and updates the location for each blob.

## Spread algorithm

One day is counted in terms of blobs' two way travel from home to work. So, on each day, each infected blob transmits the disease with an `$infectionChance `to random `$contactedWithBlobs `number of blobs, whether they are already infected or not. I thought that would resemble the real-life conditions of the disease spread.

## Adding 3D models

I was not fully satisfied with a city full of white boxes. If I am building a simulation on a city, it should look like a proper city! I have found a free 3D buildings pack on the internet and exported them through Blender into GLTF file format.

![Blender workspace](/assets/building-model.png "Buildings' structure in Blender")

After some debugging and surfing through StackOverflow, I have managed to import these buildings and voilà - the project is ready to be published!

## Source Code

The entire project is available for free and posted on [janarosmonaliev/research-simulations ](https://github.com/janarosmonaliev/research-simulations)Github repository. You can play around with the simulation and go through code-oriented documentation as well.

## Acknowledgements

[Alex Kuhn ](http://www.alexckuhn.com/about/)- an Assistant Professor at SUNY Korea, who supervised my project, giving valuable feedback on my progress along the way.

[Pierre Planeau ](https://thatfrenchgamedev.com/pierre-planeau/)- a game developer, who wrote a procedural city generation algorithm back in 2014 with ThreeJS.
