$('#secondcontent').hide();
$(function(){
  /* 1.ロゴからコンテンツへの切替*/
  var keyakiLogo = $('#keyaki-logo');
  var secondCon = $('#secondcontent');
  keyakiLogo.hide().fadeIn(800, function(){
    setTimeout(function() {
      keyakiLogo.fadeOut(600);
    }, 4000);
  });
  setTimeout(function(){
    secondCon.fadeIn(600);
  }, 6800);
});
