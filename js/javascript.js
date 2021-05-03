//메뉴
$(function(){

    const $mnu = $('header>.container>nav>.gnb>li>a');
    let nowIdx = 0;
    
    let arrArticleTop = [];

    for(let i=0;i<6;i++){
        arrArticleTop[i] = $('.srv').eq(i).offset().top;   
    }

    $mnu.on('click', function(evt){
        evt.preventDefault();
        nowIdx = $mnu.index(this);

        $('html,body').stop().animate({
            scrollTop : arrArticleTop[nowIdx]-50
        });

        $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    });

    $(window).on('scroll', function(){

        let scrollTop = $(window).scrollTop();

        console.log(scrollTop);

        for(let k=0;k<6;k++){

            if(scrollTop>=arrArticleTop[k]-100){
                $mnu.eq(k).parent().addClass('on').siblings().removeClass('on');
            }else if(scrollTop<arrArticleTop[0]-100){
                $mnu.parent().removeClass('on');
            }
        }
    });
});    


//언어선택 옵션박스
$(function(){

    const $form = $('header>.container>form');
    const $langlist = $('header>.container>form>fieldset>.langlist');
    const $lang = $('header>.container>form>fieldset>.langlist>li>a');

    $form.on('click', function(){
        console.log('언어선택 클릭');
        $langlist.toggle();
    });

    $form.on('mouseleave', function(){
        $langlist.hide();
    });

    $lang.on('click', function(evt){
        const selectedLang = $(this).text();
        
        $("#lang").val(selectedLang);

        evt.preventDefault();
    });


});


//슬라이드 코드구현
$(function(){

    const $indicators = $('section>.line-visual>.line-visual-pagination>li>a');
    const $container = $('section>.line-visual>.line-visual-container');
    let nowIdx = 0;
    let intervalKey = null;
    

    $(window).on('load', function(){
        clearInterval(intervalKey);
        
        intervalKey = setInterval(function(){
            if(nowIdx<3){
                nowIdx++;
            }else{
                nowIdx=0;
            };
            
            $container.stop().animate({
                left : -(100 * nowIdx) + '%'
            });

            $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');            
         },2000);
    });

    $indicators.on('click', function(evt){
        evt.preventDefault();
        clearInterval(intervalKey);

        nowIdx = $indicators.index(this);

        $container.stop().animate({
            left : -(100 * nowIdx) + '%'
        });

        $(this).parent().addClass('on').siblings().removeClass('on');
        $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    });

});

