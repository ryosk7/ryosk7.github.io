var ishimori = ['石森虹花','http://cdn.keyakizaka46.com/images/14/482/0340c7236b6cc08622a0bf7e93083/400_320_102400.jpg'];
var imaizumi = ['今泉佑唯','http://cdn.keyakizaka46.com/images/14/47f/6e257fe479a4f6895d11d5eeca7a0/400_320_102400.jpg'];
var uemura = ['上村莉菜','http://cdn.keyakizaka46.com/images/14/3b1/29b6814789f55d5b5a0bd2f294829/400_320_102400.jpg'];
var oseki = ['尾関梨香	','http://cdn.keyakizaka46.com/images/14/52a/63d3afe3ef5a78c8539ffebaa5359/400_320_102400.jpg'];
var oda = ['織田奈那	','http://cdn.keyakizaka46.com/images/14/84b/51d7fcb5f989e0c78dc3c2af8ae76/400_320_102400.jpg'];
var koike = ['小池美波','http://cdn.keyakizaka46.com/images/14/088/87d3578a4b0675bf89e983b7bff19/400_320_102400.jpg'];
var kobayashi = ['小林由依	','http://cdn.keyakizaka46.com/images/14/dcc/8dda6179149e285a931fd0b997251/400_320_102400.jpg'];
var saito = ['齋藤冬優花	','http://cdn.keyakizaka46.com/images/14/382/785e8201a1e461ba72313536efdbc/400_320_102400.jpg'];
var sato = ['佐藤詩織	','http://cdn.keyakizaka46.com/images/14/f14/8ca9ed644864fff8a77266a1d8f64/400_320_102400.jpg'];
var shida = ['志田愛佳	','http://cdn.keyakizaka46.com/images/14/0a3/d961fc0d341318a23eb142fc9f59c/400_320_102400.jpg'];
var sugai = ['菅井友香','http://cdn.keyakizaka46.com/images/14/0b7/2677dc91653d894a5c31915c8b14e/400_320_102400.jpg'];
var suzumoto = ['鈴本美愉	','http://cdn.keyakizaka46.com/images/14/d9f/da49e3c7b90a644ea27d4584b5def/400_320_102400.jpg'];
var nagasawa = ['長沢菜々香','http://cdn.keyakizaka46.com/images/14/c1d/cdf5622f7a2949f6cdd6c344066a9/400_320_102400.jpg'];
var nagahama = ['長濱ねる','http://cdn.keyakizaka46.com/images/14/e07/0fb95fda319091b0b1e3108e6a0a5/400_320_102400.jpg'];
var habu = ['土生瑞穂','http://cdn.keyakizaka46.com/images/14/6b8/8e85e92dfc6044edc011718727dff/400_320_102400.jpg'];
var harada = ['原田葵','http://cdn.keyakizaka46.com/images/14/87e/b691f4fc0cdcd74af49ef1d81acb9/400_320_102400.jpg'];
var hirate = ['平手友理奈','http://cdn.keyakizaka46.com/images/14/99d/eee9ab98609341d4743c4e0e57622/400_320_102400.jpg'];
var moriya = ['守屋茜	','http://cdn.keyakizaka46.com/images/14/853/0940c7844818cb891306f3ef8f2fa/400_320_102400.jpg'];
var yoneteni = ['米谷奈々未','http://cdn.keyakizaka46.com/images/14/853/0940c7844818cb891306f3ef8f2fa/400_320_102400.jpg'];
var rika = ['渡辺梨加','http://cdn.keyakizaka46.com/images/14/eeb/23f672b0c99925d3d9495c67306f0/400_320_102400.jpg'];
var risa = ['渡邉理佐','http://cdn.keyakizaka46.com/images/14/3d3/ad37a68c5f825bc52e6827fd1875f/400_320_102400.jpg'];

var members = [ishimori,imaizumi,uemura,oseki,oda,koike,kobayashi,
              saito,sato,shida,sugai,suzumoto,nagasawa,nagahama,
              habu,harada,hirate,moriya,yoneteni,rika,risa];

  // document.write("<table>");
  // document.write("<tr>");
  // for (var i = 0; i < 3; i++) {
  //   for (var j = 0; j < 7; j++) {
  //     // console.log(members[0][0]);
  //     document.write(`<td id="member_check"><img src="${members[0][1]}">`);
  //     document.write(`${members[0][0]}</td>`);
  //     members.shift();
  //   }
  //   document.write("</tr>");
  // }
  // document.write("</table>");



  for(var i = members.length - 1; i > 0; i--){
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = members[i];
    members[i] = members[r];
    members[r] = tmp;
  }
  document.write("<table>");
  document.write("<tr>");
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 7; j++) {
      // console.log(members[0][0]);
      document.write(`<td id="member_check"><img src="${members[0][1]}">`);
      document.write(`${members[0][0]}</td>`);
      members.shift();
    }
    document.write("</tr>");
  }
  document.write("</table>");
