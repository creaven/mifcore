/*
---
 
name: Mif
description: define Mif object
license: MIT-Style License (http://mifjs.net/license.txt)
copyright: Anton Samoylov (http://mifjs.net)
authors: Anton Samoylov (http://mifjs.net)
requires: [Stylesheet/Stylesheet]
provides: Mif
 
...
*/
(function(){
	
	var Mif = this.Mif = {
		
		version: 'dev'
	
	};
	
	//id
	var ids = {};
	Mif.id = function(){
		if(arguments.length == 2){
			ids[arguments[1]] = arguments[0];
			return this;
		}else{
			return ids[arguments[0]];
		}
	};
	
	//uid
	var items = {};
	var uid = 0;
	Mif.store = function(item){
		items[++uid] = item;
		item.UID = uid;
		return this;
	};
	Mif.uid = function(uid){
		return items[uid];
	};
	
	Mif.sheet = new Stylesheet();
	
})();

String.implement({

	toMifImg: function(src){//for normal browser MifImage - object {name: base64_encoded_image}, for ie MifImage - url to mhtml file
		if(!Browser.Engine.trident){
			return src ? 'data:;base64,' + MifImg[this] : 'url(data:;base64,' + MifImg[this] + ')';
		}else{
			return src ? 'mhtml:' + MifImg + '!' + this : 'url(mhtml:' + MifImg + '!' + this + ')';
		}
	},
	
	repeat: function(times){
		return new Array(times + 1).join(this);
	}
	
});

Event.Keys.extend({
	'pgdown': 34,
	'pgup': 33,
	'home': 36,
	'end': 35
});
