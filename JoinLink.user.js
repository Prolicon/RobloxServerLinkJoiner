// ==UserScript==
// @name     Roblox Server Link Joiner
// @version  1.337
// @grant    none
// @run-at   document-idle
// @match    https://*.roblox.com/games/*
// @author   Prolikon
// ==/UserScript==

var placeid = window.location.href.match(/games\/(\d+)\//)[1];
var gameid = window.location.href.match(/\?gameid=([^\/]+)/)[1];
unsafeWindow.Roblox.GameLauncher.joinGameInstance(placeid, gameid);
