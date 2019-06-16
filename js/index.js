'use strict'

//STORE contains tiles info for <a> links tiles, it does not contain the about-us tile, that one is appended separately
const STORE = [
    {
        id: 0,
        title: 'Flooent Legal',
        href: '#',
        tileIcon: 'img/FlooentLegal-Icon.svg',
        tileText: 'img/FlooentLegal-Text.svg'
    },
    {
        id: 1,
        title: 'Flooent MD',
        href: '#',
        tileIcon: 'img/FlooentMD-Icon.svg',
        tileText: 'img/FlooentMD-Text.svg'
    },
    {
        id: 3,
        title: 'Flooent Edu',
        href: '#',
        tileIcon: 'img/FlooentEdu-Icon.svg',
        tileText: 'img/FlooentEdu-Text.svg'
    }
]  

const videoData = {
    mp4Link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    aboutUsText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio suscipit voluptatibus vero eos recusandae tempora nihil assumenda, sunt at odio atque dolores quasi fugit dolorem doloremque amet! Maxime, deleniti.'
}

const aboutUsModalHTML =  `
    <video autoplay="autoplay" class="about-us-video" playsinline="playsinline" muted="muted" poster="">
        <source src="${videoData.mp4Link}" type="video/mp4">
    </video>
    <p class="about-us-modal-text">${videoData.aboutUsText}</p>
    <button class="close-this-modal">
    &#10005;
    </button>
    `

let modalIsActive = false;

function closeAboutUs(){
    $('.about-us-tile').on('click', 'button', event => {
        event.stopPropagation();
        modalIsActive = false;
        $('.about-us-tile > *').fadeOut(500);
        setTimeout(() => {
            $('.about-us-tile').empty();
            $('.tile').addClass('tile-hover-fx');
            $('a .tile').addClass('tile-box-shadow');
            $('#tile-2').addClass('about-us-position').css('justifyContent', 'flex-end');
            $('.about-us-tile').removeClass('about-us-modal')
                .html(`
                    <img class="tile-text" src="img/About-Us.svg" alt="About Us"/>
            `)
        }, 145)
    })
}

function aboutUsDisplay(){
    $('.about-us-tile').on('click', () => {
        modalIsActive = true;
        $('.tile').removeClass('tile-hover-fx');
        $('a .tile').removeClass('tile-box-shadow');
        $('#tile-2').css('marginRight', 0);
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
            <img class="tile-text" src="img/About-Us.svg" alt="About Us"/>
        </div>
        `
    )
    aboutUsDisplay();
}

function loadLinkTiles(){
    STORE.forEach(tile => {
        const { id, href, title, tileIcon, tileText } = tile;
        $(".tile-container").append(
            `<a style="order: ${id}" class="tile-link card" id="tile-${id}" href="${href}" title="${title}"  target="_blank">
                <div class="tile tile-hover-fx tile-box-shadow" id="${id}">
                    <img class="tile-icon" src=${tileIcon} alt=${title}/>
                    <img class="tile-text" src=${tileText} alt=${title}/>
                </div>
            </a>`
        )
    })

    loadAboutUsTile();
}


$(loadLinkTiles);