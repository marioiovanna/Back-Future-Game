var players = [
    {
        name: 'biff',
        life: 300,
        hitp: 18
    },
    {
        name: 'doc',
        life: 250,
        hitp: 10
    },
    {
        name: 'martin',
        life: 300,
        hitp: 15
    },
    {
        name: 'mcfly',
        life: 220,
        hitp: 5
    }];

var playerchoose = [];
var playervs = [];

var selected = 0;

var fightnow = false;

function startgame() {
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
            $('.lifevs').html('LIFE: ' + playervs[0].life );
            playervs[0].hitp += Math.floor((Math.random() * 10) + 1);

            console.log(playerchoose[0].hitp);
            console.log(playervs[0].hitp)

            if (playervs[0].life <= -1) {
                alert('aaaaaaaaaaaaaaa')
            }





        })

    }
}

function vsselector() {
    if (selected === 1) {
        // Select Vs
        $('.pside').on('click', this, function () {

            for (var i = 0; i < players.length; i++) {

                if (players[i].name === this.value) {
                    playervs.push(players[i]);
                    $(this).appendTo('.vs');
                    $('.choosevs').html('VS');
                    $('.pside').attr('disabled', true);
                    $('.lifevs').html('LIFE: ' + playervs[0].life );

                    $('.fight').fadeIn(3000);

                    fightnow = true;
                    fight();
                }
            }
        })
    }

}

function playerselector() {
    if (selected === 0) {
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
                    selected++;

                    vsselector()
                }

            }
        })
    }
}

$(document).ready(function () {
    startgame()
});
