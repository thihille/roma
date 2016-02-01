function PxLoaderImage(url,tags,priority){var self=this,loader=null;this.img=new Image();this.tags=tags;this.priority=priority;var onReadyStateChange=function(){if(self.img.readyState==='complete'){removeEventHandlers();loader.onLoad(self)}};var onLoad=function(){removeEventHandlers();loader.onLoad(self)};var onError=function(){removeEventHandlers();loader.onError(self)};var removeEventHandlers=function(){self.unbind('load',onLoad);self.unbind('readystatechange',onReadyStateChange);self.unbind('error',onError)};this.start=function(pxLoader){loader=pxLoader;self.bind('load',onLoad);self.bind('readystatechange',onReadyStateChange);self.bind('error',onError);self.img.src=url};this.checkStatus=function(){if(self.img.complete){removeEventHandlers();loader.onLoad(self)}};this.onTimeout=function(){removeEventHandlers();if(self.img.complete){loader.onLoad(self)}else{loader.onTimeout(self)}};this.getName=function(){return url};this.bind=function(eventName,eventHandler){if(self.img.addEventListener){self.img.addEventListener(eventName,eventHandler,false)}else if(self.img.attachEvent){self.img.attachEvent('on'+eventName,eventHandler)}};this.unbind=function(eventName,eventHandler){if(self.img.removeEventListener){self.img.removeEventListener(eventName,eventHandler,false)}else if(self.img.detachEvent){self.img.detachEvent('on'+eventName,eventHandler)}}}PxLoader.prototype.addImage=function(url,tags,priority){var imageLoader=new PxLoaderImage(url,tags,priority);this.add(imageLoader);return imageLoader.img};if(typeof define==='function'&&define.amd){define('PxLoaderImage',[],function(){return PxLoaderImage})}	
$(window).load(function(e){
	var loader = new PxLoader();
	var loadimagens = new Array (
	"capa.jpg",
	"bgCreditosText.png",
	"btnOptionsMatematica.png",
	"btnSom.png",
	"btnSomOff.png",
	"icones.png",
	"logo.png"
	);
	for(var i=0; i<loadimagens.length; i++){pathimagens = "img/template/"+loadimagens[i];loader.addImage(pathimagens);}
	loader.addProgressListener(function(e){console.log(e.resource.getName());});
	loader.addCompletionListener(function(e){
		$("#loading").fadeOut(300,function(){$(this).remove();});
		console.log(loadimagens.length+' imagens carregadas!');
		template();
		updateScale();
	});
	loader.start();
});
