# 期末網站筆記
網站網址
---
auwingho.github.io/Final/Final.html

期末專題主題簡介
---
>有時候在看十二星座運程時，通常都只能記住自己的星座，當想要留意一下朋友們或家人門等的星座運程時，都要搜尋出星座對應的日期才能找到他／她的星座到底是甚麼。因此，這個網站可以幫助想要查詢星座的人透過選擇對應的按鈕，從而使用此網站查到那個人的星座及星座特性。

網站使用方法
---
使用者可透過點選自己的「出生月份」和「出生日期是在某日期前後」來查看自己的星座及星座小簡介。

網站使用的特別技術
---
- **文字動畫效果**
```
在網站查詢到Free Frontend的22 CSS Text Animations(二十二種CSS文字動畫特效)
https://freefrontend.com/css-text-animations/

使用了裡面Text Animation #4 - Smooth fade-in的文字淡出特效的CODE
https://codepen.io/kazed972/pen/bQOQGR

使用了這個特效，增加了網站的精緻度。
```

```JavaScript=
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
```

- **圖片淡出效果**
```
使用了w3schools.com內的W3.CSS Animations
https://www.w3schools.com/w3css/w3css_animate.asp
但在使用前要先加入：
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">在網頁內

在W3.CSS Animations中選擇Fade in Elements，接著在需要此特效的HTML Elements前加入:
<div class="w3-animate-opacity">..</div>

使用了這個特效，能使圖片能隨著文字動畫效果自然地配合。
```

- **星座查詢技術**

先在HTML頁面設定好最主要的>`<div>`和>`<id>`，分別是：
```
問題:Month of your birthday
    <div class="textq" id="month"> 

下拉式選單<div class="btn-group">內的代表十二個月份的<id>
    <a class="dropdown-item" id="jan">
    <a class="dropdown-item" id="feb">
    <a class="dropdown-item" id="march">
    <a class="dropdown-item" id="april">
    <a class="dropdown-item" id="may">
    <a class="dropdown-item" id="june">
    <a class="dropdown-item" id="july">
    <a class="dropdown-item" id="august">
    <a class="dropdown-item" id="sep">
    <a class="dropdown-item" id="oct">
    <a class="dropdown-item" id="nov">
    <a class="dropdown-item" id="dec">

實踐JQuery的<div>和<id>:
    <div id="result"></div>
    <div id="result2"></div>
    <div id="result3"></div>
```

- **JQuery實踐部分分為三部分**
<font color=red>**十二個月份的程式碼均一樣，只是每月代表的`<id>`不一樣。
下面以一月January為例子。**</font>


*<h3>1. 下拉式選單內的各選項均有其獨有的<font color=red>`<id>`</font>，設定點擊後的JQuery。</h3>*

<font color=black><b>當<font color=red>`<id>`</font>為<font color=darkred>`jan`</font>被點擊後，<font color=red>`<id>`</font>為<font color=darkred>`inputGroupSelect01`</font>的<font color=red>`<div>`</font>code會停用，防止雙重選擇。</b>
```JavaScript=
$('#jan').on('click', () => {
        $('#inputGroupSelect01').attr('disabled', ''）
```
<b>接著<font color=red>`<id>`</font>為<font color=darkred>`month`</font>和<font color=darkred>`button`</font>的<font color=red>`<div>`</font>code會以fadeOut的方式在網頁消失。</b>
```JavaScript=
        $("#month").fadeOut()
        $("#button").fadeOut()
```
<b>在<font color=red>`<id>`</font>為<font color=darkred>`result`</font>的<font color=red>`<div>`</font>code使用<font color=darkblue>`.text()`</font>新增文字，在該<font color=red>`<div>`</font>區顯示"Date of your birthday is?" 。</b>
```JavaScript=
        $('#result').text('Date of your birthday is?').addClass('textq')
```
<b>再設定兩個新的code，代號分別為<font color=darkred>`$date`</font>和<font color=darkred>`$date2`</font>，兩個都是按鈕<font color=red>`<button>`</font>，並用<font color=darkblue>`.attr(）`</font>設定按鈕的<font color=darkred>`class`</font>為Boostrap的<font color=darkred>`btn btn-secondary btn-lg`</font>樣式；</b>

