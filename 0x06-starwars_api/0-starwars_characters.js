#!/usr/bin/node

import fetch from 'node-fetch';

function filmRequest (url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const characterURLs = data.characters;
      const characterPromises = characterURLs.map(requestChar);
      Promise.all(characterPromises)
        .then(characters => {
          characters.forEach(charJSON => {
	    console.log(JSON.parse(charJSON).name);
	  });
        })
        .catch(error => {
	  console.log(`Error: ${error}`);
        });
    })
    .catch(error => {
      console.log(`Error: ${error}`);
    });
}

function requestChar (url) {
  return fetch(url)
    .then(response => response.text())
    .catch(error => {
      throw error;
    });
}

filmRequest(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}/`);
