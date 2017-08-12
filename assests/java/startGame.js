var players = [
    {
        name: 'biff',
        life: 300,
        hitp: 30
    },
    {
        name: 'doc',
        life: 200,
        hitp: 10
    }];

var playerchoose = [];
var playervs = [];

function startgame() {
    // START GAME press button trigger this ...
    $('.bt1').click(function ready() {
        $('.selecttext').fadeIn(3000);
        $('.bt1').fadeOut(400);

        playerselector()
    })
}

function playerselector() {
    // Selector player
    $('.pside').on('click', this, function () {

        if (players[0].name === this.value) {
            playerchoose.push(players[0]);
            $(this).appendTo('.select');

            $('.biff').appendTo('.select');
            $('.biffbtn').attr('disabled', true);
            $('.selecttext').hide();

            $('.choosevs').html('Choose VS').show();

            // Select Vs
            $('.pside').on('click', this, function () {


                if (players[1].name === this.value) {

                    playervs.push(players[1]);
                    $(this).appendTo('.vs');
                    $('.choosevs').html('VS');
                    $('.docbtn').attr('disabled', true);




                }

            })
        }
    })
}

$(document).ready(function () {
    startgame()
});
