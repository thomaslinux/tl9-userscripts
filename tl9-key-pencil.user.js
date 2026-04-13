// ==UserScript==
// @name        TL9 Keyboard controls sudoku
// @namespace   sudoku.com
// @match       https://sudoku.com/*
// @icon
// @grant       none
// @version     2026.04.13.10.53
// @author      thomaslinux
// @description key space, + and z controls for sudoku.com
// ==/UserScript==
const HTML_pencil = document.querySelector('div[data-action="pencil"]');
HTML_pencil.title = '+ for pencil';
const HTML_pause = document.getElementById('timer-wrapper');
HTML_pause.title = 'Space to pause';
const HTML_undo = document.querySelector('div[data-action="undo"]');
HTML_undo.title = 'z to pause';
window.addEventListener('keydown', e => {
  if (e.key === '+') {
    e.preventDefault();
    HTML_pencil?.dispatchEvent(
      new MouseEvent('mousedown')
    );
  }
  if (e.code === 'Space' || e.key === ' ') {
    e.preventDefault();
    HTML_pause?.dispatchEvent(
      new MouseEvent('click')
    )
  }
  if (e.key === 'z') {
    e.preventDefault();
    HTML_undo?.dispatchEvent(
      new MouseEvent('mousedown')
    )
  }
});
