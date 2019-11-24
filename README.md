# auwingho.github.io
# 網站筆記
前言
---
我使用了colorlib網站所提供的personal樣式 (https://colorlib.com/wp/template/personal/) ，因應網站內容刪除或移動或增加了下相關code。

所有統一改變之處
---
- CSS方面增加了：
  - text.css (自訂義樣式)
  - https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css (CDN插件)
  - Bootstrap的CSS CODE (使用Bootstrap內的樣式)

- 文字樣式更改為'Noto Sans TC', sans-serif (https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap)

- 導覽列
  - 更改了LOGO的圖片
  - 更改了導覽列的內容，使用我自訂的導覽列。
  - 更改了字體大小，但樣式效果依舊。
  - 在手機板的CSS樣式(linearicons.css)中，更換了顯示的按鈕圖片的Unicode為f0c9(由Font Awesome提供)，並透過padding-top及position固定了導覽列按鈕的位置；更改了手機板的彈出導覽列的背景、文字樣式及顏色。

Homepage主頁(index.html)
---
- 原本網站名稱為Personal，後更改為AU WING HO｜RACHEL｜Homepage主頁，表明網址內容。

- banner-area
  - 保留了這個樣式，但更改了文字的大小，並加上了一個動畫。
  - 動畫來自jQuery文字淡入淡出顯示特效插件reveal-it.js
    (http://www.htmleaf.com/jQuery/Text-Link-Effects/201502261421.html)
  - 更改了圖片為我的圖片，並且隨著需求更改了banner-area的高度。
  - 手機板網頁中，更改.banner-right的左右margin為26%，保持手機板裡的顯示是正常的。

- brands Area
  - 保留了背景，更改了長寬度，作美觀網頁用。

- footer Area
  - 使用Font Awesome內的ICONS，並加上連結。
  - 第三個電郵加上了mailto的語法，讓使用者點選後直接打開他們的郵箱應用程式。
    
AboutMe簡歷(aboutme.html)
---   
- banner Area
  - 更改文字為"簡歷"

- home-about Area
  - 更改了圖片
  - Container比例及其margin-top按照所需更改了
  - 更換了原本個人簡介的位置的樣式，使用了Bootstrap的Alerts樣式框住內容

  - 個人資料部分使用了colorlib網站的personal樣式裡，在另外一個頁面中的其中一個樣式，讓使用者可以按照標題點開後，展開相對資料，按另一個標題的內容時便會收起
  - 展開資料中的＂Language Proficiency 語文能力＂欄中，使用了Bootstrap的Alerts樣式框住內容，用顏色凸顯文字內容。

Experience個人經歷(experience.html)
---  
- banner Area
  - 更改文字為"個人經歷"

- timeline Area
  - 使用了colorlib網站的personal樣式裡，在另外一個頁面中的其中一個特效，有著動態的效果顯示一個時間軸。
  - 更改了裡面的內容

Work作品集(work.html)
---  
- banner Area
  - 更改文字為"作品集"

- selection Area
  - 保留了原本的樣式，刪除了不必要的內容，更改成相片的拍攝地名稱，按鈕變成釘選在網頁某處的效果。

- work1/2/3 Area
  - 樣式沒有的區域
  - 使用了Bootstrap的Carousel樣式，讓相片自動按照順序如投影片般展示，同時加上了註解部分，表明拍攝地及景點名稱。
  - 點進相片可顯示原圖，這時使用了colorlib網站的personal樣式裡，在另外一個頁面中的其中一個特效。

Contact聯絡我(contact.html)
---  
- banner Area
  - 更改文字為"聯絡我"

- contact-page Area
  - class="map-wrap"的部分更改為Google地圖提供的URL，設定高寬度為隨著螢幕而改變，使用了語法（vw,view width和vh,view height），方便使用者使用和瀏覽。
  - 手機版本也使用了語法（vw,view width和vh,view height），讓地圖的高寬度為隨著螢幕而改變，方便使用者使用和瀏覽。
  - 來源：https://pjchender.blogspot.com/2015/04/css-3vh-vw.html
  - 地圖下面的內容全部更改，並加上了使用Font Awesome內的ICONS。
  - 留言區因為Github無法顯示動態網頁，故更改了文字並留下樣式。
