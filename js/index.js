'use strict'

//STORE contains tiles info for <a> links tiles, it does not contain the about-us tile, that one is appended separately
const STORE = [
    {
        id: 0,
        title: 'Flooent Legal',
        href: 'http://www.flooentlegal.com/',
        tileIcon: 'img/FlooentLegal-Icon.svg',
        tileText: 'img/FlooentLegal-Text.svg'
    },
    {
        id: 1,
        title: 'Flooent MD',
        href: 'http://flooentmd.com/',
        tileIcon: 'img/FlooentMD-Icon.svg',
        tileText: 'img/FlooentMD-Text.svg'
    },
    {
        id: 3,
        title: 'Flooent Edu',
        href: '',
        tileIcon: 'img/FlooentEdu-Icon.svg',
        tileText: 'img/FlooentEdu-Text.svg'
    }
]  

//change the address of the animation to wherever your animation is hosted. Right now they point to the same movie, but the dimensions should hold so that a 1x1 aspect ration works in mobile and 16x9 works in desktop.  Change the aboutUsText to say whatever copy you'd like in that element.
const videoData = {
    mp4LinkMobile: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    mp4LinkDesktop: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    aboutUsText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio suscipit voluptatibus vero eos recusandae tempora nihil assumenda, sunt at odio atque dolores quasi fugit dolorem doloremque amet! Maxime, deleniti.'
}

//the two video tags hold the info for your videos (desktop & mobile). You may need some configuration depending on your video type (is it mp4 as stated here? do you want it muted?). If you want a still image to show while the video is downloading it can go in the poster attribute.
const aboutUsModalHTML =  `
    <video autoplay="autoplay" class="about-us-video about-us-video-desktop-view" playsinline="playsinline" muted="muted" poster="">
        <source src="${videoData.mp4LinkDesktop}" type="video/mp4">
    </video> 
    <video autoplay="autoplay" class="about-us-video about-us-video-mobile-view" playsinline="playsinline" muted="muted" poster="">
        <source src="${videoData.mp4LinkMobile}" type="video/mp4">
    </video> 
    <p class="about-us-modal-text">${videoData.aboutUsText}</p>
    <button class="close-this-modal" aria-label="Close">
        &#10005;
    </button>
    `

// Don't touch the stuff below unless you know what you're doing! Mostly jQuery below, some vanilla JS.
let modalIsActive = false;

function closeAboutUs(){
    $('.about-us-tile').on('click', 'button', event => {
        event.stopPropagation();
        modalIsActive = false;
        $('.about-us-tile > *').fadeOut(500);
        if (window.matchMedia('(max-width: 700px)').matches){
            $('a .tile').fadeIn(500);
        }
        setTimeout(() => {
            $('.about-us-tile').empty();
            $('.tile').addClass('tile-hover-fx');
            $('a .tile').addClass('tile-box-shadow').removeClass('hide-tiles');
            $('#tile-2').addClass('about-us-position').css('justifyContent', 'flex-end');
            $('.about-us-tile').removeClass('about-us-modal')
                .html(`
                    <img class="tile-text" src="img/AboutUs.svg" alt="About Us"/>
            `)
        }, 145)
    })
}

function aboutUsDisplay(){
    $('.about-us-tile').on('click', () => {
        modalIsActive = true;
        $('.tile').removeClass('tile-hover-fx');
        $('a .tile').removeClass('tile-box-shadow').addClass('hide-tiles');
        $('#tile-2').css('marginRight', 0);
        $('#tile-3').addClass('adjustMargin');
        if (window.matchMedia('(max-width: 700px)').matches){
            $('a .tile').fadeOut(500);
        }
        setTimeout(() => {
            $('#tile-2').css('justifyContent', 'space-around');
            $('.about-us-tile').empty().fadeIn(1000).html(
                `
                    ${aboutUsModalHTML}
                `);
            $('.about-us-tile > *').fadeIn(500);
        }, 145)
        $('.about-us-tile').addClass('about-us-modal');
    })

    closeAboutUs()
}

function loadAboutUsTile(){
    $(".tile-container").append(
        `<div style="order: 2" id="tile-2" class="tile about-us-tile card tile-hover-fx tile-box-shadow">
            <img class="tile-text" src="img/AboutUs.svg" alt="About Us"/>
        </div>
        `
    )
    aboutUsDisplay();
}

function onCloseFlooentEDUClick(){
    $('.close-fl-edu-modal').click(() => {
        modalIsActive = false;
        $('.flooent-edu-modal').fadeOut(500)
        $('.tile-container').fadeIn(200)
    })
}

function onFlooentEDUClick(){
    $('.tile-container').on('click', '#tile-3', () => {
        modalIsActive = true;
        $('.tile-container').fadeOut(500)
        $('.flooent-edu-modal').fadeIn(500)
    })
    onCloseFlooentEDUClick();
}

function loadLinkTiles(){
    STORE.forEach(tile => {
        const { id, href, title, tileIcon, tileText } = tile;
        const linkAttr = href.length ? 'href' : 'name';
        $(".tile-container").append(
            `<a style="order: ${id}" class="tile-link card" id="tile-${id}" ${linkAttr}="${href}" title="${title}"  target="_blank">
                <div class="tile tile-hover-fx tile-box-shadow" id="${id}">
                    <img class="tile-icon" src=${tileIcon} alt=${title}/>
                    <img class="tile-text" src=${tileText} alt=${title}/>
                </div>
            </a>`
        )
    })

    loadAboutUsTile();
    onFlooentEDUClick();
}


$(loadLinkTiles);