<b>再加上<font color=darkred>`$date`</font>的<font color=red>`<id>`</font>為<font color=darkred>`up`</font>，<font color=darkred>`$date2`</font>的<font color=red>`<id>`</font>為<font color=darkred>`down`</font>，為JQuery第二部分作準備。
同時使用<font color=darkblue>`.text()`</font>為按鈕加上文字內容。</b>

```JavaScript=
        $date = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'up').text('1st to 20th of JAN')
        $date2 = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'down').text('21st to the end of JAN')
```
<b>最後在<font color=red>`<id>`</font>為<font color=darkred>`result`</font>和<font color=darkred>`result2`</font>使用<font color=darkblue>`.append()`</font>代入<font color=darkred>`$date`</font>和<font color=darkred>`$date2`</font>的程式碼，讓上面設定的新程式碼能加入在<font color=darkred>`result`</font>和<font color=darkred>`result2`</font>的<font color=red>`<div>`</font>區域並進行運作。</b>

```JavaScript=
        $('#result').append($date)
        $('#result2').append($date2)
    });
```

>>## <font color=red><b>最後達至</font>：讓使用者選擇自己的生日月份後，出現能夠選擇自己的生日日期範圍得兩個按鈕。</b>

*<h3>2. 設定<font color=red>`<id>`</font>為<font color=darkred>`<up>`</font>的按鈕在被點擊後的JQuery。</h3>*

<b><font color=black>當<font color=red>`<id>`</font>為<font color=darkred>`up`</font>被點擊後，<font color=red>`<id>`</font>為<font color=darkred>`result`</font>、<font color=darkred>`up`</font>和<font color=darkred>`down`</font>的<font color=red>`<div>`</font>code會以fadeOut的方式在網頁消失。</b>
```JavaScript=
$('#up').on('click', () => {
            $('#result').fadeOut()
            $('#up').fadeOut()
            $('#down').fadeOut()
```
<b>設定三個新的code，代號分別為<font color=darkred>`$photo`</font>、<font color=darkred>`$text`</font>和<font color=darkred>`$backbutton`</font>。

<font color=darkred>`$photo`</font>用於加入新的TAG<font color=red>`<img>`</font>，並用<font color=darkblue>`.attr(）`</font>插入對應第一部分的按鈕答案出現對應的星座圖片。

<font color=darkred>`$text`</font>用於加入新的TAG<font color=red>`<div>`</font>，並用<font color=darkblue>`.text(）`</font>插入對應星座的文字簡介。再使用<font color=darkblue>`.addClass`</font>加入名為<font color=darkred>`textq`</font>的<font color=darkred>`class`</font>為文字加上樣式。

<font color=darkred>`$backbutton`</font>為加入新的TAG<font color=darkred>`<button>`</font>，並用<font color=darkblue>`.attr(）`</font>加入名為<font color=darkred>`btn btn-secondary btn-lg`</font>的<font color=darkred>`class`</font>為按鈕加上樣式；再用<font color=darkblue>`.attr(）`</font>加入名為<font color=darkred>`back`</font>的<font color=darkred>`id`</font>讓按鈕加上代表的<font color=red>`<id>`</font>讓該按鈕能收到指令運作。</b>
```JavaScript=
            $photo = $('<img>').attr('src', './photo/capricorn1.png')
            $text = $('<div>').text('Resourceful, hard-working, master of material realm, persistent, pillar of society, seeks place in establishment, fixed on tangible results, strategizer, private (though with polished public image), a leader, authority, desires to leave enduring legacy.').addClass('textq')
            $backbutton = $('<button>').attr('class', 'btn btn-secondary btn-lg').attr('id', 'back').text('BACK')
```
<b>最後在<font color=red>`<id>`</font>為<font color=darkred>`result2`</font>使用<font color=darkblue>`.append()`</font>代入<font color=darkred>`$text`</font>和<font color=darkred>`$photo`</font>的程式碼，讓上面設定的新程式碼能加入在<font color=darkred>`result2`</font>區域並進行運作。

