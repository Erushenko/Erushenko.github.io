$(document).ready(function(){
  $().jcarousel();

  $(function(){
    var html  = $('#test').html();
    var data = {
        h1_FIO: "Ерушенко Дмитрий Викторович",
        img: '"../task_01/MyPhoto.png" ',
        p1:'Ведущий разработчик ПО 1С',
        p2:'Хочу учить фронтенд, потому что:',
        ulList: [
          '<li>работать в перспективной профессии</li>',
          '<li>получить опыт работы с иностранными закачиками</li>',
          '<li>нравятся интернет технологии</li>'
        ],
        pTel:'+380503476416',
        pInfoFacebook:'мой профиль в Facebook: ',
        refFacebook:'https://www.facebook.com/erushenko'
    };
  // debugger
    var content = tmpl(html,data);
    $('.wrapper').append(content);
  });  
});
