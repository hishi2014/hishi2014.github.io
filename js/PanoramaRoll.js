//同じパノラマ写真を２枚並べてシームレスにつないでマウスオーバーしてる限り回し続けると言う単純なJQueryプラグインです。

(function ($) {
    $.fn.panoramaRoll=function(config){
        var defaults={
        };
        var options=$.extend(defaults, config);

        return this.each(function(i){
        count=0;
        hoge=null;
        e=$(this).find("img");

        var dl=parseInt(e[0].getBoundingClientRect().left);
        var dl1=parseInt(e[1].getBoundingClientRect().left);
        var imagewidth=e[0].clientWidth;
        var screenwidth=$(this).prop('clientWidth');

        $(this).hover(function(event){
        hoge = setInterval(function (){
        if(event.clientX<screenwidth/2){
        dl=dl+1;
        dl1=dl1+1;
        if(dl>screenwidth){dl=dl1-imagewidth;}
        if(dl1>screenwidth){dl1=dl-imagewidth;}
        }else{
        dl=dl-1;
        dl1=dl1-1;
        if(dl<-imagewidth){dl=dl1+imagewidth;}
        if(dl1<-imagewidth){dl1=dl+imagewidth;}}
        e[0].style.position = 'absolute';
        e[1].style.position = 'absolute';
        e[0].style.left = dl + "px";
        e[1].style.left = dl1 + "px";
        }, 1);
        }

            ,function(){
        clearInterval(hoge);
        });
        });
    };
})(jQuery);
