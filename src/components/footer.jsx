import React from "react";

function Footer() {
  const footerArr = [
    '"Pair Programming is better than not Pair Programming" -somebody, probably',
    '"Two heads are better than one" -IDK',
    '"Keep calm and pair program" -Elon Musk',
    '"Oh, your one of those people ローロ" -You know who',
    '"Do people actually read these" -Minecraft',
    '"Only kings Pair Program" -TheIronicAnimeGirl',
    '"He\'s the best gamer I ever saw" -Technoblade',
    '"Make Pair Programing Great Again" -Tonald Drump',
    '"I walk a lonely road, unless I am pair programming" -Blue Day',
    '"I\'m running out of ideas" -The guy making these',
    '"I wOrk BeTtEr bY mY sElF" -Ineffeciency',
    '"Got a bug in your code FLEX TAPE" -Knock off Billy Mays',
  ];
  function randoIndex() {
    return Math.floor(Math.random() * footerArr.length);
  }
  return (
    <footer>
      <p className="footer-qoute">{footerArr[randoIndex()]}</p>
    </footer>
  );
}
export default Footer;
