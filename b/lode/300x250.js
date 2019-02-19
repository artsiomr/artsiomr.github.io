(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Hand.png?1550604171165", id:"Hand"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.Hand = function() {
	this.initialize(img.Hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,200);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00524B","#00A099"],[0,1],0,-38.1,0,90.5).s().p("AmmGqQivitAAj9QAAj7CviuQCuisD4AAQD5AACuCsQCwCuAAD7QAAD8iwCuQiuCsj5AAQj4AAiuisgAnEjiQhNArgHBcQgFA0AkA/QAYApAyA8QAIAIAaAkQAZAiALANIAYAcQAPATAOAOQAlAnARANQBQA8ApAXQChBeCmgWQBCgIA0gbQAsgWAUgrQAWgtgNgwQgNgwgugpQgDgBgCgEIgCgGIAFgEQAEgCADAAQAngFAzALQAQADATgIQALgEAFgQQAEgPgDgRIgbhUQgIgbgIgPQgLgTgSgMQgMgIgJADQgFABgDAGQgEAGgBAGQAAAHACAhIAEAjQAAAagZgJIgagIIhBgTQgVgDgaAJIgtAPIgKACIgLAAQADgOACgGQAAgDAEgEIAqgfQAWgQgLgQQgQgZgMgLQgLgJgPADQgPADgIANIg8BWIgCgBQABgIABgFQAIg7ABgcQACgUgOgLQgOgKgUAEIgNACQgIgBgGgEQgDgCgEABQgFABgEADQgNALAAATQAAATANAPQAUAYgHAYQgEAbggAMQgRAHgaAOIgqAWIgnAUIgCgBIArgdQAOgJAAgJQABgfAAgQQgCgagHgRQgDgIADgEQALgTgUgKQgVgLgHgZIgJgoQgNhCg1gdQgfgSg0gJQgSgDgSAAQg5AAg1Adg");
	this.shape.setTransform(54.7,-17.3,0.554,0.554);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#00524B","#00A099"],[0,1],0,-38.1,0,90.5).s().p("AjJAqIAAIWIkHAAIAAx+IEHAAIAAHzIFenzIEsAAImFIxIGVJLIksAAIAAACg");
	this.shape_1.setTransform(3.4,-20.8,0.553,0.553);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00524B","#00A099"],[0,1],0,-38.2,0,90.4).s().p("AlUIOQiChHhKh7IDjiEQAkBDBIAlQBGAlBYAAQB1AABTg7QBTg6AfhmInUAAIAAj0IHUAAQgfhmhSg6QhUg7h1AAQhXAAhHAlQhGAmgmBCIjkiDQBMh7CDhHQCEhICbAAQEBAACrCsQCpCqAAD/QAAD/iqCrQirCskAAAQidAAiEhIg");
	this.shape_2.setTransform(-57.6,-20.8,0.553,0.553);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E20613").s().p("AhyCyQgtgYgZgqIBOgtQAMAXAZANQAXANAeAAQAmgBAcgTQAcgTAMgkIieAAIAAhSICeAAQgMgigcgUQgcgTgmAAQgegBgYANQgXANgNAWIhOgtQAagpAsgYQAtgYA1gBQBVABA6A7QA5A6AABUQAABXg5A6Qg6A5hVAAQg1AAgtgYg");
	this.shape_3.setTransform(73,38.9,0.553,0.553);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E20613").s().p("ABhDoIAAhLIjBAAIAABLIhZAAIAAigIAoAAQAfgtAAhSIAAiwIEDAAIAAEuIApAAIAAChgAgag2QAABSgZAsIBqAAIAAjbIhRAAg");
	this.shape_4.setTransform(51.2,41,0.553,0.553);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E20613").s().p("AiOCQQg8g7ABhVQgBhUA8g7QA7g6BTAAQBUAAA7A6QA7A7ABBUQgBBVg7A7Qg7A6hUAAQhTAAg7g6gAhQhSQghAgAAAyQAAAzAhAhQAgAfAwAAQAvAAAggfQAighAAgzQAAgygiggQgggggvAAQgwAAggAgg");
	this.shape_5.setTransform(29.2,38.9,0.553,0.553);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E20613").s().p("AilDCIAAhTIgBAAIABAAIAAAAQAgAFAPgOQARgQAAguIAAjqIEMAAIAAGEIhZAAIAAkuIhZAAIAACQQAABfgyAnQggAZgxAAIgXgBg");
	this.shape_6.setTransform(6,39,0.553,0.553);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E20613").s().p("Ah5CLIAAkVICJAAQAtAAAaAXQAYAVAAAkQAAAkgaAUQAlARAAAsQAAAjgYAWQgaAXgtAAgAgrBFIA7AAQAZAAAAgUQAAgUgZAAIg7AAgAgrggIAyAAQAZAAAAgTQAAgUgZAAIgyAAg");
	this.shape_7.setTransform(-18.7,42,0.553,0.553);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.8,-53.8,175.7,107.7);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00524B","#00A099"],[0,1],0,-38.1,0,90.5).s().p("AmmGqQivitAAj9QAAj7CviuQCuisD4AAQD5AACuCsQCwCuAAD7QAAD8iwCuQiuCsj5AAQj4AAiuisgAnEjiQhNArgHBcQgFA0AkA/QAYApAyA8QAIAIAaAkQAZAiALANIAYAcQAPATAOAOQAlAnARANQBQA8ApAXQChBeCmgWQBCgIA0gbQAsgWAUgrQAWgtgNgwQgNgwgugpQgDgBgCgEIgCgGIAFgEQAEgCADAAQAngFAzALQAQADATgIQALgEAFgQQAEgPgDgRIgbhUQgIgbgIgPQgLgTgSgMQgMgIgJADQgFABgDAGQgEAGgBAGQAAAHACAhIAEAjQAAAagZgJIgagIIhBgTQgVgDgaAJIgtAPIgKACIgLAAQADgOACgGQAAgDAEgEIAqgfQAWgQgLgQQgQgZgMgLQgLgJgPADQgPADgIANIg8BWIgCgBQABgIABgFQAIg7ABgcQACgUgOgLQgOgKgUAEIgNACQgIgBgGgEQgDgCgEABQgFABgEADQgNALAAATQAAATANAPQAUAYgHAYQgEAbggAMQgRAHgaAOIgqAWIgnAUIgCgBIArgdQAOgJAAgJQABgfAAgQQgCgagHgRQgDgIADgEQALgTgUgKQgVgLgHgZIgJgoQgNhCg1gdQgfgSg0gJQgSgDgSAAQg5AAg1Adg");
	this.shape.setTransform(54.7,-17.3,0.554,0.554);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#00524B","#00A099"],[0,1],0,-38.1,0,90.5).s().p("AjJAqIAAIWIkHAAIAAx+IEHAAIAAHzIFenzIEsAAImFIxIGVJLIksAAIAAACg");
	this.shape_1.setTransform(3.4,-20.8,0.553,0.553);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00524B","#00A099"],[0,1],0,-38.2,0,90.4).s().p("AlUIOQiChHhKh7IDjiEQAkBDBIAlQBGAlBYAAQB1AABTg7QBTg6AfhmInUAAIAAj0IHUAAQgfhmhSg6QhUg7h1AAQhXAAhHAlQhGAmgmBCIjkiDQBMh7CDhHQCEhICbAAQEBAACrCsQCpCqAAD/QAAD/iqCrQirCskAAAQidAAiEhIg");
	this.shape_2.setTransform(-57.6,-20.8,0.553,0.553);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E20613").s().p("AhyCyQgtgYgZgqIBOgtQAMAXAZANQAXANAeAAQAmgBAcgTQAcgTAMgkIieAAIAAhSICeAAQgMgigcgUQgcgTgmAAQgegBgYANQgXANgNAWIhOgtQAagpAsgYQAtgYA1gBQBVABA6A7QA5A6AABUQAABXg5A6Qg6A5hVAAQg1AAgtgYg");
	this.shape_3.setTransform(73,38.9,0.553,0.553);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E20613").s().p("ABhDoIAAhLIjBAAIAABLIhZAAIAAigIAoAAQAfgtAAhSIAAiwIEDAAIAAEuIApAAIAAChgAgag2QAABSgZAsIBqAAIAAjbIhRAAg");
	this.shape_4.setTransform(51.2,41,0.553,0.553);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E20613").s().p("AiOCQQg8g7ABhVQgBhUA8g7QA7g6BTAAQBUAAA7A6QA7A7ABBUQgBBVg7A7Qg7A6hUAAQhTAAg7g6gAhQhSQghAgAAAyQAAAzAhAhQAgAfAwAAQAvAAAggfQAighAAgzQAAgygiggQgggggvAAQgwAAggAgg");
	this.shape_5.setTransform(29.2,38.9,0.553,0.553);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E20613").s().p("AilDCIAAhTIgBAAIABAAIAAAAQAgAFAPgOQARgQAAguIAAjqIEMAAIAAGEIhZAAIAAkuIhZAAIAACQQAABfgyAnQggAZgxAAIgXgBg");
	this.shape_6.setTransform(6,39,0.553,0.553);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E20613").s().p("Ah5CLIAAkVICJAAQAtAAAaAXQAYAVAAAkQAAAkgaAUQAlARAAAsQAAAjgYAWQgaAXgtAAgAgrBFIA7AAQAZAAAAgUQAAgUgZAAIg7AAgAgrggIAyAAQAZAAAAgTQAAgUgZAAIgyAAg");
	this.shape_7.setTransform(-18.7,42,0.553,0.553);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.8,-53.8,175.7,107.7);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhTE6IAApzIANAAIBGJSIBGpSIAPAAIAAJxIgJAAIAApTIhJJTIgIAAIhGpTIAAJVg");
	this.shape.setTransform(493.5,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguEQQgOgqAAhHIAAk9QAAhHAOgqQAQguAeAAQAfAAAQAuQAOApAABIIAAE9QAABIgOApQgQAugfAAQgeAAgQgugAgmkCQgNAkAAA+IAAE/QAAA/ANAkQANApAZAAQAbAAAOgpQALgkAAg/IAAk/QABg+gMgkQgOgqgbAAQgZAAgNAqg");
	this.shape_1.setTransform(475.5,33.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA0E5IAAk7QgQBFglAAQgeAAgPgwQgOgnAAhEIAAjgIAJAAIAADeQAAA9AMAjQANAqAaAAQAmAAAOhWIAAkSIAJAAIAAJxg");
	this.shape_2.setTransform(459.9,33.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABDE6IgRiUIhkAAIgRCUIgJAAIBHpzIAKAAIBHJzgAgxCUIBhAAIgwm3g");
	this.shape_3.setTransform(443.1,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag5E6IAApzIA5AAQA6AAAACYIAAA/QAABLgQAiQgRAkgfAAIgpAAIAAELgAgvAcIAoAAQAcAAAOgdQANgeAAhCIAAhBQAAiEgwAAIgvAAg");
	this.shape_4.setTransform(426.5,33.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag6E6IAApzIA5AAQAcAAANAhQAMAfAABCIAAAoQABA4gJAcQgKAfgWAIQAvAPAAB2IAAA4QAACRg7AAgAgyElIAxAAIAAABQAaAAANghQALgeAAg/IAAg4QAAhDgPgeQgOgagcAAIgqAAgAgygbIAlAAQAeAAANgWQANgYAAhCIAAgrQABg7gKgYQgLgdgZAAIgwAAg");
	this.shape_5.setTransform(411.6,33.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgtEQQgOgpAAhIIAAk9QAAhHAOgqQAQguAdAAQAfABAPAuQAOApAABIIAAAwIgJAAIAAgxQAAg/gLgjQgOgqgaAAQgZAAgNAqQgMAkAAA+IAAE+QAACMAyAAQAbAAANgqQALgjAAg/IAAhEIAJAAIAABDQAABHgOAqQgQAugeABQgegBgPgug");
	this.shape_6.setTransform(389.8,33.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag9E6QAIgXAAg0IAAhiQAAhuAugQQgYgKgLgeQgLggAAg6IAAg5QAAiNA5AAIA6AAIAAJxIgKAAIAAkiIgjAAIAAACQgdAAgOAXQgSAcAABCIAABiQAAA2gHAVgAgriqIAAA5QAABFAQAbQAOAVAfAAIAjAAIAAkqIgvAAQgxAAAAB8g");
	this.shape_7.setTransform(367.9,33.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAzE6IAApUIhlJUIgKAAIAApzIAJAAIAAJNIBkpMIAMAAIAAJyg");
	this.shape_8.setTransform(352.5,33.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABBFkIAAhTIiKAAIAAp0IAJAAIAAJgIBnAAIAApgIAJAAIAAJgIAaAAIAABng");
	this.shape_9.setTransform(335.5,37.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABEE6IgRiUIhmAAIgRCUIgIAAIBGpzIAMAAIBHJzgAgwCUIBhAAIgxm3g");
	this.shape_10.setTransform(316.6,33.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgDE6IAApgIg/AAIAAgTICFAAIAAATIg+AAIAAJgg");
	this.shape_11.setTransform(299.1,33.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag5E6IAApzIAJAAIAAELIApAAQBBAAAACRIAAA/QAACYg6AAgAgwEnIAwAAQAaAAAMglQALggAAg/IAAhBQAAhDgOgeQgNgcgdAAIgpAAg");
	this.shape_12.setTransform(283.5,33.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhJE7IAAgTQAZgBAJgrQAEgXAChEIAJnbIBiAAIAAJzIgJAAIAAphIhSAAIgIHJQgCBMgGAcQgKAwgbACg");
	this.shape_13.setTransform(267,33.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag9EoQASAAALgWQAHgRAIgsIAQhmIhImoIAJAAIBBGOIA/mOIAKAAIhSIOQgIA1gKAVQgMAbgXAAg");
	this.shape_14.setTransform(249.1,33.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AguEQQgNgqAAhHIAAk9QAAhHAOgqQAQguAdAAQAfABAQAuQANApAABIIAAAwIgKAAIAAgxQAAg/gLgjQgNgqgaAAQgZAAgOAqQgMAkABA+IAAE+QgBCMAzAAQAaAAANgqQALgjAAg/IAAhEIAKAAIAABDQAABHgOAqQgQAugeABQgegBgQgug");
	this.shape_15.setTransform(232.6,33.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag8E6IAApzIAJAAIAAExIBnAAIAAkxIAJAAIAAJxIgJAAIAAkxIhnAAIAAEzg");
	this.shape_16.setTransform(217.2,33.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AguEQQgOgpAAhIIAAk9QAAhHAOgqQAQguAeAAQAfAAAQAuQAOApAABIIAAE9QAABIgOApQgQAugfAAQgfAAgPgugAgnkCQgNAkAAA+IAAE/QAAA/ANAkQANApAaAAQAaAAAOgpQALgkAAg/IAAk/QABg+gMgkQgOgqgaAAQgaAAgNAqg");
	this.shape_17.setTransform(201.7,33.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhBE6IAApzIAJAAIAAFhIBplhIAKAAIhYEpIBfFJIgKAAIhak4IgWBIIAADxg");
	this.shape_18.setTransform(185.6,33.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag9E6QAIgVAAg2IAAhiQAAhuAugQQgYgKgLgeQgLggAAg6IAAg5QAAiNA6AAIA5AAIAAJxIgKAAIAAkiIgjAAIAAACQgcAAgPAXQgRAcAABCIAABiQAAA0gIAXgAgsiqIAAA5QAABFAQAbQAOAVAfAAIAjAAIAAkqIgvAAQgxAAAAB8g");
	this.shape_19.setTransform(163.1,33.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABDE6IgRiUIhkAAIgRCUIgJAAIBHpzIAKAAIBHJzgAgwCUIBhAAIgxm3g");
	this.shape_20.setTransform(146.1,33.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag8E6IAApzIAJAAIAAExIBnAAIAAkxIAJAAIAAJxIgJAAIAAkxIhnAAIAAEzg");
	this.shape_21.setTransform(129.1,33.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag5E6IAApzIAJAAIAAELIApAAQBBAAAACRIAAA/QAACYg6AAgAgyEnIAxAAQAaAAAMglQAKggAAg/IAAhBQAAhDgNgeQgOgcgcAAIgqAAg");
	this.shape_22.setTransform(114,33.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhIE7IAAgTQAYgBAJgrQAEgYABhDIAJnbIBiAAIAAJzIgJAAIAAphIhRAAIgIHJQgBBLgHAdQgKAwgbACg");
	this.shape_23.setTransform(97.4,33.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag1E6IAApzIBsAAIAAATIhjAAIAAEaIBTAAIAAAQIhTAAIAAEjIBjAAIAAATg");
	this.shape_24.setTransform(81.4,33.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgDE6IAApgIg/AAIAAgTICFAAIAAATIg/AAIAAJgg");
	this.shape_25.setTransform(66.1,33.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AA0E6IAApUIhlJUIgLAAIAApzIAJAAIAAJNIBkpMIAMAAIAAJyg");
	this.shape_26.setTransform(50.1,33.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag4E6IAApzIA3AAQA6AAAACYIAAA/QAABLgQAiQgQAkgfAAIgpAAIAAELgAgwAcIAqAAQAcAAANgdQAOgeAAhCIAAhBQAAiEgxAAIgwAAg");
	this.shape_27.setTransform(34.9,33.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ABDE6IgRiUIhkAAIgRCUIgIAAIBGpzIALAAIBGJzgAgxCUIBiAAIgxm3g");
	this.shape_28.setTransform(18.2,33.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag6E6IAApzIA5AAQAcAAAOAhQAMAgAABBIAAAoQAAA4gJAcQgJAfgXAIQAvAPAAB2IAAA4QAACRg7AAgAgxElIAxAAIAAABQAaAAANghQALgeAAg/IAAg4QAAhDgPgeQgOgagcAAIgqAAgAgygbIAmAAQAeAAAMgWQAOgYAAhCIAAgrQAAg7gKgYQgLgdgYAAIgxAAg");
	this.shape_29.setTransform(1.4,33.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ABLFmIAAhYIiXAAIAABYIgJAAIAAhrIAVAAQAJgTAEgdQABgTABgpIAMn0IBgAAIAAJgIAaAAIAABrgAgoCQIgCA6QgEAegHATIBnAAIAApNIhOAAg");
	this.shape_30.setTransform(-16.3,38);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag1E6IAApzIBrAAIAAATIhiAAIAAEaIBSAAIAAAQIhSAAIAAEjIBiAAIAAATg");
	this.shape_31.setTransform(-33.5,33.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag4E6IAApzIA4AAQA5AAAACYIAAA/QAABLgPAiQgRAkggAAIgoAAIAAELgAgxAcIAqAAQAcAAAOgdQANgeAAhCIAAhBQAAiEgxAAIgwAAg");
	this.shape_32.setTransform(-47.9,33.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag7E6IAApzIB3AAIAAJxIgJAAIAApgIhlAAIAAJig");
	this.shape_33.setTransform(-63.2,33.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("ABDE6IgRiUIhkAAIgSCUIgIAAIBHpzIAKAAIBHJzgAgxCUIBhAAIgwm3g");
	this.shape_34.setTransform(-86.6,33.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhTE6IAApzIANAAIBGJSIBGpSIAPAAIAAJxIgLAAIAApTIhHJTIgIAAIhHpTIAAJVg");
	this.shape_35.setTransform(-105.9,33.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AA0E6IAApUIhlJUIgLAAIAApzIAJAAIAAJNIBkpMIAMAAIAAJyg");
	this.shape_36.setTransform(-123.9,33.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("ABMFmIAAhYIiXAAIAABYIgJAAIAAhrIAUAAQAJgTADgdQACgUACgoIALn0IBhAAIAAJgIAaAAIAABrgAgnCQIgEA6QgDAegIATIBpAAIAApNIhPAAg");
	this.shape_37.setTransform(-141.8,38);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AguEQQgOgqAAhHIAAk9QAAhHAOgqQAQguAeAAQAfAAAQAuQAOApAABIIAAE9QAABIgOApQgQAugfAAQgeAAgQgugAgnkCQgMAkAAA+IAAE/QAAA/ALAkQAOApAaAAQAaAAAOgpQAMgkAAg/IAAk/QAAg+gMgkQgOgqgaAAQgaAAgNAqg");
	this.shape_38.setTransform(-159.6,33.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("ABBE6IhBk1IhBE1IgJAAIBHlFIhCkuIAJAAIA8EdIA/kdIAJAAIhDEuIBGFFg");
	this.shape_39.setTransform(-176.6,33.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag8E6IAApzIBvAAIAAATIhmAAIAAD/IAuAAQAhAAAQAdQARAfAABJIAABJQAACTg9AAgAg1EmIA0AAQAaAAANghQAMgfAAg/IAAhKQAAhBgOgaQgNgXgdAAIgvAAg");
	this.shape_40.setTransform(-193.4,33.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AguEQQgOgqAAhHIAAk9QAAhHAOgqQAQguAeAAQAfAAAQAuQAOAqAABHIAAE9QAABHgOAqQgQAugfAAQgeAAgQgugAgnkCQgMAkAAA+IAAE/QAAA/AMAkQANApAaAAQAbAAANgpQAMgkAAg/IAAk/QAAg+gMgkQgNgqgbAAQgaAAgNAqg");
	this.shape_41.setTransform(-209,33.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag2E6IAApzIBsAAIAAATIhiAAIAAEaIBSAAIAAAQIhSAAIAAEjIBiAAIAAATg");
	this.shape_42.setTransform(-223.8,33.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag7E6IAApzIAIAAIAAExIBmAAIAAkxIAJAAIAAJxIgJAAIAAkxIhmAAIAAEzg");
	this.shape_43.setTransform(-238.8,33.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgDAkIAAhHIAHAAIAABHg");
	this.shape_44.setTransform(-255.1,61.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AA0E6IAApUIhkJUIgMAAIAApzIAJAAIAAJNIBkpMIAMAAIAAJyg");
	this.shape_45.setTransform(-264.9,33.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AA0E6IAApUIhlJUIgLAAIAApzIAJAAIAAJNIBkpMIAMAAIAAJyg");
	this.shape_46.setTransform(-280.5,33.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ABBFkIAAhTIiKAAIAAp0IAJAAIAAJgIBnAAIAApgIAIAAIAAJgIAbAAIAABng");
	this.shape_47.setTransform(-297.3,37.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhBE6IAApzIAJAAIAAFhIBplhIAKAAIhYEpIBfFJIgKAAIhak4IgWBIIAADxg");
	this.shape_48.setTransform(-315.4,33.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("ABEE6IgRiUIhmAAIgRCUIgIAAIBGpzIALAAIBIJzgAgwCUIBhAAIgxm3g");
	this.shape_49.setTransform(-332.8,33.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag1E6IAApzIBrAAIAAATIhjAAIAAEaIBTAAIAAAQIhTAAIAAEjIBjAAIAAATg");
	this.shape_50.setTransform(-349.1,33.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag5E6IAApzIA5AAQA6AAAACYIAAA/QAABLgQAiQgRAkgfAAIgpAAIAAELgAgxAcIAqAAQAcAAAOgdQANgeAAhCIAAhBQAAg/gLggQgMglgaAAIgwAAg");
	this.shape_51.setTransform(-363.6,33.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag2E6IAApzIBtAAIAAATIhkAAIAAEaIBTAAIAAAQIhTAAIAAEjIBkAAIAAATg");
	this.shape_52.setTransform(-384.6,33.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhLE6IAApzIAJAAIAAELIApAAQAgAAARAlQAQAhAABLIAAA/QAACYg6AAgAhCEnIAwAAQAxAAAAiEIAAhBQAAhDgNgeQgOgcgdAAIgpAAgABDE5IAApyIAJAAIAAJyg");
	this.shape_53.setTransform(-401.1,33.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag8E6IAApzIAJAAIAAExIBnAAIAAkxIAJAAIAAJxIgJAAIAAkxIhnAAIAAEzg");
	this.shape_54.setTransform(-418.1,33.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AA0E5IAAk7QgRBFgkAAQgeAAgPgwQgOgnAAhEIAAjgIAJAAIAADeQAAA9AMAjQANAqAaAAQAmAAAOhWIAAkSIAJAAIAAJxg");
	this.shape_55.setTransform(-433.7,33.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AguEQQgOgqAAhHIAAk9QAAhHAOgqQAQguAeAAQAfAAAQAuQAOApAABIIAAE9QAABIgOApQgQAugfAAQgeAAgQgugAgnkCQgMAkABA+IAAE/QgBA/AMAkQAOApAZAAQAbAAANgpQANgkAAg/IAAk/QAAg+gNgkQgNgqgbAAQgZAAgOAqg");
	this.shape_56.setTransform(-449.2,33.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag7E6IAApzIBuAAIAAATIhmAAIAAD/IAvAAQAgAAAQAdQAQAeAABKIAABJQAACTg8AAgAg1EmIA0AAQAbAAANghQALgeAAhAIAAhKQAAhBgOgaQgOgXgcAAIgvAAg");
	this.shape_57.setTransform(-464.6,33.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AguEQQgOgqAAhHIAAk9QAAhHAPgqQAPguAeAAQAfAAAQAuQAOApAABIIAAE9QAABIgOApQgQAugfAAQgeAAgQgugAgnkCQgMAkAAA+IAAE/QAAA/AMAkQANApAaAAQAbAAAOgpQALgkAAg/IAAk/QAAg+gMgkQgNgqgbAAQgaAAgNAqg");
	this.shape_58.setTransform(-480.3,33.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ag8E6IAApzIB5AAIAAJxIgJAAIAApgIhnAAIAAJig");
	this.shape_59.setTransform(-495.8,33.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAwE6IAApVIhdJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_60.setTransform(490,-41.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Ag4E6QAHgXAAgzIAAhjQAAhuAqgQQgWgKgKgfQgKggAAg6IAAg4QAAiOA1AAIA1AAIAAJyIgIAAIAAkiIgfAAIAAACQgbgBgOAYQgRAcAABCIAABjQAAA1gHAVgAgnirIAAA5QABBFAPAbQAMAWAeAAIAgAAIAAkrIgtAAQgsABgBB7g");
	this.shape_61.setTransform(464.3,-41.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAwE6IAApVIhdJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_62.setTransform(447.5,-41.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAwE6IAAkyIhfAAIAAEyIgIAAIAApzIAIAAIAAExIBfAAIAAkxIAIAAIAAJzg");
	this.shape_63.setTransform(430.5,-41.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("ABAE6IgQiUIhfAAIgPCUIgIAAIBCpzIAKAAIBBJzgAgsCUIBaAAIgum2g");
	this.shape_64.setTransform(412.2,-41.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgqEQQgMgpAAhIIAAguIAIAAIAAAxQAAA+AKAkQAMAqAYAAQAYAAAMgqQALgkAAg/IAAgxQAAgzgNggQgNgfgUAAIgPAAIAAgSIAQAAQATAAAOgkQAMgjAAgwIAAgTQAAiNgvAAQguAAAACMIAAAbIgIAAIAAgbQAAhHAMgpQAPguAbAAQAcAAAPAvQAMApAABIIAAAQQAAAtgKAjQgLAkgSANQATAKALAiQAJAhAAAvIAAAwQAABHgMApQgPAugcAAQgbAAgPgug");
	this.shape_65.setTransform(394.1,-41.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AA/E6IgQiUIhdAAIgQCUIgIAAIBBpzIAKAAIBCJzgAgsCUIBaAAIgum2g");
	this.shape_66.setTransform(375.9,-41.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Ag8E6IAApzIAHAAIAAFhIBilhIAJAAIhREpIBYFJIgJAAIhVk4IgUBIIAADxg");
	this.shape_67.setTransform(357.3,-41.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgrEQQgNgqAAhGIAAk/QAAhHANgpQAPguAcAAQAcAAAPAuQAOApAABHIAAE/QAABGgOAqQgPAugcABQgbgBgQgugAgmkDQgKAlAAA+IAAFAQAAA/ALAkQAMAqAZAAQAXAAANgqQAMgkAAg/IAAlAQAAg+gMglQgMgogYAAQgZAAgNAog");
	this.shape_68.setTransform(339.8,-41.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAwE6IAAphIhgAAIAAJhIgIAAIAApzIBxAAIAAJzg");
	this.shape_69.setTransform(322.9,-41.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgqEQQgOgqAAhGIAAk/QAAhHANgpQAPguAcAAQAcAAAPAuQAOApAABHIAAE/QAABGgNAqQgPAugdABQgcgBgOgugAgkkDQgKAlAAA+IAAFAQAAA/AKAkQANAqAXAAQAZAAANgqQALgkAAg/IAAlAQAAg+gLglQgNgogZAAQgYAAgMAog");
	this.shape_70.setTransform(305.9,-41.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Ag2E6IAApzIA1AAQAaAAAMAiQAMAfAABBIAAAoQAAA4gIAcQgIAfgWAIQAsAPAAB2IAAA4QAACRg3AAgAguElIAtAAIAAABQAXAAAMghQALgfAAg+IAAg5QAAhDgOgdQgNgagaAAIgmAAgAgugcIAiAAQAbAAAMgWQANgYAAhCIAAgqQAAg6gJgZQgKgdgWAAIgtAAg");
	this.shape_71.setTransform(289.4,-41.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAwE6IAApVIhdJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_72.setTransform(272.3,-41.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgBE6IAAphIg8AAIAAgSIB7AAIAAATIg7AAIAAJgg");
	this.shape_73.setTransform(254.9,-41.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgqEQQgOgqAAhGIAAk/IACAAQAAhHANgpQAOguAbAAQAdAAAOAuQAOApAABHIAAE/QAABGgNAqQgPAugdABQgbgBgPgugAguigIAAFAQAAA/ALAkQAMAqAXAAQAZAAANgqQALgkAAg/IAAlAQAAg+gLglQgNgogZAAQguAAAACLg");
	this.shape_74.setTransform(237.6,-41.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Ag0E6IAApzIA0AAQA1AAAACYIAAA/QAABMgPAhQgPAkgeAAIglAAIAAELgAgsAcIAlAAQAaAAANgdQAMgeAAhCIAAhBQABg/gKggQgLglgYAAIgsAAg");
	this.shape_75.setTransform(221.2,-41.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAxE6IAAphIhhAAIAAJhIgIAAIAApzIBxAAIAAJzg");
	this.shape_76.setTransform(204.6,-41.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgyE6IAApzIBkAAIAAATIhcAAIAAEbIBOAAIAAAPIhNAAIAAEjIBcAAIAAATg");
	this.shape_77.setTransform(179.7,-41.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAwE6IAApVIhdJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_78.setTransform(163.3,-41.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ag8E6IAApzIAIAAIAAFhIBhlhIAJAAIhREpIBYFJIgJAAIhUk4IgUBIIAADxg");
	this.shape_79.setTransform(146,-41.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgqEQQgNgpABhIIAAk9QgBhIANgpQAOguAcgBQAcACAPAuQANAqgBBHIAAAwIgIAAIAAgxQAAg/gKgjQgMgqgYAAQgYAAgMAqQgLAjABA/IAAFAQgBCLAvAAQAYAAAMgpQAKgjAAg/IAAhGIAIAAIAABEQABBHgNApQgPAvgcAAQgcAAgOgvg");
	this.shape_80.setTransform(128.7,-41.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAwE6IAAkyIhfAAIAAEyIgIAAIAApzIAIAAIAAExIBfAAIAAkxIAIAAIAAJzg");
	this.shape_81.setTransform(111.9,-41.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAwE6IAApVIhdJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_82.setTransform(94.8,-41.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AA8FkIAAhUIh/AAIAApzIAIAAIAAJgIBeAAIAApgIAJAAIAAJgIAYAAIAABng");
	this.shape_83.setTransform(76.7,-37.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAwE6IAApUIhdJUIgKAAIAApzIAIAAIAAJOIBdpOIAKAAIAAJzg");
	this.shape_84.setTransform(58,-41.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("ABGFmIAAhZIiMAAIAABZIgIAAIAAhrIATAAQAIgTADgdQACgTABgpIALn0IBZAAIAAJgIAYAAIAABrgAglCQQgBAmgCAUQgDAegHATIBgAAIAApNIhJAAg");
	this.shape_85.setTransform(39,-37.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgxE6IAApzIBjAAIAAATIhbAAIAAEbIBMAAIAAAPIhMAAIAAEjIBbAAIAAATg");
	this.shape_86.setTransform(20.4,-41.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("ABGE6IAApWIhBJUIgIAAIhCpUIAAJWIgIAAIAApzIANAAIBAJSIBBpSIANAAIAAJzg");
	this.shape_87.setTransform(1.8,-41.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgCE6IAAphIg7AAIAAgSIB7AAIAAATIg6AAIAAJgg");
	this.shape_88.setTransform(-26.3,-41.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgNEQQgNgqAAhGIAAiYIg0AAIAAEyIgIAAIAApzIAIAAIAAExIA0AAIAAiXQABhHANgpQANguAcAAQAeAAAOAuQANApABBHIAAE/QgBBGgNAqQgPAugdABQgdgBgNgugAgRigIAAFAQAAA/AKAkQALAqAYAAQAZAAAMgqQAMgkAAg/IAAlAQAAg+gLglQgMgogaAAQguAAABCLg");
	this.shape_89.setTransform(-46.5,-41.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgyE6IAApzIBlAAIAAATIhcAAIAAEbIBNAAIAAAPIhNAAIAAEjIBcAAIAAATg");
	this.shape_90.setTransform(-65.9,-41.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("ABHE6IAApWIhDJUIgIAAIhCpUIAAJWIgHAAIAApzIAMAAIBBJSIBCpSIAMAAIAAJzg");
	this.shape_91.setTransform(-84.5,-41.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAwE6IAApVIhdJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_92.setTransform(-103.7,-41.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("Ag4E6QAIgXAAgzIAAhjQAAhvApgPQgVgKgKgfQgKggAAg6IAAg4QAAiOA1AAIA0AAIAAJyIgHAAIAAkiIghAAIAAACQgbgBgOAYQgPAcAABCIAABjQAAAxgIAZgAgnirIAAA5QAABFAPAbQANAWAdAAIAhAAIAAkrIgtAAQgtABAAB7g");
	this.shape_93.setTransform(-129.3,-41.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAxE6IAApVIheJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_94.setTransform(-146.2,-41.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAwE6IAAkyIhfAAIAAEyIgIAAIAApzIAIAAIAAExIBfAAIAAkxIAIAAIAAJzg");
	this.shape_95.setTransform(-163,-41.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgyE6IAApzIBlAAIAAATIhcAAIAAEbIBNAAIAAAPIhNAAIAAEjIBcAAIAAATg");
	this.shape_96.setTransform(-179.4,-41.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAwE6IAAk9QgPBEgiAAQgbAAgOgvQgNgnAAhFIAAjfIAIAAIAADfQAAA+ALAjQAMAqAYAAQAkgBAMhVIAAkUIAIAAIAAJzg");
	this.shape_97.setTransform(-195.8,-41.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgyE6IAApzIBlAAIAAATIhcAAIAAEbIBNAAIAAAPIhNAAIAAEjIBcAAIAAATg");
	this.shape_98.setTransform(-212,-41.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AhDE6IAAgTQAXAAAIgrQAEgYABhDIAInbIBbAAIAAJyIgJAAIAApgIhKAAIgIHJQgCBNgFAbQgJAwgaABg");
	this.shape_99.setTransform(-229.6,-41.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AA/E6IAApzIAIAAIAAJzgAhFE5IAApyIAIAAIAAEMIAlAAIAAgBQAeAAAPAkQAPAiABBKIAAA/QAACYg2AAgAg+EnIAtAAQAsAAABiFIAAhBQAAhDgNgeQgNgbgaAAIgmAAg");
	this.shape_100.setTransform(-257.4,-41.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("ABGFmIAAhZIiMAAIAABZIgIAAIAAhrIATAAQAIgTADgdQACgTABgpIALn0IBZAAIAAJgIAYAAIAABrgAgkCQQgBApgCARQgDAegHATIBgAAIAApNIhIAAg");
	this.shape_101.setTransform(-278,-37.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgrEQQgNgqABhGIAAk/QAAhHANgpQAOguAcAAQAdAAAOAuQAOApAABHIAAE/QAABGgOAqQgPAugcABQgcgBgPgugAgvigIAAFAQAAA/ALAkQAMAqAYAAQAZAAAMgqQALgjAAhAIAAlAQAAg+gMglQgMgogYAAQgvAAAACLg");
	this.shape_102.setTransform(-297,-41.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgCE6IAAphIg7AAIAAgSIB7AAIAAATIg7AAIAAJgg");
	this.shape_103.setTransform(-314.4,-41.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgxE6IAApzIBjAAIAAATIhbAAIAAEbIBMAAIAAAPIhMAAIAAEjIBbAAIAAATg");
	this.shape_104.setTransform(-331.1,-41.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("ABHE6IAApWIhDJUIgIAAIhCpUIAAJWIgIAAIAApzIANAAIBBJSIBCpSIANAAIAAJzg");
	this.shape_105.setTransform(-349.7,-41.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgDAkIAAhHIAHAAIAABHg");
	this.shape_106.setTransform(-372,-14);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AA/E6IgQiUIheAAIgPCUIgIAAIBBpzIAKAAIBCJzgAgtCUIBaAAIgtm2g");
	this.shape_107.setTransform(-385.1,-41.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("ABGE6IAApWIhCJUIgIAAIhDpUIAAJWIgHAAIAApzIAOAAIBAJSIBCpSIANAAIAAJzg");
	this.shape_108.setTransform(-405.5,-41.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AA/E6IgQiUIhdAAIgQCUIgIAAIBBpzIAKAAIBCJzgAgtCUIBcAAIgvm2g");
	this.shape_109.setTransform(-426.1,-41.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AhDE6IAAgTQAXAAAHgrQAFgYABhDIAInbIBbAAIAAJyIgJAAIAApgIhJAAIgIHJQgCBNgFAbQgKAwgZABg");
	this.shape_110.setTransform(-445.5,-41.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("Ag8E6IAApzIAIAAIAAFhIBhlhIAJAAIhREpIBYFJIgJAAIhUk4IgUBIIAADxg");
	this.shape_111.setTransform(-463.8,-41.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgyE6IAApzIBkAAIAAATIhbAAIAAEbIBNAAIAAAPIhNAAIAAEjIBbAAIAAATg");
	this.shape_112.setTransform(-480.6,-41.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("Ag1E6IAApzIA1AAQA1AAABCYIAAA/QgBBMgPAhQgPAkgeAAIglAAIAAELgAgsAcIAmAAQAaAAANgdQAMgeAAhCIAAhBQAAiEgtAAIgsAAg");
	this.shape_113.setTransform(-496.6,-41.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502,-73.8,1004,147.7);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAkIAAhHIAHAAIAABHg");
	this.shape.setTransform(-472.2,384.5,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhTE6IAApzIANAAIBGJSIBGpSIAPAAIAAJxIgJAAIAApTIhJJTIgIAAIhGpTIAAJVg");
	this.shape_1.setTransform(-288.1,472.9,0.469,0.469);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguEQQgOgqAAhHIAAk9QAAhHAOgqQAQguAeAAQAfAAAQAuQAOApAABIIAAE9QAABIgOApQgQAugfAAQgeAAgQgugAgmkCQgNAkAAA+IAAE/QAAA/ANAkQANApAZAAQAbAAAOgpQALgkAAg/IAAk/QABg+gMgkQgOgqgbAAQgZAAgNAqg");
	this.shape_2.setTransform(-296.5,472.9,0.469,0.469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA0E5IAAk7QgQBFglAAQgeAAgPgwQgOgnAAhEIAAjgIAJAAIAADeQAAA9AMAjQANAqAaAAQAmAAAOhWIAAkSIAJAAIAAJxg");
	this.shape_3.setTransform(-303.8,472.9,0.469,0.469);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABDE6IgRiUIhkAAIgRCUIgJAAIBHpzIAKAAIBHJzgAgxCUIBhAAIgwm3g");
	this.shape_4.setTransform(-311.8,472.9,0.469,0.469);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag5E6IAApzIA5AAQA6AAAACYIAAA/QAABLgQAiQgRAkgfAAIgpAAIAAELgAgvAcIAoAAQAcAAAOgdQANgeAAhCIAAhBQAAiEgwAAIgvAAg");
	this.shape_5.setTransform(-319.5,472.9,0.469,0.469);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag6E6IAApzIA5AAQAcAAANAhQAMAfAABCIAAAoQABA4gJAcQgKAfgWAIQAvAPAAB2IAAA4QAACRg7AAgAgyElIAxAAIAAABQAaAAANghQALgeAAg/IAAg4QAAhDgPgeQgOgagcAAIgqAAgAgygbIAlAAQAeAAANgWQANgYAAhCIAAgrQABg7gKgYQgLgdgZAAIgwAAg");
	this.shape_6.setTransform(-326.5,472.9,0.469,0.469);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtEQQgOgpAAhIIAAk9QAAhHAOgqQAQguAdAAQAfABAPAuQAOApAABIIAAAwIgJAAIAAgxQAAg/gLgjQgOgqgaAAQgZAAgNAqQgMAkAAA+IAAE+QAACMAyAAQAbAAANgqQALgjAAg/IAAhEIAJAAIAABDQAABHgOAqQgQAugeABQgegBgPgug");
	this.shape_7.setTransform(-336.7,472.9,0.469,0.469);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag9E6QAIgXAAg0IAAhiQAAhuAugQQgYgKgLgeQgLggAAg6IAAg5QAAiNA5AAIA6AAIAAJxIgKAAIAAkiIgjAAIAAACQgdAAgOAXQgSAcAABCIAABiQAAA2gHAVgAgriqIAAA5QAABFAQAbQAOAVAfAAIAjAAIAAkqIgvAAQgxAAAAB8g");
	this.shape_8.setTransform(-347,472.9,0.469,0.469);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAzE6IAApUIhlJUIgKAAIAApzIAJAAIAAJNIBkpMIAMAAIAAJyg");
	this.shape_9.setTransform(-354.2,472.9,0.469,0.469);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABBFkIAAhTIiKAAIAAp0IAJAAIAAJgIBnAAIAApgIAJAAIAAJgIAaAAIAABng");
	this.shape_10.setTransform(-362.2,474.8,0.469,0.469);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABEE6IgRiUIhmAAIgRCUIgIAAIBGpzIAMAAIBHJzgAgwCUIBhAAIgxm3g");
	this.shape_11.setTransform(-371.1,472.9,0.469,0.469);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDE6IAApgIg/AAIAAgTICFAAIAAATIg+AAIAAJgg");
	this.shape_12.setTransform(-379.2,472.9,0.469,0.469);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag5E6IAApzIAJAAIAAELIApAAQBBAAAACRIAAA/QAACYg6AAgAgwEnIAwAAQAaAAAMglQALggAAg/IAAhBQAAhDgOgeQgNgcgdAAIgpAAg");
	this.shape_13.setTransform(-386.6,472.9,0.469,0.469);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhJE7IAAgTQAZgBAJgrQAEgXAChEIAJnbIBiAAIAAJzIgJAAIAAphIhSAAIgIHJQgCBMgGAcQgKAwgbACg");
	this.shape_14.setTransform(-394.3,472.9,0.469,0.469);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag9EoQASAAALgWQAHgRAIgsIAQhmIhImoIAJAAIBBGOIA/mOIAKAAIhSIOQgIA1gKAVQgMAbgXAAg");
	this.shape_15.setTransform(-402.7,472.9,0.469,0.469);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AguEQQgNgqAAhHIAAk9QAAhHAOgqQAQguAdAAQAfABAQAuQANApAABIIAAAwIgKAAIAAgxQAAg/gLgjQgNgqgaAAQgZAAgOAqQgMAkABA+IAAE+QgBCMAzAAQAaAAANgqQALgjAAg/IAAhEIAKAAIAABDQAABHgOAqQgQAugeABQgegBgQgug");
	this.shape_16.setTransform(-410.4,472.9,0.469,0.469);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag8E6IAApzIAJAAIAAExIBnAAIAAkxIAJAAIAAJxIgJAAIAAkxIhnAAIAAEzg");
	this.shape_17.setTransform(-417.6,472.9,0.469,0.469);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AguEQQgOgpAAhIIAAk9QAAhHAOgqQAQguAeAAQAfAAAQAuQAOApAABIIAAE9QAABIgOApQgQAugfAAQgfAAgPgugAgnkCQgNAkAAA+IAAE/QAAA/ANAkQANApAaAAQAaAAAOgpQALgkAAg/IAAk/QABg+gMgkQgOgqgaAAQgaAAgNAqg");
	this.shape_18.setTransform(-424.9,472.9,0.469,0.469);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhBE6IAApzIAJAAIAAFhIBplhIAKAAIhYEpIBfFJIgKAAIhak4IgWBIIAADxg");
	this.shape_19.setTransform(-432.4,472.9,0.469,0.469);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag9E6QAIgVAAg2IAAhiQAAhuAugQQgYgKgLgeQgLggAAg6IAAg5QAAiNA6AAIA5AAIAAJxIgKAAIAAkiIgjAAIAAACQgcAAgPAXQgRAcAABCIAABiQAAA0gIAXgAgsiqIAAA5QAABFAQAbQAOAVAfAAIAjAAIAAkqIgvAAQgxAAAAB8g");
	this.shape_20.setTransform(-444,473.1,0.469,0.469);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ABDE6IgRiUIhkAAIgRCUIgJAAIBHpzIAKAAIBHJzgAgwCUIBhAAIgxm3g");
	this.shape_21.setTransform(-452,473,0.469,0.469);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag8E6IAApzIAJAAIAAExIBnAAIAAkxIAJAAIAAJxIgJAAIAAkxIhnAAIAAEzg");
	this.shape_22.setTransform(-459.9,473,0.469,0.469);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag5E6IAApzIAJAAIAAELIApAAQBBAAAACRIAAA/QAACYg6AAgAgyEnIAxAAQAaAAAMglQAKggAAg/IAAhBQAAhDgNgeQgOgcgcAAIgqAAg");
	this.shape_23.setTransform(-467,473,0.469,0.469);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhIE7IAAgTQAYgBAJgrQAEgYABhDIAJnbIBiAAIAAJzIgJAAIAAphIhRAAIgIHJQgBBLgHAdQgKAwgbACg");
	this.shape_24.setTransform(-474.8,473.1,0.469,0.469);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag1E6IAApzIBsAAIAAATIhjAAIAAEaIBTAAIAAAQIhTAAIAAEjIBjAAIAAATg");
	this.shape_25.setTransform(-482.3,473,0.469,0.469);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgDE6IAApgIg/AAIAAgTICFAAIAAATIg/AAIAAJgg");
	this.shape_26.setTransform(-489.5,473,0.469,0.469);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AA0E6IAApUIhlJUIgLAAIAApzIAJAAIAAJNIBkpMIAMAAIAAJyg");
	this.shape_27.setTransform(-497,473,0.469,0.469);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag4E6IAApzIA3AAQA6AAAACYIAAA/QAABLgQAiQgQAkgfAAIgpAAIAAELgAgwAcIAqAAQAcAAANgdQAOgeAAhCIAAhBQAAiEgxAAIgwAAg");
	this.shape_28.setTransform(-504.1,473,0.469,0.469);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ABDE6IgRiUIhkAAIgRCUIgIAAIBGpzIALAAIBGJzgAgxCUIBiAAIgxm3g");
	this.shape_29.setTransform(-511.9,473,0.469,0.469);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag6E6IAApzIA5AAQAcAAAOAhQAMAgAABBIAAAoQAAA4gJAcQgJAfgXAIQAvAPAAB2IAAA4QAACRg7AAgAgxElIAxAAIAAABQAaAAANghQALgeAAg/IAAg4QAAhDgPgeQgOgagcAAIgqAAgAgygbIAmAAQAeAAAMgWQAOgYAAhCIAAgrQAAg7gKgYQgLgdgYAAIgxAAg");
	this.shape_30.setTransform(-519.8,473,0.469,0.469);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABLFmIAAhYIiXAAIAABYIgJAAIAAhrIAVAAQAJgTAEgdQABgTABgpIAMn0IBgAAIAAJgIAaAAIAABrgAgoCQIgCA6QgEAegHATIBnAAIAApNIhOAAg");
	this.shape_31.setTransform(-528.1,475.1,0.469,0.469);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag1E6IAApzIBrAAIAAATIhiAAIAAEaIBSAAIAAAQIhSAAIAAEjIBiAAIAAATg");
	this.shape_32.setTransform(-536.2,473,0.469,0.469);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag4E6IAApzIA4AAQA5AAAACYIAAA/QAABLgPAiQgRAkggAAIgoAAIAAELgAgxAcIAqAAQAcAAAOgdQANgeAAhCIAAhBQAAiEgxAAIgwAAg");
	this.shape_33.setTransform(-542.9,473,0.469,0.469);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag7E6IAApzIB3AAIAAJxIgJAAIAApgIhlAAIAAJig");
	this.shape_34.setTransform(-550.1,473,0.469,0.469);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("ABDE6IgRiUIhkAAIgSCUIgIAAIBHpzIAKAAIBHJzgAgxCUIBhAAIgwm3g");
	this.shape_35.setTransform(-321.5,439.5,0.469,0.469);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhTE6IAApzIANAAIBGJSIBGpSIAPAAIAAJxIgLAAIAApTIhHJTIgIAAIhHpTIAAJVg");
	this.shape_36.setTransform(-330.6,439.5,0.469,0.469);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AA0E6IAApUIhlJUIgLAAIAApzIAJAAIAAJNIBkpMIAMAAIAAJyg");
	this.shape_37.setTransform(-339,439.5,0.469,0.469);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("ABMFmIAAhYIiXAAIAABYIgJAAIAAhrIAUAAQAJgTADgdQACgUACgoIALn0IBhAAIAAJgIAaAAIAABrgAgnCQIgEA6QgDAegIATIBpAAIAApNIhPAAg");
	this.shape_38.setTransform(-347.4,441.6,0.469,0.469);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AguEQQgOgqAAhHIAAk9QAAhHAOgqQAQguAeAAQAfAAAQAuQAOApAABIIAAE9QAABIgOApQgQAugfAAQgeAAgQgugAgnkCQgMAkAAA+IAAE/QAAA/ALAkQAOApAaAAQAaAAAOgpQAMgkAAg/IAAk/QAAg+gMgkQgOgqgaAAQgaAAgNAqg");
	this.shape_39.setTransform(-355.8,439.6,0.469,0.469);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ABBE6IhBk1IhBE1IgJAAIBHlFIhCkuIAJAAIA8EdIA/kdIAJAAIhDEuIBGFFg");
	this.shape_40.setTransform(-363.7,439.5,0.469,0.469);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag8E6IAApzIBvAAIAAATIhmAAIAAD/IAuAAQAhAAAQAdQARAfAABJIAABJQAACTg9AAgAg1EmIA0AAQAaAAANghQAMgfAAg/IAAhKQAAhBgOgaQgNgXgdAAIgvAAg");
	this.shape_41.setTransform(-371.6,439.5,0.469,0.469);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AguEQQgOgqAAhHIAAk9QAAhHAOgqQAQguAeAAQAfAAAQAuQAOAqAABHIAAE9QAABHgOAqQgQAugfAAQgeAAgQgugAgnkCQgMAkAAA+IAAE/QAAA/AMAkQANApAaAAQAbAAANgpQAMgkAAg/IAAk/QAAg+gMgkQgNgqgbAAQgaAAgNAqg");
	this.shape_42.setTransform(-378.9,439.6,0.469,0.469);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag2E6IAApzIBsAAIAAATIhiAAIAAEaIBSAAIAAAQIhSAAIAAEjIBiAAIAAATg");
	this.shape_43.setTransform(-385.8,439.5,0.469,0.469);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag7E6IAApzIAIAAIAAExIBmAAIAAkxIAJAAIAAJxIgJAAIAAkxIhmAAIAAEzg");
	this.shape_44.setTransform(-392.9,439.5,0.469,0.469);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AA0E6IAApUIhkJUIgMAAIAApzIAJAAIAAJNIBkpMIAMAAIAAJyg");
	this.shape_45.setTransform(-410.4,439.3,0.469,0.469);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AA0E6IAApUIhlJUIgLAAIAApzIAJAAIAAJNIBkpMIAMAAIAAJyg");
	this.shape_46.setTransform(-417.8,439.3,0.469,0.469);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ABBFkIAAhTIiKAAIAAp0IAJAAIAAJgIBnAAIAApgIAIAAIAAJgIAbAAIAABng");
	this.shape_47.setTransform(-425.6,441.3,0.469,0.469);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhBE6IAApzIAJAAIAAFhIBplhIAKAAIhYEpIBfFJIgKAAIhak4IgWBIIAADxg");
	this.shape_48.setTransform(-434.1,439.3,0.469,0.469);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("ABEE6IgRiUIhmAAIgRCUIgIAAIBGpzIALAAIBIJzgAgwCUIBhAAIgxm3g");
	this.shape_49.setTransform(-442.3,439.3,0.469,0.469);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag1E6IAApzIBrAAIAAATIhjAAIAAEaIBTAAIAAAQIhTAAIAAEjIBjAAIAAATg");
	this.shape_50.setTransform(-449.9,439.3,0.469,0.469);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag5E6IAApzIA5AAQA6AAAACYIAAA/QAABLgQAiQgRAkgfAAIgpAAIAAELgAgxAcIAqAAQAcAAAOgdQANgeAAhCIAAhBQAAg/gLggQgMglgaAAIgwAAg");
	this.shape_51.setTransform(-456.7,439.3,0.469,0.469);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag2E6IAApzIBtAAIAAATIhkAAIAAEaIBTAAIAAAQIhTAAIAAEjIBkAAIAAATg");
	this.shape_52.setTransform(-466.6,439.3,0.469,0.469);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhLE6IAApzIAJAAIAAELIApAAQAgAAARAlQAQAhAABLIAAA/QAACYg6AAgAhCEnIAwAAQAxAAAAiEIAAhBQAAhDgNgeQgOgcgdAAIgpAAgABDE5IAApyIAJAAIAAJyg");
	this.shape_53.setTransform(-474.3,439.3,0.469,0.469);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag8E6IAApzIAJAAIAAExIBnAAIAAkxIAJAAIAAJxIgJAAIAAkxIhnAAIAAEzg");
	this.shape_54.setTransform(-482.3,439.3,0.469,0.469);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AA0E5IAAk7QgRBFgkAAQgeAAgPgwQgOgnAAhEIAAjgIAJAAIAADeQAAA9AMAjQANAqAaAAQAmAAAOhWIAAkSIAJAAIAAJxg");
	this.shape_55.setTransform(-489.6,439.3,0.469,0.469);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AguEQQgOgqAAhHIAAk9QAAhHAOgqQAQguAeAAQAfAAAQAuQAOApAABIIAAE9QAABIgOApQgQAugfAAQgeAAgQgugAgnkCQgMAkABA+IAAE/QgBA/AMAkQAOApAZAAQAbAAANgpQANgkAAg/IAAk/QAAg+gNgkQgNgqgbAAQgZAAgOAqg");
	this.shape_56.setTransform(-496.8,439.4,0.469,0.469);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag7E6IAApzIBuAAIAAATIhmAAIAAD/IAvAAQAgAAAQAdQAQAeAABKIAABJQAACTg8AAgAg1EmIA0AAQAbAAANghQALgeAAhAIAAhKQAAhBgOgaQgOgXgcAAIgvAAg");
	this.shape_57.setTransform(-504.1,439.3,0.469,0.469);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AguEQQgOgqAAhHIAAk9QAAhHAPgqQAPguAeAAQAfAAAQAuQAOApAABIIAAE9QAABIgOApQgQAugfAAQgeAAgQgugAgnkCQgMAkAAA+IAAE/QAAA/AMAkQANApAaAAQAbAAAOgpQALgkAAg/IAAk/QAAg+gMgkQgNgqgbAAQgaAAgNAqg");
	this.shape_58.setTransform(-511.4,439.4,0.469,0.469);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ag8E6IAApzIB5AAIAAJxIgJAAIAApgIhnAAIAAJig");
	this.shape_59.setTransform(-518.7,439.3,0.469,0.469);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAwE6IAApVIhdJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_60.setTransform(-309.4,405.4,0.469,0.469);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Ag4E6QAHgXAAgzIAAhjQAAhuAqgQQgWgKgKgfQgKggAAg6IAAg4QAAiOA1AAIA1AAIAAJyIgIAAIAAkiIgfAAIAAACQgbgBgOAYQgRAcAABCIAABjQAAA1gHAVgAgnirIAAA5QABBFAPAbQAMAWAeAAIAgAAIAAkrIgtAAQgsABgBB7g");
	this.shape_61.setTransform(-321.4,405.4,0.469,0.469);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAwE6IAApVIhdJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_62.setTransform(-329.3,405.4,0.469,0.469);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAwE6IAAkyIhfAAIAAEyIgIAAIAApzIAIAAIAAExIBfAAIAAkxIAIAAIAAJzg");
	this.shape_63.setTransform(-337.3,405.4,0.469,0.469);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("ABAE6IgQiUIhfAAIgPCUIgIAAIBCpzIAKAAIBBJzgAgsCUIBaAAIgum2g");
	this.shape_64.setTransform(-345.9,405.4,0.469,0.469);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgqEQQgMgpAAhIIAAguIAIAAIAAAxQAAA+AKAkQAMAqAYAAQAYAAAMgqQALgkAAg/IAAgxQAAgzgNggQgNgfgUAAIgPAAIAAgSIAQAAQATAAAOgkQAMgjAAgwIAAgTQAAiNgvAAQguAAAACMIAAAbIgIAAIAAgbQAAhHAMgpQAPguAbAAQAcAAAPAvQAMApAABIIAAAQQAAAtgKAjQgLAkgSANQATAKALAiQAJAhAAAvIAAAwQAABHgMApQgPAugcAAQgbAAgPgug");
	this.shape_65.setTransform(-354.4,405.3,0.469,0.469);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AA/E6IgQiUIhdAAIgQCUIgIAAIBBpzIAKAAIBCJzgAgsCUIBaAAIgum2g");
	this.shape_66.setTransform(-362.9,405.4,0.469,0.469);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Ag8E6IAApzIAHAAIAAFhIBilhIAJAAIhREpIBYFJIgJAAIhVk4IgUBIIAADxg");
	this.shape_67.setTransform(-371.6,405.4,0.469,0.469);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgrEQQgNgqAAhGIAAk/QAAhHANgpQAPguAcAAQAcAAAPAuQAOApAABHIAAE/QAABGgOAqQgPAugcABQgbgBgQgugAgmkDQgKAlAAA+IAAFAQAAA/ALAkQAMAqAZAAQAXAAANgqQAMgkAAg/IAAlAQAAg+gMglQgMgogYAAQgZAAgNAog");
	this.shape_68.setTransform(-379.8,405.4,0.469,0.469);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAwE6IAAphIhgAAIAAJhIgIAAIAApzIBxAAIAAJzg");
	this.shape_69.setTransform(-387.7,405.4,0.469,0.469);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgqEQQgOgqAAhGIAAk/QAAhHANgpQAPguAcAAQAcAAAPAuQAOApAABHIAAE/QAABGgNAqQgPAugdABQgcgBgOgugAgkkDQgKAlAAA+IAAFAQAAA/AKAkQANAqAXAAQAZAAANgqQALgkAAg/IAAlAQAAg+gLglQgNgogZAAQgYAAgMAog");
	this.shape_70.setTransform(-395.7,405.4,0.469,0.469);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Ag2E6IAApzIA1AAQAaAAAMAiQAMAfAABBIAAAoQAAA4gIAcQgIAfgWAIQAsAPAAB2IAAA4QAACRg3AAgAguElIAtAAIAAABQAXAAAMghQALgfAAg+IAAg5QAAhDgOgdQgNgagaAAIgmAAgAgugcIAiAAQAbAAAMgWQANgYAAhCIAAgqQAAg6gJgZQgKgdgWAAIgtAAg");
	this.shape_71.setTransform(-403.5,405.4,0.469,0.469);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAwE6IAApVIhdJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_72.setTransform(-411.4,405.4,0.469,0.469);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgBE6IAAphIg8AAIAAgSIB7AAIAAATIg7AAIAAJgg");
	this.shape_73.setTransform(-419.6,405.4,0.469,0.469);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgqEQQgOgqAAhGIAAk/IACAAQAAhHANgpQAOguAbAAQAdAAAOAuQAOApAABHIAAE/QAABGgNAqQgPAugdABQgbgBgPgugAguigIAAFAQAAA/ALAkQAMAqAXAAQAZAAANgqQALgkAAg/IAAlAQAAg+gLglQgNgogZAAQguAAAACLg");
	this.shape_74.setTransform(-427.7,405.4,0.469,0.469);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Ag0E6IAApzIA0AAQA1AAAACYIAAA/QAABMgPAhQgPAkgeAAIglAAIAAELgAgsAcIAlAAQAaAAANgdQAMgeAAhCIAAhBQABg/gKggQgLglgYAAIgsAAg");
	this.shape_75.setTransform(-435.4,405.4,0.469,0.469);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAxE6IAAphIhhAAIAAJhIgIAAIAApzIBxAAIAAJzg");
	this.shape_76.setTransform(-443.2,405.4,0.469,0.469);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgyE6IAApzIBkAAIAAATIhcAAIAAEbIBOAAIAAAPIhNAAIAAEjIBcAAIAAATg");
	this.shape_77.setTransform(-454.3,405.6,0.469,0.469);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAwE6IAApVIhdJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_78.setTransform(-462.1,405.6,0.469,0.469);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ag8E6IAApzIAIAAIAAFhIBhlhIAJAAIhREpIBYFJIgJAAIhUk4IgUBIIAADxg");
	this.shape_79.setTransform(-470.1,405.6,0.469,0.469);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgqEQQgNgpABhIIAAk9QgBhIANgpQAOguAcgBQAcACAPAuQANAqgBBHIAAAwIgIAAIAAgxQAAg/gKgjQgMgqgYAAQgYAAgMAqQgLAjABA/IAAFAQgBCLAvAAQAYAAAMgpQAKgjAAg/IAAhGIAIAAIAABEQABBHgNApQgPAvgcAAQgcAAgOgvg");
	this.shape_80.setTransform(-478.3,405.5,0.469,0.469);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAwE6IAAkyIhfAAIAAEyIgIAAIAApzIAIAAIAAExIBfAAIAAkxIAIAAIAAJzg");
	this.shape_81.setTransform(-486.2,405.6,0.469,0.469);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAwE6IAApVIhdJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_82.setTransform(-494.2,405.6,0.469,0.469);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AA8FkIAAhUIh/AAIAApzIAIAAIAAJgIBeAAIAApgIAJAAIAAJgIAYAAIAABng");
	this.shape_83.setTransform(-502.6,407.6,0.469,0.469);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAwE6IAApUIhdJUIgKAAIAApzIAIAAIAAJOIBdpOIAKAAIAAJzg");
	this.shape_84.setTransform(-511.4,405.6,0.469,0.469);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("ABGFmIAAhZIiMAAIAABZIgIAAIAAhrIATAAQAIgTADgdQACgTABgpIALn0IBZAAIAAJgIAYAAIAABrgAglCQQgBAmgCAUQgDAegHATIBgAAIAApNIhJAAg");
	this.shape_85.setTransform(-520.3,407.6,0.469,0.469);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgxE6IAApzIBjAAIAAATIhbAAIAAEbIBMAAIAAAPIhMAAIAAEjIBbAAIAAATg");
	this.shape_86.setTransform(-529,405.6,0.469,0.469);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("ABGE6IAApWIhBJUIgIAAIhCpUIAAJWIgIAAIAApzIANAAIBAJSIBBpSIANAAIAAJzg");
	this.shape_87.setTransform(-537.8,405.6,0.469,0.469);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgCE6IAAphIg7AAIAAgSIB7AAIAAATIg6AAIAAJgg");
	this.shape_88.setTransform(-313.3,371.5,0.469,0.469);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgNEQQgNgqAAhGIAAiYIg0AAIAAEyIgIAAIAApzIAIAAIAAExIA0AAIAAiXQABhHANgpQANguAcAAQAeAAAOAuQANApABBHIAAE/QgBBGgNAqQgPAugdABQgdgBgNgugAgRigIAAFAQAAA/AKAkQALAqAYAAQAZAAAMgqQAMgkAAg/IAAlAQAAg+gLglQgMgogaAAQguAAABCLg");
	this.shape_89.setTransform(-322.8,371.5,0.469,0.469);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgyE6IAApzIBlAAIAAATIhcAAIAAEbIBNAAIAAAPIhNAAIAAEjIBcAAIAAATg");
	this.shape_90.setTransform(-331.9,371.5,0.469,0.469);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("ABHE6IAApWIhDJUIgIAAIhCpUIAAJWIgHAAIAApzIAMAAIBBJSIBCpSIAMAAIAAJzg");
	this.shape_91.setTransform(-340.6,371.5,0.469,0.469);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAwE6IAApVIhdJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_92.setTransform(-349.6,371.5,0.469,0.469);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("Ag4E6QAIgXAAgzIAAhjQAAhvApgPQgVgKgKgfQgKggAAg6IAAg4QAAiOA1AAIA0AAIAAJyIgHAAIAAkiIghAAIAAACQgbgBgOAYQgPAcAABCIAABjQAAAxgIAZgAgnirIAAA5QAABFAPAbQANAWAdAAIAhAAIAAkrIgtAAQgtABAAB7g");
	this.shape_93.setTransform(-362,371.5,0.469,0.469);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAxE6IAApVIheJUIgKAAIAApyIAIAAIAAJNIBcpMIALAAIAAJyg");
	this.shape_94.setTransform(-369.9,371.5,0.469,0.469);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAwE6IAAkyIhfAAIAAEyIgIAAIAApzIAIAAIAAExIBfAAIAAkxIAIAAIAAJzg");
	this.shape_95.setTransform(-377.8,371.5,0.469,0.469);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgyE6IAApzIBlAAIAAATIhcAAIAAEbIBNAAIAAAPIhNAAIAAEjIBcAAIAAATg");
	this.shape_96.setTransform(-385.5,371.5,0.469,0.469);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAwE6IAAk9QgPBEgiAAQgbAAgOgvQgNgnAAhFIAAjfIAIAAIAADfQAAA+ALAjQAMAqAYAAQAkgBAMhVIAAkUIAIAAIAAJzg");
	this.shape_97.setTransform(-393.1,371.5,0.469,0.469);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgyE6IAApzIBlAAIAAATIhcAAIAAEbIBNAAIAAAPIhNAAIAAEjIBcAAIAAATg");
	this.shape_98.setTransform(-400.8,371.5,0.469,0.469);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AhDE6IAAgTQAXAAAIgrQAEgYABhDIAInbIBbAAIAAJyIgJAAIAApgIhKAAIgIHJQgCBNgFAbQgJAwgaABg");
	this.shape_99.setTransform(-409,371.5,0.469,0.469);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AA/E6IAApzIAIAAIAAJzgAhFE5IAApyIAIAAIAAEMIAlAAIAAgBQAeAAAPAkQAPAiABBKIAAA/QAACYg2AAgAg+EnIAtAAQAsAAABiFIAAhBQAAhDgNgeQgNgbgaAAIgmAAg");
	this.shape_100.setTransform(-420.5,371.5,0.469,0.469);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("ABGFmIAAhZIiMAAIAABZIgIAAIAAhrIATAAQAIgTADgdQACgTABgpIALn0IBZAAIAAJgIAYAAIAABrgAgkCQQgBApgCARQgDAegHATIBgAAIAApNIhIAAg");
	this.shape_101.setTransform(-430.2,373.6,0.469,0.469);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgrEQQgNgqABhGIAAk/QAAhHANgpQAOguAcAAQAdAAAOAuQAOApAABHIAAE/QAABGgOAqQgPAugcABQgcgBgPgugAgvigIAAFAQAAA/ALAkQAMAqAYAAQAZAAAMgqQALgjAAhAIAAlAQAAg+gMglQgMgogYAAQgvAAAACLg");
	this.shape_102.setTransform(-439.1,371.5,0.469,0.469);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgCE6IAAphIg7AAIAAgSIB7AAIAAATIg7AAIAAJgg");
	this.shape_103.setTransform(-447.3,371.5,0.469,0.469);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgxE6IAApzIBjAAIAAATIhbAAIAAEbIBMAAIAAAPIhMAAIAAEjIBbAAIAAATg");
	this.shape_104.setTransform(-455.1,371.5,0.469,0.469);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("ABHE6IAApWIhDJUIgIAAIhCpUIAAJWIgIAAIAApzIANAAIBBJSIBCpSIANAAIAAJzg");
	this.shape_105.setTransform(-463.8,371.5,0.469,0.469);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AA/E6IgQiUIheAAIgPCUIgIAAIBBpzIAKAAIBCJzgAgtCUIBaAAIgtm2g");
	this.shape_106.setTransform(-479.9,371.5,0.469,0.469);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("ABGE6IAApWIhCJUIgIAAIhDpUIAAJWIgHAAIAApzIAOAAIBAJSIBCpSIANAAIAAJzg");
	this.shape_107.setTransform(-489.5,371.5,0.469,0.469);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AA/E6IgQiUIhdAAIgQCUIgIAAIBBpzIAKAAIBCJzgAgtCUIBcAAIgvm2g");
	this.shape_108.setTransform(-499.1,371.5,0.469,0.469);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AhDE6IAAgTQAXAAAHgrQAFgYABhDIAInbIBbAAIAAJyIgJAAIAApgIhJAAIgIHJQgCBNgFAbQgKAwgZABg");
	this.shape_109.setTransform(-508.2,371.5,0.469,0.469);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("Ag8E6IAApzIAIAAIAAFhIBhlhIAJAAIhREpIBYFJIgJAAIhUk4IgUBIIAADxg");
	this.shape_110.setTransform(-516.8,371.5,0.469,0.469);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgyE6IAApzIBkAAIAAATIhbAAIAAEbIBNAAIAAAPIhNAAIAAEjIBbAAIAAATg");
	this.shape_111.setTransform(-524.7,371.5,0.469,0.469);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("Ag1E6IAApzIA1AAQA1AAABCYIAAA/QgBBMgPAhQgPAkgeAAIglAAIAAELgAgsAcIAmAAQAaAAANgdQAMgeAAhCIAAhBQAAiEgtAAIgsAAg");
	this.shape_112.setTransform(-532.2,371.5,0.469,0.469);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgDAkIAAhHIAHAAIAABHg");
	this.shape_113.setTransform(-403.4,452.3,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-552.9,356.6,268.9,135.3);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00655F").s().p("AhJB3QgagVAAgmQABgrAigVQgagUAAgjQAAgnAbgWQAZgUAmAAQAnAAAZAUQAbAXAAAmQAAAjgaAUQAiAUABAsQAAAmgaAVQgbAWgvAAQgtAAgcgWgAgZAaQgLAJAAAPQAAAQALAJQAKAJAPAAQARAAALgJQAKgJAAgQQAAgPgKgJQgLgJgRAAQgPAAgKAJgAgUhKQgHAHAAAMQAAALAHAIQAJAIALAAQALAAAIgIQAIgHgBgMQABgMgIgIQgIgHgLAAQgLAAgJAIg");
	this.shape.setTransform(222,-12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00655F").s().p("Ag6B8QgbgPgMgdIA2gfQAJAdAiAAQASAAAJgJQAJgIAAgNQAAgNgJgIQgJgJgRAAIhTAAIALibICcAAIAAA6IhhAAIgDAlIAUAAQAnAAAaAYQAcAXAAAqQAAArgeAZQgbAXgpAAQggAAgagOg");
	this.shape_1.setTransform(200,-12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00655F").s().p("AgmA5IARhxIA8AAIgfBxg");
	this.shape_2.setTransform(173.9,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00655F").s().p("AAtCIIAAiSIhnCSIgwAAIAAkPIA/AAIAACSIBniSIAvAAIAAEPg");
	this.shape_3.setTransform(155.2,-12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00655F").s().p("AgeCIIAAjTIhGAAIAAg8IDJAAIAAA8IhHAAIAADTg");
	this.shape_4.setTransform(131.8,-12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00655F").s().p("AhYBmQgogoAAg9QAAg7AogoQApgpA7AAQAlAAAfARQAfARASAcIg2AfQgJgQgQgJQgRgJgVAAQgiAAgWAWQgWAXAAAjQAAAkAVAWQAWAWAjAAQAtAAASgiIA2AfQgRAeggAQQgeARgmAAIgGAAQg3AAgngmg");
	this.shape_5.setTransform(107.6,-12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00655F").s().p("AhjBlQgqgpAAg8QAAg6AqgpQAqgpA5AAQA6AAAqApQAqApAAA6QAAA7gqAqQgpAog7AAIAAAAQg6AAgpgogAg4g5QgYAXAAAiQAAAkAXAWQAXAWAiAAQAgABAXgWQAXgXAAgkQAAgjgXgWQgWgWghAAQghAAgXAWg");
	this.shape_6.setTransform(78.1,-12.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00655F").s().p("ABJCIIAAidIhFByIgGAAIhHhyIAACdIg+AAIAAkPIA/AAIBIB5IBJh5IA+AAIAAEPg");
	this.shape_7.setTransform(46.8,-12.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00655F").s().p("AAtCIIAAiSIhoCSIgvAAIAAkPIA+AAIAACSIBoiSIAvAAIAAEPg");
	this.shape_8.setTransform(17.8,-12.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00655F").s().p("AhYBmQgogoAAg9QAAg7AogoQApgpA7AAQAlAAAfARQAfARASAcIg2AfQgJgQgQgJQgRgJgVAAQgiAAgWAWQgWAXAAAjQAAAkAWAWQAVAWAjAAQAtAAASgiIA2AfQgSAegfAQQgfARglAAIgGAAQg3AAgngmg");
	this.shape_9.setTransform(-8.9,-12.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00655F").s().p("AAsCIIAAiSIhmCSIgwAAIAAkPIA+AAIAACSIBoiSIAuAAIAAEPg");
	this.shape_10.setTransform(-36,-12.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00655F").s().p("AhkCIIAAkPIBpAAQAlAAAYAWQAZAVAAAjQAAAigYATQAiATAAApQAAAkgZAWQgaAWglAAgAglBNIAyAAQAMAAAHgHQAHgHAAgMQAAgLgHgIQgHgHgMAAIgyAAgAglhNIAAAwIAqAAQAKAAAHgHQAHgHAAgLQAAgKgHgHQgGgGgLAAg");
	this.shape_11.setTransform(-60.1,-12.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00655F").s().p("ABACIIgOgrIhkAAIgNArIhFAAIBekPIBNAAIBeEPgAgfAiIA/AAIgghig");
	this.shape_12.setTransform(-85.7,-12.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00655F").s().p("AhlBNIA2gfQALAlAlAAQAnAAAAgdQAAgdgnAAIghAAIAAg1IAbAAQAiAAABgbQAAgbgfAAQgdAAgOAfIg0gfQAdg7BDAAQAnAAAbAWQAaAWABAlQAAAjgbAWQAkAUAAAqQAAAmgdAXQgdAWgrAAQhMAAgahBg");
	this.shape_13.setTransform(-110.1,-12.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00655F").s().p("AhVCIIAAkPICoAAIAAA8IhoAAIAAAtIBgAAIAAA6IhgAAIAAAwIBrAAIAAA8g");
	this.shape_14.setTransform(-130.7,-12.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00655F").s().p("AArCIIAAhsIhVAAIAABsIg+AAIAAkPIA+AAIAABpIBVAAIAAhpIA9AAIAAEPg");
	this.shape_15.setTransform(-154.3,-12.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00655F").s().p("AgZAaQgLgLAAgPQAAgNALgLQALgLAOAAQAOAAAMALQALALAAANQAAAPgLALQgMAKgOAAIAAAAQgOAAgLgKg");
	this.shape_16.setTransform(-182.6,-2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00655F").s().p("AhiCIIAAkPIBlAAQAoAAAcAbQAcAbAAAnQAAAogcAZQgcAcgoAAIgnAAIAABVgAgjgHIAnAAQAOAAAJgKQAJgKAAgPQABgOgKgLQgJgJgOgBIgnAAg");
	this.shape_17.setTransform(-194.8,-12.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00655F").s().p("AAoCIIAAjTIhQAAIAADTIg+AAIAAkPIDNAAIAAEPg");
	this.shape_18.setTransform(-219.7,-12.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00655F").s().p("AAmCIIhUh+IAAB+Ig+AAIAAkPIA+AAIAAB3IBRh3IBHAAIhcCFIBfCKg");
	this.shape_19.setTransform(-73.1,-59.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00655F").s().p("AhYBlQgognAAg+QAAg6ApgpQAogpA7AAQAlAAAfASQAfAQASAdIg2AfQgJgQgQgJQgRgJgVAAQgiAAgWAWQgWAWAAAkQAAAkAWAWQAWAWAiAAQAtAAASgiIA2AfQgSAegeAQQgfARgmAAIgEABQg5AAgngog");
	this.shape_20.setTransform(-100.1,-59.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00655F").s().p("AAqCIIAAhsIhUAAIAABsIg+AAIAAkPIA+AAIAABpIBUAAIAAhpIA/AAIAAEPg");
	this.shape_21.setTransform(-127.1,-59.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00655F").s().p("AAtCIIAAiSIhoCSIgvAAIAAkPIA+AAIAACSIBoiSIAvAAIAAEPg");
	this.shape_22.setTransform(-153.1,-59.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00655F").s().p("ABKCIIAAidIhHByIgEAAIhHhyIAACdIg+AAIAAkPIA+AAIBIB5IBJh5IA/AAIAAEPg");
	this.shape_23.setTransform(-182.1,-59.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00655F").s().p("AgYAaQgMgLAAgPQAAgOAMgKQALgMANAAQAPAAALAMQALAKAAAOQAAAPgLAKQgLAMgPAAQgNAAgLgLg");
	this.shape_24.setTransform(-213.4,-49);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00655F").s().p("AhMCIIAAkPICZAAIAAA8IhbAAIAADTg");
	this.shape_25.setTransform(-222.2,-59.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#00524B","#00A099"],[0,1],0,-53.4,0,31.7).s().p("ABqDwQgugIgygZQg3gag1gyQgqgogpg6Qgng2gShLIgDgNQgCgGAAgEIAAgFQgBgOAIgZQAHgVANgUQAQgbAhgHIAagEQAGgBAEAEIAFAFIADAFIA4BfQAFANgJALIgvApQgIAJgBAFQgBADACAHIANAZQAaApAiAjQAqApA1AbIAHAEQALADAHgHIAOgPIAdghIAEgEQAJgIAMAFIBZAyIATAOIABABIAAARQgEAbgHALQgIAQgSALQgNAJgcAKQgRAGgLABIgJABQgLAAgMgDg");
	this.shape_26.setTransform(-207.5,49.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E20613").s().p("AABD3IAAl1IhWAYIgchhICAgvIBjAAIAAHtg");
	this.shape_27.setTransform(-113,48.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E20613").s().p("AABD3IAAl1IhWAYIgchhICAgvIBjAAIAAHtg");
	this.shape_28.setTransform(-141.5,48.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E20613").s().p("AABD3IAAl1IhWAYIgchhICAgvIBjAAIAAHtg");
	this.shape_29.setTransform(-170.1,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.9,-73.7,464,147.4);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00655F").s().p("AhJB3QgagVAAgmQABgrAigVQgagUAAgjQAAgnAbgWQAZgUAmAAQAnAAAZAUQAbAXAAAmQAAAjgaAUQAiAUABAsQAAAmgaAVQgbAWgvAAQgtAAgcgWgAgZAaQgLAJAAAPQAAAQALAJQAKAJAPAAQARAAALgJQAKgJAAgQQAAgPgKgJQgLgJgRAAQgPAAgKAJgAgUhKQgHAHAAAMQAAALAHAIQAJAIALAAQALAAAIgIQAIgHgBgMQABgMgIgIQgIgHgLAAQgLAAgJAIg");
	this.shape.setTransform(-405.5,402.1,0.288,0.288);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00655F").s().p("Ag6B8QgbgPgMgdIA2gfQAJAdAiAAQASAAAJgJQAJgIAAgNQAAgNgJgIQgJgJgRAAIhTAAIALibICcAAIAAA6IhhAAIgDAlIAUAAQAnAAAaAYQAcAXAAAqQAAArgeAZQgbAXgpAAQggAAgagOg");
	this.shape_1.setTransform(-411.8,402.2,0.288,0.288);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00655F").s().p("AgmA5IARhxIA8AAIgfBxg");
	this.shape_2.setTransform(-419.4,406,0.288,0.288);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00655F").s().p("AAtCIIAAiSIhnCSIgwAAIAAkPIA/AAIAACSIBniSIAvAAIAAEPg");
	this.shape_3.setTransform(-424.7,402.1,0.288,0.288);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00655F").s().p("AgeCIIAAjTIhGAAIAAg8IDJAAIAAA8IhHAAIAADTg");
	this.shape_4.setTransform(-431.5,402.1,0.288,0.288);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00655F").s().p("AhYBmQgogoAAg9QAAg7AogoQApgpA7AAQAlAAAfARQAfARASAcIg2AfQgJgQgQgJQgRgJgVAAQgiAAgWAWQgWAXAAAjQAAAkAVAWQAWAWAjAAQAtAAASgiIA2AfQgRAeggAQQgeARgmAAIgGAAQg3AAgngmg");
	this.shape_5.setTransform(-438.5,402.1,0.288,0.288);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00655F").s().p("AhjBlQgqgpAAg8QAAg6AqgpQAqgpA5AAQA6AAAqApQAqApAAA6QAAA7gqAqQgpAog7AAIAAAAQg6AAgpgogAg4g5QgYAXAAAiQAAAkAXAWQAXAWAiAAQAgABAXgWQAXgXAAgkQAAgjgXgWQgWgWghAAQghAAgXAWg");
	this.shape_6.setTransform(-447,402.1,0.288,0.288);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00655F").s().p("ABJCIIAAidIhFByIgGAAIhHhyIAACdIg+AAIAAkPIA/AAIBIB5IBJh5IA+AAIAAEPg");
	this.shape_7.setTransform(-456,402.1,0.288,0.288);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00655F").s().p("AAtCIIAAiSIhoCSIgvAAIAAkPIA+AAIAACSIBoiSIAvAAIAAEPg");
	this.shape_8.setTransform(-464.4,402.1,0.288,0.288);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00655F").s().p("AhYBmQgogoAAg9QAAg7AogoQApgpA7AAQAlAAAfARQAfARASAcIg2AfQgJgQgQgJQgRgJgVAAQgiAAgWAWQgWAXAAAjQAAAkAWAWQAVAWAjAAQAtAAASgiIA2AfQgSAegfAQQgfARglAAIgGAAQg3AAgngmg");
	this.shape_9.setTransform(-472.1,402.1,0.288,0.288);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00655F").s().p("AAsCIIAAiSIhmCSIgwAAIAAkPIA+AAIAACSIBoiSIAuAAIAAEPg");
	this.shape_10.setTransform(-479.9,402.1,0.288,0.288);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00655F").s().p("AhkCIIAAkPIBpAAQAlAAAYAWQAZAVAAAjQAAAigYATQAiATAAApQAAAkgZAWQgaAWglAAgAglBNIAyAAQAMAAAHgHQAHgHAAgMQAAgLgHgIQgHgHgMAAIgyAAgAglhNIAAAwIAqAAQAKAAAHgHQAHgHAAgLQAAgKgHgHQgGgGgLAAg");
	this.shape_11.setTransform(-486.8,402.1,0.288,0.288);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00655F").s().p("ABACIIgOgrIhkAAIgNArIhFAAIBekPIBNAAIBeEPgAgfAiIA/AAIgghig");
	this.shape_12.setTransform(-494.2,402.1,0.288,0.288);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00655F").s().p("AhlBNIA2gfQALAlAlAAQAnAAAAgdQAAgdgnAAIghAAIAAg1IAbAAQAiAAABgbQAAgbgfAAQgdAAgOAfIg0gfQAdg7BDAAQAnAAAbAWQAaAWABAlQAAAjgbAWQAkAUAAAqQAAAmgdAXQgdAWgrAAQhMAAgahBg");
	this.shape_13.setTransform(-501.2,402.1,0.288,0.288);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00655F").s().p("AhVCIIAAkPICoAAIAAA8IhoAAIAAAtIBgAAIAAA6IhgAAIAAAwIBrAAIAAA8g");
	this.shape_14.setTransform(-507.1,402.1,0.288,0.288);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00655F").s().p("AArCIIAAhsIhVAAIAABsIg+AAIAAkPIA+AAIAABpIBVAAIAAhpIA9AAIAAEPg");
	this.shape_15.setTransform(-514,402.1,0.288,0.288);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00655F").s().p("AgZAaQgLgLAAgPQAAgNALgLQALgLAOAAQAOAAAMALQALALAAANQAAAPgLALQgMAKgOAAIAAAAQgOAAgLgKg");
	this.shape_16.setTransform(-522.1,405.2,0.288,0.288);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00655F").s().p("AhiCIIAAkPIBlAAQAoAAAcAbQAcAbAAAnQAAAogcAZQgcAcgoAAIgnAAIAABVgAgjgHIAnAAQAOAAAJgKQAJgKAAgPQABgOgKgLQgJgJgOgBIgnAAg");
	this.shape_17.setTransform(-525.6,402.2,0.288,0.288);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00655F").s().p("AAoCIIAAjTIhQAAIAADTIg+AAIAAkPIDNAAIAAEPg");
	this.shape_18.setTransform(-532.8,402.1,0.288,0.288);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00655F").s().p("AAmCIIhUh+IAAB+Ig+AAIAAkPIA+AAIAAB3IBRh3IBHAAIhcCFIBfCKg");
	this.shape_19.setTransform(-490.6,388.7,0.288,0.288);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00655F").s().p("AhYBlQgognAAg+QAAg6ApgpQAogpA7AAQAlAAAfASQAfAQASAdIg2AfQgJgQgQgJQgRgJgVAAQgiAAgWAWQgWAWAAAkQAAAkAWAWQAWAWAiAAQAtAAASgiIA2AfQgSAegeAQQgfARgmAAIgEABQg5AAgngog");
	this.shape_20.setTransform(-498.3,388.6,0.288,0.288);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00655F").s().p("AAqCIIAAhsIhUAAIAABsIg+AAIAAkPIA+AAIAABpIBUAAIAAhpIA/AAIAAEPg");
	this.shape_21.setTransform(-506.1,388.7,0.288,0.288);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00655F").s().p("AAtCIIAAiSIhoCSIgvAAIAAkPIA+AAIAACSIBoiSIAvAAIAAEPg");
	this.shape_22.setTransform(-513.6,388.7,0.288,0.288);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00655F").s().p("ABKCIIAAidIhHByIgEAAIhHhyIAACdIg+AAIAAkPIA+AAIBIB5IBJh5IA/AAIAAEPg");
	this.shape_23.setTransform(-522,388.7,0.288,0.288);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00655F").s().p("AgYAaQgMgLAAgPQAAgOAMgKQALgMANAAQAPAAALAMQALAKAAAOQAAAPgLAKQgLAMgPAAQgNAAgLgLg");
	this.shape_24.setTransform(-531,391.7,0.288,0.288);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00655F").s().p("AhMCIIAAkPICZAAIAAA8IhbAAIAADTg");
	this.shape_25.setTransform(-533.5,388.7,0.288,0.288);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#00524B","#00A099"],[0,1],0,-53.4,0,31.7).s().p("ABqDwQgugIgygZQg3gag1gyQgqgogpg6Qgng2gShLIgDgNQgCgGAAgEIAAgFQgBgOAIgZQAHgVANgUQAQgbAhgHIAagEQAGgBAEAEIAFAFIADAFIA4BfQAFANgJALIgvApQgIAJgBAFQgBADACAHIANAZQAaApAiAjQAqApA1AbIAHAEQALADAHgHIAOgPIAdghIAEgEQAJgIAMAFIBZAyIATAOIABABIAAARQgEAbgHALQgIAQgSALQgNAJgcAKQgRAGgLABIgJABQgLAAgMgDg");
	this.shape_26.setTransform(-495.2,452.2,0.831,0.831);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E20613").s().p("AABD3IAAl1IhWAYIgchhICAgvIBjAAIAAHtg");
	this.shape_27.setTransform(-416.7,451.2,0.831,0.831);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E20613").s().p("AABD3IAAl1IhWAYIgchhICAgvIBjAAIAAHtg");
	this.shape_28.setTransform(-440.3,451.2,0.831,0.831);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E20613").s().p("AABD3IAAl1IhWAYIgchhICAgvIBjAAIAAHtg");
	this.shape_29.setTransform(-464.1,451.2,0.831,0.831);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-535.8,384.6,133.2,87.9);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00655F").s().p("AAyChIAAhqIgXAAIhCBoIhTAAIBLhyQgdgNgTgbQgSgYAAgfQAAgtAgghQAhgfAtAAIB+AAIAAFAgAgdhOQgLAMAAAQQAAASALAMQALAMAPAAIA1AAIAAhTIg1AAQgPAAgLANg");
	this.shape.setTransform(2.6,304.7,0.732,0.732);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00655F").s().p("Ah9CgIAAk/IBKAAIAACsIB5isIA3AAIAAE/IhJAAIAAisIh5Csg");
	this.shape_1.setTransform(-18.6,304.8,0.732,0.732);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00655F").s().p("ABPC+IAAg8IieAAIAAA8IhJAAIAAiDIAiAAQAZgkAAhEIAAiQIDSAAIAAD4IAjAAIAACDgAgVgtQAABEgWAkIBXAAIAAizIhBAAg");
	this.shape_2.setTransform(-41.8,307,0.732,0.732);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00655F").s().p("Ah1B3QgwgxgBhGQAAhFAygwQAwgxBEAAQBFAAAxAwQAwAxAABFQAABFgwAxQgxAxhFAAQhEAAgxgwgAhChEQgbAbgBApQAAApAbAbQAbAaAoAAQAnABAagaQAbgbAAgqQAAgpgbgbQgagagnAAQgnAAgbAag");
	this.shape_3.setTransform(-65.8,304.7,0.732,0.732);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00655F").s().p("AiICfIAAhEQAbAEAMgMQANgNAAgnIAAi/IDdAAIAAE/IhJAAIAAj4IhJAAIAAB2QAABPgpAgQgaAVgnAAIgVgCg");
	this.shape_4.setTransform(-91.2,304.8,0.732,0.732);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00655F").s().p("AAvCgIAAj4IheAAIAAD4IhJAAIAAk/IDxAAIAAE/g");
	this.shape_5.setTransform(-112.5,304.8,0.732,0.732);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00655F").s().p("AhoB3QgvgwAAhHQAAhGAvgvQAwgxBGAAQArAAAmAUQAkAVAVAhIg/AlQgKgSgUgLQgTgKgZAAQgpAAgaAaQgZAaAAAqQAAAqAZAaQAaAaApAAQAYAAAVgKQATgLAKgSIA/AlQgWAjgjATQglAUgsAAIgBABQhGAAgvgwg");
	this.shape_6.setTransform(-135.1,304.7,0.732,0.732);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00655F").s().p("AhkCgIAAk/IDFAAIAABHIh8AAIAAA1IBxAAIAABEIhxAAIAAA5ICAAAIAABGg");
	this.shape_7.setTransform(-155.5,304.8,0.732,0.732);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00655F").s().p("AhzCgIAAk/IDMAAIAABHIiDAAIAAAxIAvAAQAygBAfAcQAeAZABAuQAAAugfAbQgeAcgxAAgAgqBbIAxAAQAQABAJgIQAMgIAAgRQAAgQgMgJQgJgHgQAAIgxAAg");
	this.shape_8.setTransform(-174,304.8,0.732,0.732);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00655F").s().p("ABYCgIAAi5IhTCGIgHAAIhTiGIAAC5IhKAAIAAk/IBJAAIBWCPIBWiPIBKAAIAAE/g");
	this.shape_9.setTransform(-5.8,268.4,0.732,0.732);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00655F").s().p("AhzCgIAAk/IB3AAQAwAAAgAgQAgAgAAAuQAAAuggAeQggAggwAAIguAAIAABlgAgqgHIAuAAQARAAALgMQALgNAAgRQAAgRgLgMQgMgMgQAAIguAAg");
	this.shape_10.setTransform(-28.8,268.4,0.732,0.732);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00655F").s().p("Ah0B3QgxgxAAhGQAAhFAxgwQAwgxBEAAQBFAAAwAwQAxAxAABFQAABFgxAxQgwAxhFAAQhEAAgwgwgAhChEQgbAbAAApQAAApAbAbQAaAaAoAAQAnABAagaQAcgbAAgqQAAgpgcgbQgagagnAAQgnAAgbAag");
	this.shape_11.setTransform(-52.6,268.4,0.732,0.732);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00655F").s().p("AgiCpIAAglQhCgJgngjQgngjAAg1QAAg1AngjQAngjBCgHIAAgnIBGAAIAAAnQBCAIAmAiQAnAkAAA0QAAA1gnAkQgmAjhCAIIAAAlgAhpAAQABA3BGAJIAAh/QhHAJAAA2gAAiA/QBIgHAAg4QAAg1hIgLg");
	this.shape_12.setTransform(-79.7,268.4,0.732,0.732);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00655F").s().p("AA1CgIg1hdIg2BdIhTAAIBgijIhbicIBTAAIAxBVIAxhVIBUAAIhbCcIBgCjg");
	this.shape_13.setTransform(-112.3,268.4,0.732,0.732);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00655F").s().p("AhjCgIAAk/IDFAAIAABHIh9AAIAAA1IBxAAIAABEIhxAAIAAA5IB/AAIAABGg");
	this.shape_14.setTransform(-131.1,268.4,0.732,0.732);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00655F").s().p("AhoB3QgvgwAAhHQAAhGAvgvQAwgxBGAAQArAAAlAUQAlAVAVAhIhBAlQgKgSgUgLQgTgKgZAAQgoAAgaAaQgZAaAAAqQAAAqAZAaQAaAaAoAAQAZAAAUgKQAUgLAJgSIA/AlQgVAjgkATQglAUgsAAIgBABQhEAAgvgwg");
	this.shape_15.setTransform(-152.1,268.4,0.732,0.732);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00655F").s().p("Ah2CgIAAk/IB8AAQArAAAcAZQAeAaAAApQAAAlgcAaQAoAXAAAvQAAAqgeAaQgeAagsAAgAgsBaIA6AAQAPABAIgJQAIgIAAgOQgBgOgHgIQgJgJgOAAIg6AAgAgsghIAxAAQANAAAIgIQAIgIAAgMQAAgMgIgIQgIgIgNAAIgxAAg");
	this.shape_16.setTransform(-173.7,268.4,0.732,0.732);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00655F").s().p("AhkCgIAAk/IDFAAIAABHIh7AAIAAA1IBxAAIAABEIhxAAIAAA5IB/AAIAABGg");
	this.shape_17.setTransform(-50.1,229.4,0.732,0.732);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00655F").s().p("AA1CgIAAitIh6CsIg3AAIAAk+IBJAAIAACsIB5isIA3AAIAAE/g");
	this.shape_18.setTransform(-70.7,229.4,0.732,0.732);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00655F").s().p("AAyCgIAAiAIhjAAIAAB/IhJAAIAAk+IBJAAIAAB7IBjAAIAAh7IBJAAIAAE/g");
	this.shape_19.setTransform(-93,229.4,0.732,0.732);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00655F").s().p("AhkCgIAAk/IDGAAIAABHIh8AAIAAA1IBwAAIAABEIhwAAIAAA5IB/AAIAABGg");
	this.shape_20.setTransform(-112.6,229.4,0.732,0.732);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00655F").s().p("AAwCgIAAhwQgZAKgcAAQgyAAgggbQghgcAAgwIAAhyIBJAAIAABoQAAAWAMAMQALALAVAAQAcAAAWgLIAAiKIBKAAIAAE/g");
	this.shape_21.setTransform(-132.9,229.4,0.732,0.732);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00655F").s().p("AhkCgIAAk/IDFAAIAABHIh8AAIAAA1IBxAAIAABEIhxAAIAAA5ICAAAIAABGg");
	this.shape_22.setTransform(-151.7,229.4,0.732,0.732);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00655F").s().p("AiICfIAAhFQAbAEAMgLQAOgNAAgnIAAi/IDcAAIAAE/IhJAAIAAj4IhJAAIAAB2QAABPgpAgQgaAVgnAAIgVgCg");
	this.shape_23.setTransform(-173.2,229.4,0.732,0.732);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00655F").s().p("AhkCgIAAk/IDFAAIAABHIh8AAIAAA1IByAAIAABEIhxAAIAAA5IB/AAIAABGg");
	this.shape_24.setTransform(51.5,190,0.732,0.732);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00655F").s().p("Ah0B2QgygwAAhGQAAhFAygwQAwgxBEAAQBFAAAxAwQAwAxAABFQAABFgwAxQgxAxhFAAQhEgBgwgwgAhBhEQgbAbgBApQAAApAbAbQAbAaAnAAQAnAAAagaQAcgbAAgpQAAgpgbgbQgagagoAAQgmAAgbAag");
	this.shape_25.setTransform(28.9,190,0.732,0.732);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00655F").s().p("AAyCgIAAiAIhjAAIAAB/IhJAAIAAk+IBJAAIAAB7IBjAAIAAh7IBJAAIAAE/g");
	this.shape_26.setTransform(4.6,190,0.732,0.732);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00655F").s().p("AhnB3QgwgwAAhHQAAhGAvgvQAwgxBGAAQArABAmATQAkAVAVAhIg/AlQgKgSgUgLQgTgKgZAAQgoABgaAaQgZAZAAAqQAAAqAZAaQAaAaAoAAQAZAAAUgKQAUgKAJgSIA/AlQgWAigjAUQglATgsAAQhGAAgvgvg");
	this.shape_27.setTransform(-18.2,189.9,0.732,0.732);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00655F").s().p("AAuCgIhliVIAACVIhJAAIAAk/IBJAAIAACLIBgiLIBTAAIhsCcIBxCjg");
	this.shape_28.setTransform(-37.8,190,0.732,0.732);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00655F").s().p("AhjCgIAAk/IDGAAIAABHIh9AAIAAA1IBxAAIAABEIhxAAIAAA5IB+AAIAABGg");
	this.shape_29.setTransform(-57.8,190,0.732,0.732);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00655F").s().p("AiICfIAAhFQAbAEAMgLQAOgNAAgnIAAi/IDcAAIAAE/IhKAAIAAj4IhIAAIAAB2QAABPgpAgQgaAVgoAAIgUgCg");
	this.shape_30.setTransform(-79.3,190,0.732,0.732);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00655F").s().p("AAwCgIAAj4IhfAAIAAD4IhJAAIAAk/IDxAAIAAE/g");
	this.shape_31.setTransform(-100.5,190,0.732,0.732);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00655F").s().p("ABWCgIAAi4IhTCGIgGAAIhTiGIAAC4IhJAAIAAk+IBJAAIBWCOIBWiPIBKAAIAAE/g");
	this.shape_32.setTransform(-125.2,189.9,0.732,0.732);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00655F").s().p("Ah1B3QgwgxAAhGQAAhFAwgwQAygxBDAAQBFAAAwAwQAyAxAABFQAABFgyAxQgwAxhFAAQhEAAgxgwgAhBhEQgbAbAAApQAAApAbAbQAaAaAnAAQAoAAAbgaQAbgbAAgpQAAgpgbgbQgbgagoAAQgnAAgaAag");
	this.shape_33.setTransform(-152.3,190,0.732,0.732);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00655F").s().p("AAtCgIhkiVIAACVIhJAAIAAk/IBJAAIAACLIBhiLIBSAAIhrCcIBwCjg");
	this.shape_34.setTransform(-173,190,0.732,0.732);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.2,177.7,242.2,143.3);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,5.9,0,-49.2).s().p("AAFAXIABgLIgNgIIgJAHIgLgIIAoghIAPAIIgLA0gAgCAAIALAFIAEgQIAAgCIgBABIgCAAg");
	this.shape.setTransform(-52.1,120.8,0.542,0.542);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,9.3,0,-45.8).s().p("AgegRIAMgNIAwAZIgKAIIgKgDIgKALIABAKIgHAJgAgPgMIAJAOIAHgHIgOgIIgCAAg");
	this.shape_1.setTransform(-35.4,118.9,0.542,0.542);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,4.3,0,-50.8).s().p("AgEgIIgKAFIgEgNIAggLIAEALIgLAFIAMAjIgLADg");
	this.shape_2.setTransform(-41.1,121.6,0.542,0.542);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,3,0,-52.1).s().p("AgPAaIADgyIAcAAIgBANIgPgBIAAAHIAPABIgBALIgPgDIAAAIIAOABIgBANg");
	this.shape_3.setTransform(-46,122.3,0.542,0.542);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,4,0,-51.1).s().p("AgDAaIAEgUIgGAAIgCgBIgBgBIgDAAIgDgBIgCgCIgBAAIgBgBIAAgBIgCgBIAAgCIgBgCIAAgGIABgDIAAgCIADgGIACgGIAMAFIgBACIgBADIgBADIgBAEIAAABIAAACIAAACIAAABIAAABIACABIAAABIACAAIABABIABAAIABABIABAAIABgBIACAAIAGgTIAMAEIgPAvg");
	this.shape_4.setTransform(-48.6,121.8,0.542,0.542);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,3.2,0,-51.9).s().p("AAAAbIgBgCIgEgBIgCgBIgBgBIgJgIIAAgBIgBgCIgCgGIAAgJIABgCIACgGIAAgBIAFgFIACgBIACgCIABgBIACAAIAEgBIABgBIABAAIAEgBIADAAIAAABIAFAAIABABIABAAIABANIAAgBIgBgBIgBAAIgDgBIgIAAIgCABIgBAAIAAABIAAABIgBABIgBACIgBABIgCABIAAABIAAACIgCACIAAACIACABIAAACIAAABIACADIABABIABABIABABIAAABIAAAAIADABIAIAAIACgBIABAAIABAAIABAAIAAgBIAAAAIACgBIAAgBIADALIgFACIgBABIgCABIgCAAIgDACg");
	this.shape_5.setTransform(-43.4,122.2,0.542,0.542);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,6,0,-49.1).s().p("AgbgNIAWgOIADgBIACAAIAHAAIABAAIACABIADACIAAACIABADIAAAFIgCAFIAIAAIAEADIABABIAAABIACACIABACIAAABIgBAAIAAAFIgDAFIgEAFIgEADIgSALgAAEAAIgCAAIgCACIAEAKIAIgEIADgDIAAgCIgDgDIgBAAIAAAAIgGAAgAgLgOIAFAIIABgBIACgCIABgBIABgCIAAgDIgBgBIAAgBIgDAAg");
	this.shape_6.setTransform(-38.3,120.7,0.542,0.542);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,9.8,0,-45.3).s().p("AgKAXIADgbIgPAOIgKgKIAjghIAIAJIgNAQIAZgCIAKAKIggAAIgBAig");
	this.shape_7.setTransform(-54.1,118.7,0.542,0.542);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,49.2,0,-5.9).s().p("AgVgSIAOgFIADgBIACgCIACgBIAJAAIACABIABAAIACACIACACIAAAAIACABIAEANIAAADIgIAGIgKAEIgCACIAHAPIgLAGgAgCgOIgCACIAEALIAEgCIAAgBIADgEIAAgBIgBgCIAAgBIABgBIgCgCIgFAAg");
	this.shape_8.setTransform(-50,97.3,0.542,0.542);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,46.6,0,-8.5).s().p("AgFAaIAQgaIghAPIgKgIIAbgnIAKAGIgRAaIAhgNIAMAGIgcAog");
	this.shape_9.setTransform(-37.1,98.7,0.542,0.542);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,41.8,0,-13.3).s().p("AgNASIAMgLIgWAAIgIgIIAWAAIAAgCIgBgCIAAgNIACgDIAGgGIAHAAIACABIABACIADABIAEAEIARARIglAegAAAgJIAAABIAAADIAAACIACADIALgDIgCgDIgFgEIgGAAg");
	this.shape_10.setTransform(-34.5,101.3,0.542,0.542);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,51,0,-4.1).s().p("AgNgYIAPgDIAYAwIgOABIgFgJIgPACIgEALIgMACgAgEgKIgEAPIAKgBIgGgPg");
	this.shape_11.setTransform(-46.4,96.3,0.542,0.542);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,51,0,-4.1).s().p("AAHAaIACgUIgRgCIgCATIgOgBIAHgxIAMABIgCAUIAQADIACgTIAOABIgGAxg");
	this.shape_12.setTransform(-43,96.3,0.542,0.542);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,45.9,0,-9.2).s().p("AgcgTIANgKIAsAcIgLAHIgKgGIgLAMIADALIgKAIgAgNgKIAGAPIAIgHIgNgKIgBAAg");
	this.shape_13.setTransform(-52.4,99.1,0.542,0.542);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,42.7,0,-12.4).s().p("AgWgEIAUgWIAGAHIgJANIAcAYIgJAKg");
	this.shape_14.setTransform(-55.1,100.8,0.542,0.542);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#E1B347","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.522,0.596,0.69,0.8,0.914,1],0,49.7,0,-5.4).s().p("AgTAYIAOgkIgKgEIAEgKIAfAMIgEALIgLgEIgMAig");
	this.shape_15.setTransform(-39.6,97,0.542,0.542);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DE2121").s().p("AgPAjIgOgHIgGgGIgBgBIgBgBIgBgBIgCgDIAAgFIgBgDIAAgOIABgCIAAgFIACgEIABgBIABgDIACgCIABgBIABgBIADgCIACgCIAGgDIACAAIAEgCIAeAAIACABIABAAIAKAFIACADIAGAGIABABIACAEIAAAEIABADIACAGIAAAKIgBACIAAAFIgCADIgCACIgBABIgGAGIgOAHgAgIgMIAAAXIACACIABABIADADIAGAAIACgCIABgBIAAgBIACgBIABgBIABgBIAAgKIABAAIAAgMIgFgFIgBgBIgBgBIgGAAg");
	this.shape_16.setTransform(-46.4,109,0.542,0.542);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DE2121").s().p("AAPApIAAgMIgcAAIAAAMIgbAAIAAgfIACAAIAEgEIACgBIAAgtIBEAAIAAAUIABAAIAAAeIAEAAIAAAfgAAJALIgBgeIgQAAIAAAZIgBABIgDAEIAVAAIAAAAg");
	this.shape_17.setTransform(-41.8,109.2,0.542,0.542);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DE2121").s().p("AgbAjIgFgBIAAgTIADABIAAABIACAAIADABIAAAAIACABIAKAAIACgBIABAAIACgBIACAAIABgBIACAAIAAgBIACgBIAAgBIAAgCIABgBIAAgBIACgCIgXAAIAAgOIAVAAIAAgBIAAgCIgBgBIAAgBIAAgBIgCgBIgCgBIAAAAIgBgBIgCgBIgFAAIgCgBIgIAAIgCABIAAAAIgDABIgCAAIAAABIgDABIAAgSIAFgBIADAAIAEgBIAIAAIAFABIAFAAIACABIABAAIADABIACAAIACABIABAAIAJAEIADACIACABIABACIACABIAAACIACABIABACIAAACIACABIAAACIAAADIACACIAAAMIgCACIAAACIAAACIgCACIAAACIgBACIgCABIAAACIgCABIgDADIgDACIgHADIgCAAIgBABIgCABIgCAAIgDABIgBAAIgCABg");
	this.shape_18.setTransform(-37.5,108.9,0.542,0.542);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DE2121").s().p("AghAjIgGgXIAEAAIABgBIABAAIACgCIAAAAIAAgCIACAAIAAgqIBGAAIAABEIgeAAIAAgvIgNAAIAAAeIgBABIAAAEIgBABIAAABIgCABIgBACIgCADIgBABIgDADIgDAAIgCAAIgDABIgDAAIgDABg");
	this.shape_19.setTransform(-51.3,108.9,0.542,0.542);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag8C8IAAh+Ih+AAIAAh7IB+AAIAAh+IB6AAIAAB+IB9AAIAAB7Ih+AAIAAB+gAixA1IB+AAIAAB+IBnAAIAAh+IB/AAIAAhpIh/AAIAAh+IhnAAIAAB+Ih+AAg");
	this.shape_20.setTransform(-44.7,109.3,0.542,0.542);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#E1B347","#E7C270","#EDD29A","#F1DCB4","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.141,0.31,0.443,0.522,0.596,0.69,0.8,0.914,1],0,18,0,-18.2).s().p("Ag0CzIAAh+Ih+AAIAAhpIB+AAIAAh+IBoAAIAAB+IB/AAIAABpIh/AAIAAB+g");
	this.shape_21.setTransform(-44.6,109.3,0.542,0.542);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DE2121").s().p("AjKDLQhUhVAAh2QAAh1BUhVQBVhUB1AAQB3AABUBUQBUBVAAB1QAAB2hUBVQhUBUh3AAQh2AAhUhUg");
	this.shape_22.setTransform(-44.6,109.3,0.542,0.542);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#E1B347","#E7C270","#EDD29A","#F1DCB4","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.141,0.31,0.443,0.522,0.596,0.69,0.8,0.914,1],0,31.3,0,-31).s().p("AjSDTQhXhXAAh8QAAh7BXhXQBXhXB7AAQB8AABXBXQBXBYAAB6QAAB8hXBXQhXBXh8AAQh7AAhXhXg");
	this.shape_23.setTransform(-44.6,109.3,0.542,0.542);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AjaDbQhbhbABiAQgBh/BbhaQBbhbB/AAQCAAABaBbQBbBaAAB/QAACAhbBbQhaBbiAgBQh/ABhbhbg");
	this.shape_24.setTransform(-44.6,109.3,0.542,0.542);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#E1B347","#E7C270","#EDD29A","#F1DCB4","#F2E0BE","#F1DEB8","#EFD8A8","#EBCD8D","#E6BF67","#E1B347"],[0,0.141,0.31,0.443,0.522,0.596,0.69,0.8,0.914,1],0,31.3,0,-31).s().p("AjdDfQhchdgBiCQABiBBchcQBchcCBgBQCCABBcBcQBdBcAACBQAACChdBdQhcBciCAAQiBAAhchcg");
	this.shape_25.setTransform(-44.6,109.3,0.542,0.542);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,92.2,34.2,34.1);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hand();
	this.instance.setTransform(-154,-21,0.607,0.607);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154,-21,151.7,121.4);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EhV6APnIAA/NMCr1AAAIAAfNg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A5A8AB","#F6FBFF","#F6FBFF","#D5D9DC","#BABEC1","#ABAEB1","#A5A8AB"],[0,0.349,0.651,0.749,0.847,0.933,1],-549.9,0.1,550,0.1).s().p("EhV7APnIAA/OMCr2AAAIAAfOg");
	this.shape.setTransform(550,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1100,200);


(lib.Hand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Анимация9("synched",0);
	this.instance.setTransform(418.8,101.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Анимация10("synched",0);
	this.instance_1.setTransform(418.8,101.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},143).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},31).to({state:[{t:this.instance_1}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(143).to({_off:false},0).to({alpha:1},4).to({startPosition:0},1).to({startPosition:0},31).to({_off:true,alpha:0},3).wait(1));

	// Слой 10
	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.setTransform(-98.6,398.3,0.425,0.425,0,0,0,-44.5,109.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({regX:-44.6,scaleX:2.67,scaleY:2.67,x:-97.6,y:398.7,alpha:1},6).to({regX:-44.5,x:-97.4},126).to({regX:-44.6,scaleX:0.66,scaleY:0.66,x:-97.3,alpha:0},6).to({x:-5.8},5).to({regX:-44.4,regY:109.5,scaleX:2.43,scaleY:2.43,x:-5.6,y:398.8,alpha:1},5).to({startPosition:0},25).to({scaleX:0.34,scaleY:0.34,x:-5.8,y:398.9,alpha:0},4).wait(1));

	// Layer 1
	this.instance_3 = new lib.Анимация7("synched",0);
	this.instance_3.setTransform(537.6,103.3);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация8("synched",0);
	this.instance_4.setTransform(537.6,103.3);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},26).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},48).to({state:[{t:this.instance_3}]},58).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},5).to({state:[]},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({startPosition:0},2).to({startPosition:0},48).to({startPosition:0},58).to({startPosition:0},4).to({_off:true,alpha:0},5).wait(40));

	// Text1
	this.instance_5 = new lib.Анимация5("synched",0);
	this.instance_5.setTransform(19.2,277.8,0.684,0.684,0,0,0,-104.9,50.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(76).to({_off:false},0).to({regY:50.9,x:19.1,y:277.9},58).to({y:277.8},3).to({regY:50.8,x:19.2,alpha:0},5).to({_off:true},1).wait(40));

	// Layer 1
	this.instance_6 = new lib.Анимация11("synched",0);
	this.instance_6.setTransform(48.1,416.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Анимация12("synched",0);
	this.instance_7.setTransform(48.1,416.3);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},11).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},55).to({state:[{t:this.instance_7}]},4).to({state:[]},1).wait(107));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({alpha:1},5).to({startPosition:0},55).to({_off:true,alpha:0},4).wait(108));

	// Hand
	this.instance_8 = new lib.Анимация1("synched",0);
	this.instance_8.setTransform(10,472.5,1.275,1.275);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:0.1,regY:0.1,x:10.1,y:472.7,alpha:1},6).to({startPosition:0},128).to({regX:0,regY:0,x:10,y:472.5,alpha:0},9).to({_off:true},1).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.3,445.7,193.5,154.8);


// stage content:



(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.button.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.eco.lode.by", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Logo Small
	this.button = new lib.link();
	this.button.setTransform(150.1,125,0.273,1.25,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Hand
	this.instance = new lib.Hand_1();
	this.instance.setTransform(149.4,-350);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Back();
	this.instance_1.setTransform(150,125,0.227,1.5,-90,0,0,550,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(113,125,337,250.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;