// ==UserScript==
// @name        Liens sur les projets php wampserver
// @namespace   Violentmonkey Scripts
// @match       http://localhost:8081/*
// @grant       none
// @version     2026.03.03.16.36
// @author      thomaslinux9
// @description Liens sur les projets php wampserver
// ==/UserScript==
const projectsli = document.querySelectorAll(".projects li:not(.projectsdir)");
projectsli.forEach(projet => {
  projet.innerHTML = '<a href="/' + projet.innerText + '">'+projet.innerText+'</a>'
});
