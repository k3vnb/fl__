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

function aboutUsDisplay(){
    $('.about-us-tile').on('click', () => {
        console.log('clicked')
    })
}

function loadAboutUsTile(){
    $(".tile-container").append(
        `<div style="order: 2" class="tile about-us-tile card">
            <img class="tile-text" src="img/About-Us.svg" alt="About Us"/>
        </div>
        `
    )
    aboutUsDisplay();
}

function loadLinkTiles(){
    STORE.forEach(tile => {
        console.log(tile.title)
        const { id, href, title, tileIcon, tileText } = tile;
        $(".tile-container").append(
            `<a style="order: ${id}" class="tile-link card" id="tile-${id}" href=${href} title=${title} target="_blank">
                <div class="tile">
                    <img class="tile-icon" src=${tileIcon} alt=${title}/>
                    <img class="tile-text" src=${tileText} alt=${title}/>
                </div>
            </a>`
        )
    })

    loadAboutUsTile();
}


$(loadLinkTiles);