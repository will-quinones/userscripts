// ==UserScript==
// @name         Udemy — Media Key Controls
// @namespace    https://github.com/willcas36/userscripts
// @version      1.0.1
// @description  Controla el video de Udemy con las teclas multimedia: anterior/siguiente retroceden/avanzan 5s y play/pause controlan la reproducción.
// @author       willcas36
// @match        https://www.udemy.com/course/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=udemy.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/willcas36/userscripts/main/udemy-media-keys/udemy-media-keys.user.js
// @downloadURL  https://raw.githubusercontent.com/willcas36/userscripts/main/udemy-media-keys/udemy-media-keys.user.js
// ==/UserScript==

(function () {
  'use strict';

  function rewind() {
    const v = document.querySelector('video');
    if (v) v.currentTime -= 5;
  }

  function forward() {
    const v = document.querySelector('video');
    if (v) v.currentTime += 5;
  }

  if (!('mediaSession' in navigator)) return;

  function play() {
    const v = document.querySelector('video');
    if (v) v.play().catch(() => {});
  }

  function pause() {
    const v = document.querySelector('video');
    if (v) v.pause();
  }

  function setMediaSessionHandlers() {
    navigator.mediaSession.setActionHandler('previoustrack', rewind);
    navigator.mediaSession.setActionHandler('nexttrack', forward);
    navigator.mediaSession.setActionHandler('play', play);
    navigator.mediaSession.setActionHandler('pause', pause);
  }

  setMediaSessionHandlers();
  setInterval(setMediaSessionHandlers, 1000);
})();
