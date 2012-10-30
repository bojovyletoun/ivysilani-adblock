// ==UserScript==
// @name		ivysilani-adblock
// @description		Remove fucking ads in public tv web archive (http://www.ceskatelevize.cz/ivysilani/)
// @include		http://www.ceskatelevize.cz/ivysilani/embed/iFramePlayer.php?*
// ==/UserScript==

opera.defineMagicFunction('callSOAP', function(origFn, ths, arg1){
	var items = arg1.options.playlistItems;
	for(var i in items){
		if(items[i].Type=="Ad") arg1.options.playlistItems.splice(i,1);
	}
	origFn(arg1);
});