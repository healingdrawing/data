// Generated by Haxe 4.1.5
(function ($hx_exports, $global) { "use strict";
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Codebox = $hx_exports["Codebox"] = function() { };
Codebox.main = function() {
	console.log("Codebox.hx:10:","codebox is ready for use");
};
Codebox.prototype = {
	getMatches: function(ereg,input,index) {
		if(index == null) {
			index = 0;
		}
		var matches = [];
		while(ereg.match(input)) {
			matches.push(ereg.matched(index));
			input = ereg.matchedRight();
		}
		return matches;
	}
	,mirror_n: function(t,n) {
		var regstr = ".{1," + n + "}";
		var r = new EReg(regstr,"");
		var input = t;
		var matches = [];
		while(r.match(input)) {
			matches.push(r.matched(0));
			input = r.matchedRight();
		}
		var xlist = matches;
		var _g = 0;
		var _g1 = xlist.length;
		while(_g < _g1) {
			var i = _g++;
			var ylist = xlist[i].split("");
			ylist.reverse();
			xlist[i] = ylist.join("");
		}
		return xlist.join("");
	}
	,mirror: function(t) {
		var x = t;
		var _g = 2;
		var _g1 = t.length + 1;
		while(_g < _g1) {
			var i = _g++;
			var regstr = ".{1," + i + "}";
			var r = new EReg(regstr,"");
			var input = x;
			var matches = [];
			while(r.match(input)) {
				matches.push(r.matched(0));
				input = r.matchedRight();
			}
			var xlist = matches;
			var _g2 = 0;
			var _g3 = xlist.length;
			while(_g2 < _g3) {
				var i1 = _g2++;
				var ylist = xlist[i1].split("");
				ylist.reverse();
				xlist[i1] = ylist.join("");
			}
			x = xlist.join("");
		}
		return x;
	}
	,upanddown: function(t) {
		var toup = false;
		var todn = false;
		var x = t.split("");
		var _g = 0;
		var _g1 = t.length;
		while(_g < _g1) {
			var i = _g++;
			if(!toup && x[i] != x[i].toUpperCase()) {
				toup = true;
				x[i] = x[i].toUpperCase();
			} else if(!todn && x[i] != x[i].toLowerCase()) {
				todn = true;
				x[i] = x[i].toLowerCase();
			}
		}
		return x.join("");
	}
	,opposite: function(t) {
		var num = "0123456789";
		var numback = "9876543210";
		var big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var bigback = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
		var small = "abcdefghijklmnopqrstuvwxyz";
		var smallback = "zyxwvutsrqponmlkjihgfedcba";
		var face = (num + small + big).split("");
		var back = (numback + smallback + bigback).split("");
		var sumdict_h = Object.create(null);
		var _g = 0;
		var _g1 = face.length;
		while(_g < _g1) {
			var i = _g++;
			sumdict_h[face[i]] = back[i];
		}
		var rez = "";
		var ts = t.split("");
		var _g = 0;
		var _g1 = ts.length;
		while(_g < _g1) {
			var i = _g++;
			if(Object.prototype.hasOwnProperty.call(sumdict_h,ts[i])) {
				rez += sumdict_h[ts[i]];
			} else {
				rez += "_";
			}
		}
		return rez;
	}
	,mix: function(t,mode) {
		if(mode == null) {
			mode = "abc";
		}
		var x = t;
		switch(mode) {
		case "acb":
			var num = "0123456789";
			var numback = "9876543210";
			var big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var bigback = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
			var small = "abcdefghijklmnopqrstuvwxyz";
			var smallback = "zyxwvutsrqponmlkjihgfedcba";
			var face = (num + small + big).split("");
			var back = (numback + smallback + bigback).split("");
			var sumdict_h = Object.create(null);
			var _g = 0;
			var _g1 = face.length;
			while(_g < _g1) {
				var i = _g++;
				sumdict_h[face[i]] = back[i];
			}
			var rez = "";
			var ts = x.split("");
			var _g = 0;
			var _g1 = ts.length;
			while(_g < _g1) {
				var i = _g++;
				if(Object.prototype.hasOwnProperty.call(sumdict_h,ts[i])) {
					rez += sumdict_h[ts[i]];
				} else {
					rez += "_";
				}
			}
			x = rez;
			var toup = false;
			var todn = false;
			var x1 = x.split("");
			var _g = 0;
			var _g1 = x.length;
			while(_g < _g1) {
				var i = _g++;
				if(!toup && x1[i] != x1[i].toUpperCase()) {
					toup = true;
					x1[i] = x1[i].toUpperCase();
				} else if(!todn && x1[i] != x1[i].toLowerCase()) {
					todn = true;
					x1[i] = x1[i].toLowerCase();
				}
			}
			x = x1.join("");
			var x1 = x;
			var _g = 2;
			var _g1 = x.length + 1;
			while(_g < _g1) {
				var i = _g++;
				var regstr = ".{1," + i + "}";
				var r = new EReg(regstr,"");
				var input = x1;
				var matches = [];
				while(r.match(input)) {
					matches.push(r.matched(0));
					input = r.matchedRight();
				}
				var xlist = matches;
				var _g2 = 0;
				var _g3 = xlist.length;
				while(_g2 < _g3) {
					var i1 = _g2++;
					var ylist = xlist[i1].split("");
					ylist.reverse();
					xlist[i1] = ylist.join("");
				}
				x1 = xlist.join("");
			}
			x = x1;
			break;
		case "bac":
			var x1 = x;
			var _g = 2;
			var _g1 = x.length + 1;
			while(_g < _g1) {
				var i = _g++;
				var regstr = ".{1," + i + "}";
				var r = new EReg(regstr,"");
				var input = x1;
				var matches = [];
				while(r.match(input)) {
					matches.push(r.matched(0));
					input = r.matchedRight();
				}
				var xlist = matches;
				var _g2 = 0;
				var _g3 = xlist.length;
				while(_g2 < _g3) {
					var i1 = _g2++;
					var ylist = xlist[i1].split("");
					ylist.reverse();
					xlist[i1] = ylist.join("");
				}
				x1 = xlist.join("");
			}
			x = x1;
			var num = "0123456789";
			var numback = "9876543210";
			var big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var bigback = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
			var small = "abcdefghijklmnopqrstuvwxyz";
			var smallback = "zyxwvutsrqponmlkjihgfedcba";
			var face = (num + small + big).split("");
			var back = (numback + smallback + bigback).split("");
			var sumdict_h = Object.create(null);
			var _g = 0;
			var _g1 = face.length;
			while(_g < _g1) {
				var i = _g++;
				sumdict_h[face[i]] = back[i];
			}
			var rez = "";
			var ts = x.split("");
			var _g = 0;
			var _g1 = ts.length;
			while(_g < _g1) {
				var i = _g++;
				if(Object.prototype.hasOwnProperty.call(sumdict_h,ts[i])) {
					rez += sumdict_h[ts[i]];
				} else {
					rez += "_";
				}
			}
			x = rez;
			var toup = false;
			var todn = false;
			var x1 = x.split("");
			var _g = 0;
			var _g1 = x.length;
			while(_g < _g1) {
				var i = _g++;
				if(!toup && x1[i] != x1[i].toUpperCase()) {
					toup = true;
					x1[i] = x1[i].toUpperCase();
				} else if(!todn && x1[i] != x1[i].toLowerCase()) {
					todn = true;
					x1[i] = x1[i].toLowerCase();
				}
			}
			x = x1.join("");
			break;
		case "bca":
			var x1 = x;
			var _g = 2;
			var _g1 = x.length + 1;
			while(_g < _g1) {
				var i = _g++;
				var regstr = ".{1," + i + "}";
				var r = new EReg(regstr,"");
				var input = x1;
				var matches = [];
				while(r.match(input)) {
					matches.push(r.matched(0));
					input = r.matchedRight();
				}
				var xlist = matches;
				var _g2 = 0;
				var _g3 = xlist.length;
				while(_g2 < _g3) {
					var i1 = _g2++;
					var ylist = xlist[i1].split("");
					ylist.reverse();
					xlist[i1] = ylist.join("");
				}
				x1 = xlist.join("");
			}
			x = x1;
			var toup = false;
			var todn = false;
			var x1 = x.split("");
			var _g = 0;
			var _g1 = x.length;
			while(_g < _g1) {
				var i = _g++;
				if(!toup && x1[i] != x1[i].toUpperCase()) {
					toup = true;
					x1[i] = x1[i].toUpperCase();
				} else if(!todn && x1[i] != x1[i].toLowerCase()) {
					todn = true;
					x1[i] = x1[i].toLowerCase();
				}
			}
			x = x1.join("");
			var num = "0123456789";
			var numback = "9876543210";
			var big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var bigback = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
			var small = "abcdefghijklmnopqrstuvwxyz";
			var smallback = "zyxwvutsrqponmlkjihgfedcba";
			var face = (num + small + big).split("");
			var back = (numback + smallback + bigback).split("");
			var sumdict_h = Object.create(null);
			var _g = 0;
			var _g1 = face.length;
			while(_g < _g1) {
				var i = _g++;
				sumdict_h[face[i]] = back[i];
			}
			var rez = "";
			var ts = x.split("");
			var _g = 0;
			var _g1 = ts.length;
			while(_g < _g1) {
				var i = _g++;
				if(Object.prototype.hasOwnProperty.call(sumdict_h,ts[i])) {
					rez += sumdict_h[ts[i]];
				} else {
					rez += "_";
				}
			}
			x = rez;
			break;
		case "cab":
			var toup = false;
			var todn = false;
			var x1 = x.split("");
			var _g = 0;
			var _g1 = x.length;
			while(_g < _g1) {
				var i = _g++;
				if(!toup && x1[i] != x1[i].toUpperCase()) {
					toup = true;
					x1[i] = x1[i].toUpperCase();
				} else if(!todn && x1[i] != x1[i].toLowerCase()) {
					todn = true;
					x1[i] = x1[i].toLowerCase();
				}
			}
			x = x1.join("");
			var num = "0123456789";
			var numback = "9876543210";
			var big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var bigback = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
			var small = "abcdefghijklmnopqrstuvwxyz";
			var smallback = "zyxwvutsrqponmlkjihgfedcba";
			var face = (num + small + big).split("");
			var back = (numback + smallback + bigback).split("");
			var sumdict_h = Object.create(null);
			var _g = 0;
			var _g1 = face.length;
			while(_g < _g1) {
				var i = _g++;
				sumdict_h[face[i]] = back[i];
			}
			var rez = "";
			var ts = x.split("");
			var _g = 0;
			var _g1 = ts.length;
			while(_g < _g1) {
				var i = _g++;
				if(Object.prototype.hasOwnProperty.call(sumdict_h,ts[i])) {
					rez += sumdict_h[ts[i]];
				} else {
					rez += "_";
				}
			}
			x = rez;
			var x1 = x;
			var _g = 2;
			var _g1 = x.length + 1;
			while(_g < _g1) {
				var i = _g++;
				var regstr = ".{1," + i + "}";
				var r = new EReg(regstr,"");
				var input = x1;
				var matches = [];
				while(r.match(input)) {
					matches.push(r.matched(0));
					input = r.matchedRight();
				}
				var xlist = matches;
				var _g2 = 0;
				var _g3 = xlist.length;
				while(_g2 < _g3) {
					var i1 = _g2++;
					var ylist = xlist[i1].split("");
					ylist.reverse();
					xlist[i1] = ylist.join("");
				}
				x1 = xlist.join("");
			}
			x = x1;
			break;
		case "cba":
			var toup = false;
			var todn = false;
			var x1 = x.split("");
			var _g = 0;
			var _g1 = x.length;
			while(_g < _g1) {
				var i = _g++;
				if(!toup && x1[i] != x1[i].toUpperCase()) {
					toup = true;
					x1[i] = x1[i].toUpperCase();
				} else if(!todn && x1[i] != x1[i].toLowerCase()) {
					todn = true;
					x1[i] = x1[i].toLowerCase();
				}
			}
			x = x1.join("");
			var x1 = x;
			var _g = 2;
			var _g1 = x.length + 1;
			while(_g < _g1) {
				var i = _g++;
				var regstr = ".{1," + i + "}";
				var r = new EReg(regstr,"");
				var input = x1;
				var matches = [];
				while(r.match(input)) {
					matches.push(r.matched(0));
					input = r.matchedRight();
				}
				var xlist = matches;
				var _g2 = 0;
				var _g3 = xlist.length;
				while(_g2 < _g3) {
					var i1 = _g2++;
					var ylist = xlist[i1].split("");
					ylist.reverse();
					xlist[i1] = ylist.join("");
				}
				x1 = xlist.join("");
			}
			x = x1;
			var num = "0123456789";
			var numback = "9876543210";
			var big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var bigback = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
			var small = "abcdefghijklmnopqrstuvwxyz";
			var smallback = "zyxwvutsrqponmlkjihgfedcba";
			var face = (num + small + big).split("");
			var back = (numback + smallback + bigback).split("");
			var sumdict_h = Object.create(null);
			var _g = 0;
			var _g1 = face.length;
			while(_g < _g1) {
				var i = _g++;
				sumdict_h[face[i]] = back[i];
			}
			var rez = "";
			var ts = x.split("");
			var _g = 0;
			var _g1 = ts.length;
			while(_g < _g1) {
				var i = _g++;
				if(Object.prototype.hasOwnProperty.call(sumdict_h,ts[i])) {
					rez += sumdict_h[ts[i]];
				} else {
					rez += "_";
				}
			}
			x = rez;
			break;
		default:
			var num = "0123456789";
			var numback = "9876543210";
			var big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var bigback = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
			var small = "abcdefghijklmnopqrstuvwxyz";
			var smallback = "zyxwvutsrqponmlkjihgfedcba";
			var face = (num + small + big).split("");
			var back = (numback + smallback + bigback).split("");
			var sumdict_h = Object.create(null);
			var _g = 0;
			var _g1 = face.length;
			while(_g < _g1) {
				var i = _g++;
				sumdict_h[face[i]] = back[i];
			}
			var rez = "";
			var ts = x.split("");
			var _g = 0;
			var _g1 = ts.length;
			while(_g < _g1) {
				var i = _g++;
				if(Object.prototype.hasOwnProperty.call(sumdict_h,ts[i])) {
					rez += sumdict_h[ts[i]];
				} else {
					rez += "_";
				}
			}
			x = rez;
			var x1 = x;
			var _g = 2;
			var _g1 = x.length + 1;
			while(_g < _g1) {
				var i = _g++;
				var regstr = ".{1," + i + "}";
				var r = new EReg(regstr,"");
				var input = x1;
				var matches = [];
				while(r.match(input)) {
					matches.push(r.matched(0));
					input = r.matchedRight();
				}
				var xlist = matches;
				var _g2 = 0;
				var _g3 = xlist.length;
				while(_g2 < _g3) {
					var i1 = _g2++;
					var ylist = xlist[i1].split("");
					ylist.reverse();
					xlist[i1] = ylist.join("");
				}
				x1 = xlist.join("");
			}
			x = x1;
			var toup = false;
			var todn = false;
			var x1 = x.split("");
			var _g = 0;
			var _g1 = x.length;
			while(_g < _g1) {
				var i = _g++;
				if(!toup && x1[i] != x1[i].toUpperCase()) {
					toup = true;
					x1[i] = x1[i].toUpperCase();
				} else if(!todn && x1[i] != x1[i].toLowerCase()) {
					todn = true;
					x1[i] = x1[i].toLowerCase();
				}
			}
			x = x1.join("");
		}
		return x;
	}
};
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw haxe_Exception.thrown("EReg::matched");
		}
	}
	,matchedRight: function() {
		if(this.r.m == null) {
			throw haxe_Exception.thrown("No string matched");
		}
		var sz = this.r.m.index + this.r.m[0].length;
		return HxOverrides.substr(this.r.s,sz,this.r.s.length - sz);
	}
};
var HxOverrides = function() { };
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.now = function() {
	return Date.now();
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	get_native: function() {
		return this.__nativeException;
	}
});
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
});
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
Codebox.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, {});
