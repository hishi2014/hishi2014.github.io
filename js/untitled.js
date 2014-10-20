(function($){
    $.fn.myplugin=function(config){
        var defaults={
        };
        var options=$.extend(defaults, config);

        return this.each(function(i){
            $(this).click(function(){
    var q=$(this).find("a");
    q.each(function(){alert(this.text);});
});
        });
    };
})(jQuery);

