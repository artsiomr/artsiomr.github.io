(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"700х350_atlas_", frames: [[352,0,350,700],[0,702,350,700],[0,0,350,700]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["700х350_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["700х350_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["700х350_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib._700х350 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text("Снятие похмельного синдрома \n\nДетокс терапия, очищение организма\n\nПомощь при отравлении ", "italic bold 23px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 28;
	this.text.lineWidth = 335;
	this.text.parent = this;
	this.text.setTransform(15.3,448.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(41).to({_off:false},0).wait(55).to({_off:true},1).wait(40));

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.instance_1 = new lib._2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,0);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},41).to({state:[{t:this.instance},{t:this.instance_1}]},55).to({state:[{t:this.instance},{t:this.instance_2}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(175,350,350,700);
// library properties:
lib.properties = {
	width: 350,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/700х350_atlas_.png", id:"700х350_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;