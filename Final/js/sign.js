var text = document.getElementById('text');
var newDom = '';
var animationDelay = 6;

for (let i = 0; i < text.innerText.length; i++) {
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for (let i = 0; i < length; i++) {
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}

$(() => {
    // JAN
    $('#jan').on('click', () => {
        $('#inputGroupSelect01').attr('disabled', '')
        $('#submit').attr('disabled', '')

        $("#month").fadeOut()
        $("#button").fadeOut()

        $('#result').text('Date of your birthday is?').addClass('textq')
        $date = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'up').text('1st to 20th of JAN')
        $date2 = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'down').text('21st to the end of JAN')
        $('#result').append($date)
        $('#result2').append($date2)

        $('#up').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/capricorn1.png')
            $text = $('<div>').text('Resourceful, hard-working, master of material realm, persistent, pillar of society, seeks place in establishment, fixed on tangible results, strategizer, private (though with polished public image), a leader, authority, desires to leave enduring legacy.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });

        $('#down').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/aquarius1.png')
            $text = $('<div>').text('Trendsetter, flaunts convention, quirky, accepting of all, detached friendliness, otherworldly glamour, humanitarian, tuned in, visionary.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });
    });

    // FEB
    $('#feb').on('click', () => {
        $('#inputGroupSelect01').attr('disabled', '')
        $('#submit').attr('disabled', '')

        $("#month").fadeOut()
        $("#button").fadeOut()

        $('#result').text('Date of your birthday is?').addClass('textq')
        $date = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'up').text('1st to 19th of FEB')
        $date2 = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'down').text('20th to the end of FEB')
        $('#result').append($date)
        $('#result2').append($date2)

        $('#up').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/aquarius1.png')
            $text = $('<div>').text('Trendsetter, flaunts convention, quirky, accepting of all, detached friendliness, otherworldly glamour, humanitarian, tuned in, visionary.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });

        $('#down').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/pisces1.png')
            $text = $('<div>').text('Enchanting, mystical, devoted, unreachable (lost child), undefined, lacking direction, slips away from anything real, artistic, ethereal, victim, overwhelmed, sublime, expressing divine in art, music or dance.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });
    });
    // MARCH
    $('#march').on('click', () => {
        $('#inputGroupSelect01').attr('disabled', '')
        $('#submit').attr('disabled', '')

        $("#month").fadeOut()
        $("#button").fadeOut()

        $('#result').text('Date of your birthday is?').addClass('textq')
        $date = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'up').text('1st to 20th of MARCH')
        $date2 = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'down').text('21st to the end of MARCH')
        $('#result').append($date)
        $('#result2').append($date2)

        $('#up').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/pisces1.png')
            $text = $('<div>').text('Enchanting, mystical, devoted, unreachable (lost child), undefined, lacking direction, slips away from anything real, artistic, ethereal, victim, overwhelmed, sublime, expressing divine in art, music or dance.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });

        $('#down').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/aries1.png')
            $text = $('<div>').text('Courageous, creative, spontaneous, a catalyst, forceful, an agitator, confrontational, a do-er, restless, lover of challenge, ardent, a fighter, dynamic, a leader.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });
    });
    // APRIL
    $('#april').on('click', () => {
        $('#inputGroupSelect01').attr('disabled', '')
        $('#submit').attr('disabled', '')

        $("#month").fadeOut()
        $("#button").fadeOut()

        $('#result').text('Date of your birthday is?').addClass('textq')
        $date = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'up').text('1st to 20th of APRIL')
        $date2 = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'down').text('21st to the end of APRIL')
        $('#result').append($date)
        $('#result2').append($date2)

        $('#up').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/aries1.png')
            $text = $('<div>').text('Courageous, creative, spontaneous, a catalyst, forceful, an agitator, confrontational, a do-er, restless, lover of challenge, ardent, a fighter, dynamic, a leader.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });

        $('#down').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/taurus1.png')
            $text = $('<div>').text('Goal-oriented, lover of possessions, sensuous, takes sweet time, patient, bull-headed (stubborn), skilled artisan, resonant voice, builder, beautifier, lover of creature comforts.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });
    });
    // MAY
    $('#may').on('click', () => {
        $('#inputGroupSelect01').attr('disabled', '')
        $('#submit').attr('disabled', '')

        $("#month").fadeOut()
        $("#button").fadeOut()

        $('#result').text('Date of your birthday is?').addClass('textq')
        $date = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'up').text('1st to 21st of MAY')
        $date2 = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'down').text('22nd to the end of MAY')
        $('#result').append($date)
        $('#result2').append($date2)

        $('#up').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/taurus1.png')
            $text = $('<div>').text('Goal-oriented, lover of possessions, sensuous, takes sweet time, patient, bull-headed (stubborn), skilled artisan, resonant voice, builder, beautifier, lover of creature comforts.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });

        $('#down').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/gemini1.png')
            $text = $('<div>').text('Curious, quick intellect, seeker of novelty, erratic, trendy, many sided, lackadaisical, scattered focus, adaptable, friendly, fun, a learner.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });
    });
    // JUNE
    $('#june').on('click', () => {
        $('#inputGroupSelect01').attr('disabled', '')
        $('#submit').attr('disabled', '')

        $("#month").fadeOut()
        $("#button").fadeOut()

        $('#result').text('Date of your birthday is?').addClass('textq')
        $date = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'up').text('1st to 21st of JUNE')
        $date2 = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'down').text('22nd to the end of JUNE')
        $('#result').append($date)
        $('#result2').append($date2)

        $('#up').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/gemini1.png')
            $text = $('<div>').text('Curious, quick intellect, seeker of novelty, erratic, trendy, many sided, lackadaisical, scattered focus, adaptable, friendly, fun, a learner.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });

        $('#down').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/cancer1.png')
            $text = $('<div>').text('Emotional, absorbed in moods, cautious around new people, clingy, senses undercurrents, nurturing, keeper of family story, sensitive, hidden strength, pioneer of feeling.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });
    });
    // JULY
    $('#july').on('click', () => {
        $('#inputGroupSelect01').attr('disabled', '')
        $('#submit').attr('disabled', '')

        $("#month").fadeOut()
        $("#button").fadeOut()

        $('#result').text('Date of your birthday is?').addClass('textq')
        $date = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'up').text('1st to 23rd of JULY')
        $date2 = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'down').text('24th to the end of JULY')
        $('#result').append($date)
        $('#result2').append($date2)

        $('#up').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/cancer1.png')
            $text = $('<div>').text('Emotional, absorbed in moods, cautious around new people, clingy, senses undercurrents, nurturing, keeper of family story, sensitive, hidden strength, pioneer of feeling.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });

        $('#down').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/leo1.png')
            $text = $('<div>').text('Smiley, proud, dignified, expressive, big-hearted, glamorous, regal air, ambitious, passionate, demands respect, lover of adventure and risk.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });
    });
    // AUGUST
    $('#august').on('click', () => {
        $('#inputGroupSelect01').attr('disabled', '')
        $('#submit').attr('disabled', '')

        $("#month").fadeOut()
        $("#button").fadeOut()

        $('#result').text('Date of your birthday is?').addClass('textq')
        $date = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'up').text('1st to 23rd of AUGUST')
        $date2 = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'down').text('24th to the end of AUGUST')
        $('#result').append($date)
        $('#result2').append($date2)

        $('#up').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/leo1.png')
            $text = $('<div>').text('Smiley, proud, dignified, expressive, big-hearted, glamorous, regal air, ambitious, passionate, demands respect, lover of adventure and risk.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });

        $('#down').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/virgo1.png')
            $text = $('<div>').text('Fastidious, always seeking to purify, lover of routine, mechanical, sincere, conscientious, critical of self and others, kind, natural, skilled, precise, articulate.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });
    });
    // SEP
    $('#sep').on('click', () => {
        $('#inputGroupSelect01').attr('disabled', '')
        $('#submit').attr('disabled', '')

        $("#month").fadeOut()
        $("#button").fadeOut()

        $('#result').text('Date of your birthday is?').addClass('textq')
        $date = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'up').text('1st to 23rd of SEP')
        $date2 = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'down').text('24th to the end of SEP')
        $('#result').append($date)
        $('#result2').append($date2)

        $('#up').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/virgo1.png')
            $text = $('<div>').text('Fastidious, always seeking to purify, lover of routine, mechanical, sincere, conscientious, critical of self and others, kind, natural, skilled, precise, articulate.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });

        $('#down').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/libra1.png')
            $text = $('<div>').text('Stylish, lover of beauty and art, cultural, sophisticated, intellectual, social grace, talkative, diplomatic, a natural in relationship.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });
    });
    // OCT
    $('#oct').on('click', () => {
        $('#inputGroupSelect01').attr('disabled', '')
        $('#submit').attr('disabled', '')

        $("#month").fadeOut()
        $("#button").fadeOut()

        $('#result').text('Date of your birthday is?').addClass('textq')
        $date = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'up').text('1st to 23rd of OCT')
        $date2 = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'down').text('24th to the end of OCT')
        $('#result').append($date)
        $('#result2').append($date2)

        $('#up').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/libra1.png')
            $text = $('<div>').text('Stylish, lover of beauty and art, cultural, sophisticated, intellectual, social grace, talkative, diplomatic, a natural in relationship.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });

        $('#down').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/scorpio1.png')
            $text = $('<div>').text("Soulful, probing, driven, mesmerizing, secretive, profound, deep healer, drawn to what's occulted (hidden), lover of mysteries, at home in underworld, intensely bonded in relationships, no stranger to dark emotions.").addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });
    });
    // NOV
    $('#nov').on('click', () => {
        $('#inputGroupSelect01').attr('disabled', '')
        $('#submit').attr('disabled', '')

        $("#month").fadeOut()
        $("#button").fadeOut()

        $('#result').text('Date of your birthday is?').addClass('textq')
        $date = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'up').text('1st to 22nd of NOV')
        $date2 = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'down').text('23rd to the end of NOV')
        $('#result').append($date)
        $('#result2').append($date2)

        $('#up').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/scorpio1.png')
            $text = $('<div>').text("Soulful, probing, driven, mesmerizing, secretive, profound, deep healer, drawn to what's occulted (hidden), lover of mysteries, at home in underworld, intensely bonded in relationships, no stranger to dark emotions.").addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });

        $('#down').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/sagittarius1.png')
            $text = $('<div>').text("Cheerful, athletic, a seeker, adventurer, world traveler, philosopher (lover of wisdom), refreshingly honest, dot connector, friend to all, enlivening.").addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });
    });
    // DEC
    $('#dec').on('click', () => {
        $('#inputGroupSelect01').attr('disabled', '')
        $('#submit').attr('disabled', '')

        $("#month").fadeOut()
        $("#button").fadeOut()

        $('#result').text('Date of your birthday is?').addClass('textq')
        $date = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'up').text('1st to 22nd of DEC')
        $date2 = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'down').text('23rd to the end of DEC')
        $('#result').append($date)
        $('#result2').append($date2)

        $('#up').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/sagittarius1.png')
            $text = $('<div>').text("Cheerful, athletic, a seeker, adventurer, world traveler, philosopher (lover of wisdom), refreshingly honest, dot connector, friend to all, enlivening.").addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });

        $('#down').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()

            $photo = $('<img>').attr('src', './photo/capricorn1.png')
            $text = $('<div>').text('Resourceful, hard-working, master of material realm, persistent, pillar of society, seeks place in establishment, fixed on tangible results, strategizer, private (though with polished public image), a leader, authority, desires to leave enduring legacy.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });
    });



})

// 牡羊座Aries	3月21日～4月20日
// 金牛座Taurus	4月21日～5月20日
// 雙子座Gemini	5月21日～6月20日
// 巨蟹座Cancer	6月21日～7月22日
// 獅子座Leo	7月23日～8月22日
// 處女座Virgo	8月23日～9月22日
// 天秤座Libra	9月23日～10月22日
// 天蠍座Scorpio	10月23日～11月22日
// 射手座Sagittarius	11月23日～12月22日
// 魔羯座Capricorn	12月23日～1月21日
// 水瓶座Aquarius	1月22日～2月19日
// 雙魚座Pisces	2月20日～3月20日
