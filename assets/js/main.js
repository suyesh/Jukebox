function JukeBox(songs) {
    this.audio;
    this.songs = songs,

    this.playCounter = songs.length - 1,

    this.song = this.songs[this.playCounter],

    this.playMusic = function() {
        this.audio = new Audio($(this.song).attr('src'));
        $(this.song).parent().addClass('playing').removeClass('music');
        this.audio.play();
        $(this.song).bind('ended', function() {
            $(this.song).parent().addClass('music').removeClass('playing');
            this.playCounter -= 1;
            if (this.playCounter < 0) {
                return;
            } else {
                this.playMusic();
            }
        });
    },

    this.pauseMusic = function() {
        this.audio.pause();
    };

    this.nextMusic = function() {
        $(this.song).parent().addClass('music').removeClass('playing');
        this.audio.pause();
        this.audio.currentTime = 0;
        this.song = _.sample(this.songs);
        this.playMusic();
    };

    this.stopMusic = function() {
        $(this.song).parent().addClass('music').removeClass('playing');
        this.audio.pause();
        this.audio.currentTime = 0;
    }
}

var allsongs = document.getElementsByClassName('audio');

var musicPlayer = new JukeBox(allsongs);

$('.play').click(function() {
    musicPlayer.playMusic();
})

$('.forward').click(function() {
    musicPlayer.nextMusic();
})

$('.pause').click(function() {
    musicPlayer.pauseMusic();
})

$('.stop').click(function() {
    musicPlayer.stopMusic();
})
