import Game, { GameTemplateProps } from 'templates/Game'
import galleryMock from 'components/Gallery/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'the-witcher' } }],
    fallback: false
  }
}

const descriptionHTML = `
<div class="banner welcome-offer-banner ng-scope ng-hide" welcome-offer-banner="" timer="0" ng-show="welcomeOfferBanner.isCounterReady &amp;&amp; !timer.finished"><div class="banner__header">
  This game is part of your Welcome Offer!
</div>
<div class="welcome-offer-banner__description">
  <img src="https://items.gog.com/the_witcher_3_wild_hunt/COVER_970x300_EN.png">
  <h3>One of the most acclaimed RPGs of all time Now ready for a new generation</h3>
  <hr>
  <div style="overflow: hidden;">
    <img src="https://items.gog.com/the_witcher_3_wild_hunt/rewards_logo.png" style="margin: 5px 15px 0 10px; float: left">
    <span style="display: block;">
    <br>
    <a href="https://www.thewitcher.com/my-rewards" target="”_blank”"><b>Rewards for owning The Witcher 3: Wild Hunt</b></a>
    <br>

  Launch The Witcher 3: Wild Hunt via <b>GOG GALAXY 2.0</b> and start playing. Your rewards will be waiting for you in the Royal Palace in Vizima. Check the letter from Yennefer in your inventory for help locating them!</span></div><br><hr><br><br><br><img src="https://items.gog.com/the_witcher_3_wild_hunt/ABOUT_970x300_EN.png"><br><br>
  You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.<br><br>
  The Complete Edition contains the base game, offering a huge, over 100-hour long, open-world adventure, as well as both of its massive story expansions: Hearts of Stone &amp; Blood and Wine worth an extra 50 hours of gameplay!<br><br>
  It also comes with all additional content released for the game, alongside new features and items, including a built-in Photo Mode, swords, armor, and alternate outfits inspired by The Witcher Netflix series — and more!<br><br><img src="https://items.gog.com/the_witcher_3_wild_hunt/Updated_970x300_EN.png"><br><br>
  Behold the dark fantasy world of the Continent like never before! This edition of The Witcher 3: Wild Hunt has been enhanced with numerous visual and technical improvements, including vastly improved level of detail, a range of community created and newly developed mods for the game, real-time ray tracing, and more — all implemented with the power of modern PCs in mind.<br><br><img src="https://items.gog.com/the_witcher_3_wild_hunt/Monster_Slayer_970x300_EN.png"><br><br>
  Trained from early childhood and mutated to gain superhuman skills, strength, and reflexes, witchers are a counterbalance to the monster-infested world in which they live.<br><ul><li>Gruesomely destroy foes as a professional monster hunter armed with a range of upgradeable weapons, mutating potions, and combat magic.</li><li>Hunt down a wide variety of exotic monsters, from savage beasts prowling mountain passes to cunning supernatural predators lurking in the shadowy back alleys of densely populated cities.</li><li>Invest your rewards to upgrade your weaponry and buy custom armor, or spend them on horse races, card games, fist fighting, and other pleasures life brings.</li></ul><img src="https://items.gog.com/the_witcher_3_wild_hunt/Open_World_970x300_EN.png"><br><br>
  Built for endless adventure, the massive open world of The Witcher sets new standards in terms of size, depth, and complexity.<br><ul><li>Traverse a fantastical open world: explore forgotten ruins, caves, and shipwrecks, trade with merchants and dwarven smiths in cities, and hunt across the open plains, mountains, and seas.</li><li>Deal with treasonous generals, devious witches, and corrupt royalty to provide dark and dangerous services.</li><li>Make choices that go beyond good &amp; evil, and face their far-reaching consequences.</li></ul><img src="https://items.gog.com/the_witcher_3_wild_hunt/Child_of_Prophercy_970x300_EN.png"><br><br>
  Take on the most important contract of your life: to track down the child of prophecy, the key to saving or destroying this world.<br><ul><li>In times of war, chase down the child of prophecy, a living weapon foretold by ancient elven legends.</li><li>Struggle against ferocious rulers, spirits of the wilds, and even a threat from beyond the veil – all hell-bent on controlling this world.</li><li>Define your destiny in a world that may not be worth saving.</li></ul>
  <p class="description__copyrights">
    The Witcher 3: Wild Hunt © 2016 CD Projekt S.A. All Rights Reserved.
  </p>
`

export async function getStaticProps() {
  return {
    props: {
      cover:
        'https://images.gog-statics.com/e6b978f13174499c55f2b8dcc4ab9d08eae7886ab4c72c4b8d0193a97d6babbd.jpg',
      gameInfo: {
        title: 'The Witcher',
        price: '59.00',
        description: `You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world. 
              The Complete Edition contains the base game, offering a huge, over 100-hour long, open-world adventure, as well as both of its massive story expansions: Hearts of Stone & Blood and Wine worth an extra 50 hours of gameplay!
              It also comes with all additional content released for the game, alongside new features and items, including a built-in Photo Mode, swords, armor, and alternate outfits inspired by The Witcher Netflix series — and more!`
      },
      gallery: galleryMock,
      description: descriptionHTML,
      details: {
        developer: 'Diferent tales',
        releaseDate: '2020-11-21T23:00:00',
        platforms: ['windows', 'mac', 'linux'],
        publisher: 'Walkabout',
        rating: 'BR0',
        genres: ['Role-playing']
      },
      upcomingGames: gamesMock,
      upcomingHighLight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}
