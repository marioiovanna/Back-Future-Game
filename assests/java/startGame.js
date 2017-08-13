var players = [
    {
        name: 'biff',
        life: 300,
        hitp: 10
    },
    {
        name: 'doc',
        life: 250,
        hitp: 10
    },
    {
        name: 'martin',
        life: 300,
        hitp: 10
    },
    {
        name: 'mcfly',
        life: 240,
        hitp: 10
    }];

var playerchoose = [];
var playervs = [];

var selected = false;

var fightnow = false;
var fights = 0;

function startgame() {

    $('.bonus').hide();

    // START GAME press button trigger this ...
    $('.bt1').click(function ready() {
        $('.selecttext').fadeIn(3000);
        $('.bt1').fadeOut(400);

        playerselector();
    })
}

function fight() {
    if (fightnow === true) {
        $('.fight').on('click', function () {

            playerchoose[0].life -= playervs[0].hitp;
            $('.lifeplayer').html('LIFE: ' + playerchoose[0].life);
            playerchoose[0].hitp += Math.floor((Math.random() * 10) + 1);

            playervs[0].life -= playerchoose[0].hitp;
            $('.lifevs').html('LIFE: ' + playervs[0].life);
            playervs[0].hitp += Math.floor((Math.random() * 10) + 1);

            console.log('Mi HITP normal = ' + playerchoose[0].hitp)

            if (playervs[0].life <= -1) {
                $('.fight').hide();
                $('.lifevs').hide();
                $('.vs').empty();
                $('.deadbtn').css('display', 'block').appendTo('.vs');
                $('.bonus').show();
                playerchoose[0].life += 100;
                $('.lifeplayer').html('+100').css('color', 'green').css('font-size', '100px');

                $('.bonus').fadeOut(5000);
                $('.lifeplayer').fadeOut(5000, function () {
                    $('.lifeplayer').html('+100').css('color', '#DAA520').css('font-size', '50px');
                    $('.vs').empty();
                    $('.lifeplayer').show().html('LIFE: ' + playerchoose[0].life);
                });

                fights++;



                console.log(fights)
                console.log(selected)

            }
        })
    }
}

function vsselector() {

    if (fights >= 1) {
        $('.pside').attr('disabled', false);
    }

    if (selected === true) {
        // Select Vs
        $('.pside').on('click', this, function () {

            for (var i = 0; i < players.length; i++) {

                if (players[i].name === this.value) {
                    playervs.unshift(players[i]);
                    $(this).appendTo('.vs');
                    $('.choosevs').html('VS');
                    $('.pside').attr('disabled', true);
                    $('.lifevs').show();
                    $('.lifeplayer').show().html('LIFE: ' + playerchoose[0].life);
                    $('.lifevs').html('LIFE: ' + playervs[0].life);

                    $('.fight').fadeIn(3000);

                    console.log(playervs[0])

                    fightnow = true;
                    fight();
                }
            }
        })
    }
}

function playerselector() {
    if (selected === false) {
        // Select player
        $('.pside').on('click', this, function () {

            for (var i = 0; i < players.length; i++) {

                if (players[i].name === this.value) {

                    playerchoose.push(players[i]);
                    $(this).appendTo('.select');
                    $(this).attr('disabled', true);
                    $('.selecttext').hide();
                    $('.lifeplayer').html('LIFE: ' + playerchoose[0].life);

                    $('.choosevs').html('Choose VS').show();
                    selected = true;

                    vsselector()
                }

            }
        })
    }
}

$(document).ready(function () {
    startgame()
});
