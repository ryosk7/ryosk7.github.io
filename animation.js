var thum=$('td'); //オブジェクトを取得
var interval=500; //フェードインさせる間隔
$(function(){
  setTimeout(function(){
    $.each(thum,function(i){
      thum.eq(i).delay(i*interval).animate({'opacity':'1'},900,'swing');
    });
  },8000);
});
