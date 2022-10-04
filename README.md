# Simple NEWS - ReactJS App
Simple news website that was created by ReactJS + TypeScript and GNews API base on MAGNEWS2 template (powered by Colorlib).

## Table of content
* [General info](#general-info)
* [Technologies](#technologies)
* [Limitations](#limitations)
* [To do](#to-do)

## General info
This project is a simple news website where people can take on the top headlines and the latest news all around the world. Using GNews API as resource and ReactJS as FE technology, come up with full responsiveness and best view experience on every devices.

## Technologies
Project is created with ReactJS using modules as below:
* typescript: 4.6.4
* tailwindcss: 3.1.8
* vite: 3.1.0
* react-router-dom: 6.4.1
* @reduxjs/toolkit: 1.8.5
* @headlessui/react: 1.7.3
* ...

## Limitations
* Limited by the GNews free account so only one request will be called per second -> Loading resource for every catalogy will be delay by 2000ms to prevent 429 error
* Currnet only supported 3 catalogues (business, travel, entertainment)
* Current only supported 3 languages (En, Jp, Ger)
* UI may be broken if the article's title is too long (more than 128 chars)

## To Do
* Add more catalogues support
* Improve UI as smooth as possible
* ...
