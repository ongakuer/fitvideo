(function($){       
	$.fn.extend({       
		fitVideo:function(_arg){ 
			var _this = $(this),
				videoWrap = _this.selector,
			 	newWidth,
			 	fitLayout,
				_default = {
            		fitLayout: $(_this.selector).parent()
        		};
        	
        	_arg = $.extend({},_default,_arg);
	        $fitLayout = $(_arg.fitLayout);

			function fitting(){
				newWidth = $fitLayout.width();

				$fitLayout.find("embed").each(function(i,embed){
					var embed_Width = $(embed).width(),
						embed_Height = $(embed).height(),
						newHeight = Math.round(newWidth * embed_Height / embed_Width);
					$(embed).width(newWidth);
					$(embed).height(newHeight);
				});

				$fitLayout.find("object").each(function(i,object){
					var embed_Width = $(object).width(),
						embed_Height = $(object).height(),
						newHeight = Math.round(newWidth * embed_Height / embed_Width);
					$(object).width(newWidth);
					$(object).height(newHeight);
				});
			};

			// init fitting
			fitting();
			$(window).resize(function() {
			  fitting();
			});
		}     
	})       
})(jQuery);