(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300х600_atlas_", frames: [[604,0,300,600],[0,0,300,600],[302,0,300,600]]}
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
	this.spriteSheet = ss["300х600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["300х600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["300х600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib._300х600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Разработано фармацевтами", "25px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 251;
	this.text.parent = this;
	this.text.setTransform(153.5,515.3);

	this.text_1 = new cjs.Text("Элиминаль® \nбьюти-детокс в действии", "italic bold 35px 'Arial'", "#AAF9F6");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 41;
	this.text_1.lineWidth = 280;
	this.text_1.parent = this;
	this.text_1.setTransform(148,44.8);

	this.instance = new lib._1();
	this.instance.parent = this;

	this.instance_1 = new lib._2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,1);

	this.text_2 = new cjs.Text("Элиминаль® \nбьюти-детокс в действии", "italic bold 35px 'Arial'", "#AAF9F6");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 41;
	this.text_2.lineWidth = 280;
	this.text_2.parent = this;
	this.text_2.setTransform(148,44.8);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1,p:{x:148,y:44.8,text:"Элиминаль® \nбьюти-детокс в действии",font:"italic bold 35px 'Arial'",color:"#AAF9F6",lineHeight:41.1,lineWidth:280,textAlign:"center"}},{t:this.text,p:{x:153.5,y:515.3,text:"Разработано фармацевтами",font:"25px 'Arial'",lineHeight:29.95,lineWidth:251,color:"#FFFFFF"}}]}).to({state:[{t:this.instance},{t:this.text_2},{t:this.text_1,p:{x:153.5,y:515.3,text:"Разработано фармацевтами",font:"25px 'Arial'",color:"#FFFFFF",lineHeight:29.95,lineWidth:251,textAlign:"center"}},{t:this.instance_1,p:{y:1}},{t:this.text,p:{x:149.5,y:392,text:"Снятие похмельного синдрома\n\n Детокс терапия, очищение организма \n\nПомощь при отравлении",font:"italic bold 20px 'Arial'",lineHeight:24.35,lineWidth:295,color:"#FFFFFF"}}]},38).to({state:[{t:this.instance_1,p:{y:0}},{t:this.text_1,p:{x:16.5,y:356.9,text:"Снятие похмельного синдрома\n\nДетокс терапия, очищение организма \n\nПомощь при отравлении",font:"bold 24px 'Arial'",color:"#FFFFFF",lineHeight:28.85,lineWidth:274,textAlign:""}},{t:this.instance_2,p:{x:0,y:1}},{t:this.text,p:{x:148.5,y:26.8,text:"Красота кожи в\n Ваших руках!",font:"italic bold 30px 'Arial'",lineHeight:35.5,lineWidth:264,color:"#00FFFF"}}]},56).to({state:[{t:this.instance_1,p:{y:0}},{t:this.text_1,p:{x:16.5,y:356.9,text:"Снятие похмельного синдрома\n\nДетокс терапия, очищение организма \n\nПомощь при отравлении",font:"bold 24px 'Arial'",color:"#FFFFFF",lineHeight:28.85,lineWidth:274,textAlign:""}},{t:this.instance_2,p:{x:1,y:0}},{t:this.text,p:{x:148.5,y:26.8,text:"Красота кожи в\n Ваших руках!",font:"italic bold 30px 'Arial'",lineHeight:35.5,lineWidth:264,color:"#00FFFF"}}]},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,634.9);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300х600_atlas_.png", id:"300х600_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;