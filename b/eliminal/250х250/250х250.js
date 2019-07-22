(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"250х250_atlas_", frames: [[252,252,250,250],[0,0,250,250],[0,252,250,250],[252,0,250,250]]}
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
	this.spriteSheet = ss["250х250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["250х250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["250х250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["250х250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib._250х250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.text = new cjs.Text("Снятие похмельного синдрома\n\nДетокс терапия, очищение организма \n\nПомощь при отравлении", "bold 15px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 19;
	this.text.lineWidth = 177;
	this.text.parent = this;
	this.text.setTransform(7,83.9);

	this.instance_1 = new lib._2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,1);

	this.instance_2 = new lib._4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,1);

	this.text_1 = new cjs.Text("Снятие похмельного синдрома\n\nДетокс терапия, очищение организма \n\nПомощь при отравлении", "bold 15px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 177;
	this.text_1.parent = this;
	this.text_1.setTransform(7,83.9);

	this.instance_3 = new lib._3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1},{t:this.text,p:{x:7,y:83.9,text:"Снятие похмельного синдрома\n\nДетокс терапия, очищение организма \n\nПомощь при отравлении",font:"bold 15px 'Arial'",textAlign:"",lineHeight:18.8,lineWidth:177}}]},28).to({state:[{t:this.instance},{t:this.instance_1},{t:this.text_1},{t:this.instance_2},{t:this.text,p:{x:124.5,y:17.8,text:"Красота кожи \nв Ваших руках!",font:"italic bold 35px 'Arial'",textAlign:"center",lineHeight:41.1,lineWidth:227}}]},47).to({state:[{t:this.instance},{t:this.instance_1},{t:this.text_1},{t:this.instance_2},{t:this.text,p:{x:124.5,y:17.8,text:"Красота кожи \nв Ваших руках!",font:"italic bold 35px 'Arial'",textAlign:"center",lineHeight:41.1,lineWidth:227}},{t:this.instance_3}]},27).to({state:[{t:this.instance},{t:this.instance_1},{t:this.text_1},{t:this.instance_2},{t:this.text,p:{x:124.5,y:17.8,text:"Красота кожи \nв Ваших руках!",font:"italic bold 35px 'Arial'",textAlign:"center",lineHeight:41.1,lineWidth:227}},{t:this.instance_3}]},33).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,125,250,250);
// library properties:
lib.properties = {
	width: 250,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/250х250_atlas_.png", id:"250х250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;