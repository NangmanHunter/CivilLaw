$(`.pre-ㅁ`).each(function(){
    const t=$(this).html();
    const t_= t.replace(/ㅁ/g,'<span style="visibility: hidden;">ㅁ</span>');
    $(this).html(t_);
})