# Simple NEWS - ReactJS App
Simple news website that was created by ReactJS and GNews API.
## Table of content
* [General info](#general-info)
* [Technologies](#technologies)
* [Supported Features](#supported-features)
* [To do](#to-do)

## General info
This project is a simple news website where people can take on the top headlines and the latest news all around the world. Using GNews API as resource and ReactJS as FE technology, come up with full responsiveness and best view experience on every devices.

## Technologies
Project is created with ReactJS using modules as below:
* axios: 2.0.1
* bootstrap: 5.1.3
* bootstrap-icon: 1.8.2
* react-bootstrap: 2.4.0
* react-lazy-load: 3.1.13
* react-redux-dom: 6
* @reduxjs/toolkit: 1.8.2
* ...

## Supported Features
### Top headlines news:
* View top headlines news with carousel design, support automatically slide and controlled slide
### Latest news:
* View the last 4 latest news
* Support topic change (world, health, technology,...)
### Highlight:
* View the highlight news for every catalogy (politics, sports, entertainment)
* User can choose to view 3 or 6 articles per section

### Other:
* Search option (include date) and change language option also supported in this site.

## Limitations
* Limited by the GNews free account so only one request will be called per second -> Loading resource for every catalogy will be delay by 2000ms to prevent 429 error
* Currnet only supported 3 catalogues (politics, sports, entertainment)
* Current only supported 3 languages (En, Jp, Cn)
* UI may be broken if the article's title is too long (more than 128 chars)

## To Do
* Add more catalogues support
* Improve UI so smooth so far
* ...
