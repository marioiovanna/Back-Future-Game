var players = [
    {
        name: 'biff',
        value: '0',
        life: 300,
        hitp: 10
    },
    {
        name: 'doc',
        value: '1',
        life: 250,
        hitp: 10
    },
    {
        name: 'martin',
        value: '2',
        life: 300,
        hitp: 10
    },
    {
        name: 'mcfly',
        value: '3',
        life: 240,
        hitp: 10
    }];

var selected = false;
var fightnow = false;

var playerValue = 0;
var vsValue = 0;

var end = 0;
var rip = 'R.I.P' + players[vsValue].name;

function startgame() {

    $('.bonus').hide();
    // START GAME press button trigger this ...
    $('.bt1').click(function ready() {
        $('.selecttext').fadeIn(3000);
        $('.bt1').fadeOut(400);

        // playerselector();
        $('.pside').on('click', this, function () {

            if (selected === false) {

                playerValue = this.value;
                console.log(playerValue);
                console.log('ORIGINAL HITP ' + players[playerValue].hitp);

                $(this).appendTo('.select');
                $(this).removeClass('vsselector');
                $(this).attr('disabled', true);

                $('.selecttext').hide();
                $('.lifeplayer').html('LIFE: ' + players[playerValue].life);
                $('.choosevs').html('Choose VS').show();

                selected = true;
            }

            // VS player select
            else if (selected === true) {

                vsValue = this.value;
                console.log(vsValue);

                $(this).appendTo('.vs');
                $('.choosevs').html('VS');
                $('.pside').attr('disabled', true);
                $('.lifevs').show();
                $('.lifevs').html('LIFE: ' + players[vsValue].life);

                $('.fight').fadeIn(3000);

                fightnow = true;
            }
        })
    });
    // call function fight ...
    fight();
}

function fight() {
    // start trigger action fight ...
    $('.fight').on('click', function () {

        if (fightnow === true) {

            var randomLife =  Math.floor((Math.random() * 100) + 100);

            // if (players[playerValue].life >= players[vsValue].hitp) {
                // math for life player, add extra hit points
                players[playerValue].life -= players[vsValue].hitp;
                $('.lifeplayer').html('LIFE: ' + players[playerValue].life);
                players[playerValue].hitp += Math.floor((Math.random() * 10) + 1);
                console.log('player ' + players[playerValue].hitp);
            // }

                // math for vs player, add extra hit p
                players[vsValue].life -= players[playerValue].hitp;
                $('.lifevs').html('LIFE: ' + players[vsValue].life);
                players[vsValue].hitp += Math.floor((Math.random() * 10) + 1);
                console.log('vs ' + players[vsValue].hitp);

                console.log('');


            // if VS player dies ...
            if (players[vsValue].life <= 0) {
                $('.fight').hide();
                $('.lifevs').hide();
                $('.vs').empty();
                $('.deadbtn').css('display', 'block').appendTo('.vs');
                $('.bonus').show();
                players[playerValue].life += randomLife;

                console.log('tiene q ser ' + randomLife)

                $('.lifeplayer').html(randomLife).css('color', 'green').css('font-size', '100px');

                // action after fade out bonus ...
                $('.bonus').fadeOut(5000);
                $('.lifeplayer').fadeOut(5000, function () {
                    $('.lifeplayer').css('color', '#DAA520').css('font-size', '50px').show().html('LIFE: ' + players[playerValue].life);
                    $('.vs').empty();
                    $('.choosevs').html('Select VS')



                    $('.vsselector').attr('disabled', false);
                    $('.dead').append('<button class="pside deadbtn" value="R.I.P."><p class="hiddentext">R.I.P.</p></button>');
                });
                players[playerValue].hitp = 10;
                end++;
            }
        }
        endgame();
    })
}

function endgame() {
    // finish game if all dead
    if (end === 3) {
        $('.main').html('<p class="gameover">GAME OVER</p>' + '<p class="label">Go back to the future</p>');

        $('body').css('background-image', 'url(assests/img/back.png' +
            ')');
        $('.reset').append('<button class="resetbtn">RESET GAME</button>').append('<label class="resetlabel">RESET GAME</label>');
        $('.resetbtn').on('click', function () {
            location.reload();
        })
    }
    else if (players[playerValue].life <= 0 ) {
        $('.main').html('<p class="gameover">GAME OVER</p>' + '<p class="label">YOU LOOSE</p>');        $('body').css('background-image', 'url(assests/img/back.png' +
            ')');
        $('.reset').append('<button class="resetbtn">RESET GAME</button>').append('<label class="resetlabel">RESET GAME</label>');
        $('.resetbtn').on('click', function () {
            location.reload();
        })
    }
}

$(document).ready(function () {
    startgame();
});