也是同樣在<font color=red>`<id>`</font>為<font color=darkred>`result3`</font>使用<font color=darkblue>`.append()`</font>代入<font color=darkred>`$backbutton`</font>的程式碼，讓上面設定的新程式碼能加入在<font color=darkred>`result3`</font>區域並進行運作。

加上為<font color=red>`<id>`</font>為<font color=darkred>`back`</font>使用<font color=darkblue>`.click(function()`</font>代入<font color=darkred>`window.location.reload()`</font>的程式碼，為BACK按鈕加入指令運作。</b>

```JavaScript=
            $('#result2').append($text).append($photo)
            $('#result3').append($backbutton)

            $('#back').click(function() {
                window.location.reload()
            });
        });
```
>>## <font color=red><b>最後達至</font>：若使用者選擇自己的生日日期範圍為按鈕一，即<font color=red>`<id>`</font>為<font color=darkred>`up`</font>的按鈕，便出現其對應的星座文字簡介及代表圖片，BACK按鈕在按下後能夠重新整理網頁，再次進行查詢。</b>

*<h3>3. 設定<font color=red>`<id>`</font>為<font color=darkred>`<down>`</font>的按鈕在被點擊後的JQuery。</h3>*

### **<font color=red>其原理與第二部分相同，只是對應的圖片與文字改變。</font>**

```JavaScript=
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
```
>>## <font color=red><b>最後達至</font>：若使用者選擇自己的生日日期範圍為按鈕一，即<font color=red>`<id>`</font>為<font color=darkred>`down`</font>的按鈕，便出現其對應的星座文字簡介及代表圖片，BACK按鈕在按下後能夠重新整理網頁，再次進行查詢。</b>

網站的特色或亮點
---
- **桌面版與手機版**
為方便使用者在不同設備使用，我在CSS加上手機版的設定的code，以增加網頁的使用方便度。

```CSS=
        @media (max-width: 600px) {
    .bgimg {
        height: 80%;
    }
    .w3-animate-opacity {
        height: 300px;
    }
    .result,
    .result2 {
        display: block;
    }
    .col {
        position: relative;
        width: 100%;
        padding-right: 100px;
        padding-left: 30px;
    }
    .coltitle {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 10px;
    }
    .char {
        font-size: 18px;
        height: 40px;
        animation: an 1s ease-out 1 both;
        display: inline-block;
    }
}
``` 
- **網頁完全由使用者控制及單一頁面完成所有操作**
網頁要操作必須由使用者點擊相關按鈕才會運作；完全為單一頁面(Sign.html)，頁面只有基本的程式碼，所有改變都由使用者點擊按鈕，利用JQuery運作增加或刪走相關的TAG程式碼。

```HTML=
<body>

    <div class="container">
        <div class="row">
            <div class="coltitle">
                <p id="text">Enter your answer, to know your SIGN.</p>
            </div>
            <div class="w3-animate-opacity"><img src="/photo/background.jpg" class="bgimg" id="img"></div>
            <div class="col text">
                <div class="textq" id="month">Month of your birthday
                    <div class="btn-group">
                        <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          CHOOSE...
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" id="jan">JANUARY</a>
                            <a class="dropdown-item" id="feb">FEBRUARY</a>
                            <a class="dropdown-item" id="march">MARCH</a>
                            <a class="dropdown-item" id="april">APRIL</a>
                            <a class="dropdown-item" id="may">MAY</a>
                            <a class="dropdown-item" id="june">JUNE</a>
                            <a class="dropdown-item" id="july">JULY</a>
                            <a class="dropdown-item" id="august">AUGUST</a>
                            <a class="dropdown-item" id="sep">SEPTEMBER</a>
                            <a class="dropdown-item" id="oct">OCTOBER</a>
                            <a class="dropdown-item" id="nov">NOVEMBER</a>
                            <a class="dropdown-item" id="dec">DECEMBER</a>
                        </div>
                    </div>
                </div>
                <div id="result"></div>
                <br>
                <div id="result2"></div>
                <br>
                <div id="result3"></div>
                <p></p>
                <footer style="color: white; font-size: 15px;">
                    COPYRIGHT &copy; 2019 RACHEL AU
                </footer>
            </div>

            <!-- JS -->
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="/js/sign.js"></script>

</body>

</html>
```
