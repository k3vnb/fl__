'use strict'

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

function closeAboutUs(){
    $('.about-us-tile').on('click', 'button', event => {
        event.stopPropagation();
        $('.about-us-tile').empty();
        $('.tile').addClass('tile-hover-fx');
        $('a .tile').css('boxShadow', '2px 2px 9px 3px #595959a8');
        $('#tile-2').css('margin-right', 50);
        $('.about-us-tile').removeClass('about-us-modal')
        $('.about-us-tile').html(`
                <img class="tile-text" src="img/About-Us.svg" alt="About Us"/>
        `)
    })
}

function aboutUsDisplay(){
    $('.about-us-tile').on('click', () => {
        $('.tile').removeClass('tile-hover-fx');
        $('a .tile').css('boxShadow', 'none');
        $('#tile-2').css('margin-right', 0);
        setTimeout(() => {
            $('.about-us-tile').empty().fadeIn(1000).html(
                `
    
                <video autoplay="autoplay" class="ignore-observer" playsinline="playsinline" muted="muted" poster="">
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
                </video>
                <p class="about-us-modal-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio suscipit voluptatibus vero eos recusandae tempora nihil assumenda, sunt at odio atque dolores quasi fugit dolorem doloremque amet! Maxime, deleniti.</p>
                <button class="close-this-modal">
                    &#10005;
                </button>
        
                `)
        }, 145)
        
        $('.about-us-tile').addClass('about-us-modal');
    })

    closeAboutUs()
}

function loadAboutUsTile(){
    $(".tile-container").append(
        `<div style="order: 2" id="tile-2" class="tile about-us-tile card tile-hover-fx">
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
                <div class="tile tile-hover-fx">
                    <img class="tile-icon" src=${tileIcon} alt=${title}/>
                    <img class="tile-text" src=${tileText} alt=${title}/>
                </div>
            </a>`
        )
    })

    loadAboutUsTile();
}


$(loadLinkTiles);