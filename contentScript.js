var playButtonObserver;
var skipIntroButtonObserver;
var nextEpisodeButtonObserver;
var fullScreenButtonObserver;
var isFullScreen = Boolean(false);

function putPlayBotton(){
  var playButton = document.getElementsByClassName('vjs-big-play-button')[0];

  playButton.click();
};

function putFullScreenButton(){
  var fullScreenButton = document.getElementsByClassName('vjs-fullscreen-control vjs-control vjs-button')[0];
  //document.querySelector('#my-player > div.vjs-control-bar > button.vjs-fullscreen-control.vjs-control.vjs-button');

  if(isFullScreen === false){
    // console.log('FULL');
    // console.log(fullScreenButton);
    // console.log(isFullScreen);
    isFullScreen = true;
    try {
      fullScreenButton.click();
    } catch (error) {
      console.log("ERROR!");
      putFullScreenButton();
    }
    
  }
};

function putSkipIntroButton(){
  var skipIntroButton = document.querySelector('#my-player > div.vjs-overlay.vjs-overlay-bottom-left.vjs-overlay-skip-intro.vjs-overlay-background');

  skipIntroButtonObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      console.log('SKIP');
      console.log(mutation);
      skipIntroButton.click();
      window.setTimeout(putFullScreenButton(), 3000);
    });    
  });
  
  // создаем конфигурации для наблюдателя
  let config = { attributes: true, childList: true, characterData: true };
  
  // запускаем механизм наблюдения
  skipIntroButtonObserver.observe(skipIntroButton, config);
};

function putNextEpisodeButton(){
  var nextEpisodeButton = document.querySelector('#my-player > div:nth-child(8)');

  nextEpisodeButtonObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      console.log('NEXT');
      console.log(mutation);
      if (isFullScreen === true){
        isFullScreen = false;
      }
      nextEpisodeButton.click();
    });    
  });
  
  // создаем конфигурации для наблюдателя
  let config = { attributes: true, childList: true, characterData: true };
  
  // запускаем механизм наблюдения
  nextEpisodeButtonObserver.observe(nextEpisodeButton, config);
};

window.onload = function(){
    putSkipIntroButton();
    putNextEpisodeButton();
    // putFullScreenButton();
    putPlayBotton();
};