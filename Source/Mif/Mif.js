/*
---
 
name: Mif
description: define Mif object
license: MIT-Style License (http://mifjs.net/license.txt)
copyright: Anton Samoylov (http://mifjs.net)
authors: Anton Samoylov (http://mifjs.net)
requires: 
  - core:1.2.4:*
provides: Mif
 
...
*/

var Mif = {
	
	id: function(id){
		return Mif.ids[id];
	},
	
	ids: {},
	
	uids: {},
	
	UID: 0
	
};
