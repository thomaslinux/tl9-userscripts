// ==UserScript==
// @name        TL9 Keyboard enable disable pencil
// @namespace   sudoku.com
// @match       https://sudoku.com/*
// @icon
// @grant       none
// @version     2026.04.11.00.00
// @author      thomaslinux
// @description keyboard controls for the sudoku so space enable you to enable or disable the pencil
// ==/UserScript==
const HTML_pencil = document.querySelector('div[data-action="pencil"]');
window.addEventListener('keydown', e => {
if (
    e.code === 'Space'
    || e.key === ' '
    || e.key === '+'
   ) {
    e.preventDefault();
    HTML_pencil?.dispatchEvent(
			new MouseEvent('mousedown')
		);
  }
}
);
