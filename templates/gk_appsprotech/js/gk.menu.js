window.addEvent('load', function() {
	if(document.id('gkExtraMenu')) {
		var base = document.id('gkExtraMenu');
		
		if($GKMenu && ($GKMenu.height || $GKMenu.width)) {		
			base.getElements('li.haschild').each(function(el){		
				if(el.getElement('.childcontent')) {
					var content = el.getElement('.childcontent');
					var prevh = content.getSize().y;
					var prevw = content.getSize().x;
					
					var fxStart = { 'height' : $GKMenu.height ? 0 : prevh, 'width' : $GKMenu.width ? 0 : prevw, 'opacity' : 0 };
					var fxEnd = { 'height' : prevh, 'width' : prevw, 'opacity' : 1 };
					
					var fx = new Fx.Morph(content, {
						duration: $GKMenu.duration, 
						link: 'cancel', 
						onComplete: function() { 
							if(content.getSize().y == 0){ 
								content.setStyle('overflow', 'hidden'); 
							} else if(content.getSize().y - prevh < 30 && content.getSize().y - prevh >= 0) {
								//console.log('GetSize: ' + content.getSize().y + '  prevh: ' + prevh);
								content.setStyle('overflow', 'visible');
							}
						}
					});
					
					fx.set(fxStart);
					content.setStyles({'left' : 'auto', 'overflow' : 'hidden' });
					
					el.addEvents({
						'mouseenter': function(){ 
							fx.start(fxEnd);
						},
					
						'mouseleave': function(){
							content.setStyle('overflow', 'hidden');
							fx.start(fxStart);
						}
					});
				}
			});
		}
	}
	
	if(document.id('gkDroplineMenu')) {
		var main = document.id('gkDroplineMenu');
		var sub = document.id('gkDropSub');
		
		if(main) {
			var submenus = document.id('gkDropSub').getElements('ul');
			var currentsub = null;
			
			submenus.each(function(el, i) {
				if(el.hasClass('active')) currentsub = submenus[i];
			});
			
			main.getElements('li').each(function(el, i) {
				el.addEvent('mouseenter', function() {
					if(currentsub) {
						currentsub.setStyle('left', '-999em'); 
						submenus.setProperty('class', '');
					}
	                
					currentsub = submenus[i];
					currentsub.setStyle('left', 'auto');
					currentsub.setProperty('class', 'active');
				});
			});
		}
	}
}); 
