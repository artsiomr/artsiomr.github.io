(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"1140х250_atlas_", frames: [[0,0,1140,250],[0,252,1140,250],[0,504,1140,250]]}
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
	this.spriteSheet = ss["1140х250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["1140х250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["1140х250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib._1140х250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Элиминаль® \nбьюти-детокс в действии", "italic bold 60px 'Arial'", "#AAF9F6");
	this.text.textAlign = "center";
	this.text.lineHeight = 69;
	this.text.lineWidth = 586;
	this.text.parent = this;
	this.text.setTransform(410,17.8);
	this.text.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,4);

	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.instance_1 = new lib._2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1);

	this.text_1 = new cjs.Text("Элиминаль® \nбьюти-детокс в действии", "italic bold 55px 'Arial'", "#AAF9F6");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 63;
	this.text_1.lineWidth = 566;
	this.text_1.parent = this;
	this.text_1.setTransform(395.9,28.7);
	this.text_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,4);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,1);

	this.text_2 = new cjs.Text("Элиминаль® \nбьюти-детокс в действии", "italic bold 55px 'Arial'", "#AAF9F6");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 63;
	this.text_2.lineWidth = 566;
	this.text_2.parent = this;
	this.text_2.setTransform(395.9,28.7);
	this.text_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:410,y:17.8,text:"Элиминаль® \nбьюти-детокс в действии",font:"italic bold 60px 'Arial'",color:"#AAF9F6",lineHeight:69,lineWidth:586}}]}).to({state:[{t:this.instance},{t:this.text_1,p:{x:395.9,y:28.7,text:"Элиминаль® \nбьюти-детокс в действии",font:"italic bold 55px 'Arial'",color:"#AAF9F6",lineHeight:63.45,lineWidth:566}},{t:this.instance_1},{t:this.text,p:{x:422.1,y:41.3,text:"Снятие похмельного синдрома\n\n Детокс терапия, очищение организма \n\nПомощь при отравлении",font:"italic bold 30px 'Arial'",color:"#FFFFFF",lineHeight:35.5,lineWidth:854}}]},43).to({state:[{t:this.instance},{t:this.text_2},{t:this.instance_1},{t:this.text_1,p:{x:422.1,y:41.3,text:"Снятие похмельного синдрома\n\n Детокс терапия, очищение организма \n\nПомощь при отравлении",font:"italic bold 30px 'Arial'",color:"#FFFFFF",lineHeight:35.5,lineWidth:854}},{t:this.instance_2},{t:this.text,p:{x:624.6,y:67.3,text:"Красота кожи \nв Ваших руках!",font:"italic bold 50px 'Arial'",color:"#FFFFFF",lineHeight:57.85,lineWidth:433}}]},67).to({state:[{t:this.instance},{t:this.text_2},{t:this.instance_1},{t:this.text_1,p:{x:422.1,y:41.3,text:"Снятие похмельного синдрома\n\n Детокс терапия, очищение организма \n\nПомощь при отравлении",font:"italic bold 30px 'Arial'",color:"#FFFFFF",lineHeight:35.5,lineWidth:854}},{t:this.instance_2},{t:this.text,p:{x:624.6,y:67.3,text:"Красота кожи \nв Ваших руках!",font:"italic bold 50px 'Arial'",color:"#FFFFFF",lineHeight:57.85,lineWidth:433}}]},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(568,124,1148,369);
// library properties:
lib.properties = {
	width: 1140,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/1140х250_atlas_.png", id:"1140х250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;