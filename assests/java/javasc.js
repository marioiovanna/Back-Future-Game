
    // CAR ANIMATION navbar car animation ...
    $(document).dblclick (function (){
      $('.car').animate({left: '1800', opacity: '9'},'slow');
      $('.fire').fadeIn (1000).delay(300).fadeOut(800);
      $('.rayo').fadeIn (1700).fadeOut(500);
      $('.car').click()
         $('.car').animate({left: '-10%', opacity: '-15'});
      });

  // MAIN 
 $(document).ready (function() {
      
    // START GAME press button trigger this ...
    $('.bt1').click (function() {
        $('.select').fadeIn(3000);
        $('.bt1').fadeOut(400);

        // SHOW NAMES BUTTONS left bar ...
        $('.pside').fadeIn(3000);

    // SELECT PLAYER
    //....doesnt work as wanted....
    // var btp = ['Biff','Doc','Martin','McFly']

    // var players = [
    //   'assests/img/biff2.png',
    //   'assests/img/doc4.png',
    //   'assests/img/martin2.png',
    //   'assests/img/mcfly.png',
    // ]

    // for (var i = 0; i < players.length; i++) {
    // var playerBtn = $("<img>");

    // playerBtn.addClass("img-rounded");
    // playerBtn.attr("src", players[i]);

    // $('.erase').append(playerBtn);
    // };
    

  // ON PLAYER  if choose one move IMG to main....
  $('.pside').on ('click',function() {

var pselect = $(this).attr("value");
var player = [0,1,2,3];
var life = [300, 150, 200, 100];
var hitp = [15, 5, 10, 2];
    // {name: 'biff', value: 0, life: 180, hp: 15},
    // {name: 'doc', value: 1, life: 150, hp: 10}
    // ];
var biff =  player[0];
var bifflife = life[0];
var biffhp = hitp[0];

var doc = player[1];
var doclife = life[1];
var dochp = hitp[1];

var martin = player[2];
var martinlife = life[2];
var dochp = hitp[2];

var mcfly = player[3];
var mcflylife = life[3];
var mcflyhp = hitp[3];

// console.log('player = ' + player)
// console.log('player selected = ' + pselect)

      if ( pselect == biff) {
          $('<img  class="img-rounded" class="pics" src="assests/img/biff2.png">').appendTo($('#selected'));
          $('#life').text('LIFE \.' + bifflife);
          // VS players
          $('<img  class="img-rounded" class="pics" src="assests/img/doc4.png">').appendTo($('#vs'));
          $('<img  class="img-rounded" class="pics" src="assests/img/martin2.png">').appendTo($('#vs'));
          $('<img  class="img-rounded" class="pics" src="assests/img/mcfly.png">').appendTo($('#vs'));

    } else if ( pselect == doc) {      
          $('<img  class="img-rounded" class="pics" src="assests/img/doc4.png">').appendTo($('#selected'));
          $('#life').text('LIFE \.' + doclife);
           // VS players
          $('<img  class="img-rounded" class="pics" src="assests/img/biff2.png">').appendTo($('#vs'));
          $('<img  class="img-rounded" class="pics" src="assests/img/martin2.png">').appendTo($('#vs'));
          $('<img  class="img-rounded" class="pics" src="assests/img/mcfly.png">').appendTo($('#vs'));

    } else if ( pselect == martin) {      
          $('<img  class="img-rounded" class="pics" src="assests/img/martin2.png">').appendTo($('#selected'));
          $('#life').text('LIFE \.' + martinlife);
          // VS players
          $('<img  class="img-rounded" class="pics" src="assests/img/biff2.png">').appendTo($('#vs'));
          $('<img  class="img-rounded" class="pics" src="assests/img/doc4.png">').appendTo($('#vs'));
          $('<img  class="img-rounded" class="pics" src="assests/img/mcfly.png">').appendTo($('#vs'));

    } else if ( pselect == mcfly) {      
          $('<img  class="img-rounded" class="pics" src="assests/img/mcfly.png">').appendTo($('#selected'));
          $('#life').text('LIFE \.' + mcflylife);
          // VS players
          $('<img  class="img-rounded" class="pics" src="assests/img/biff2.png">').appendTo($('#vs'));
          $('<img  class="img-rounded" class="pics" src="assests/img/doc4.png">').appendTo($('#vs'));
          $('<img  class="img-rounded" class="pics" src="assests/img/martin2.png">').appendTo($('#vs'));
      }
          // EFFECTS
          $('.erase').empty();
          $('.select').empty();
          $('.choose').fadeIn(2000);
          $('#life').fadeIn();
          $('.fight', ).slideDown(2000); 
    });
  });

    // FIGHT BTN create points for each player ...
    $('.fight').click (function() {

var lifebtn = $('#life');
    
    lifebtn.addClass('value');
    lifebtn.attr('value', 300)

var hrandom = Math.floor((Math.random() * 20) + 1);   

      $('.life').html()

console.log(lifebtn)
  });

  });

  
  
   





  