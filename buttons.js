var testButtonObserver;

function testButton(){
  let testButton = document.querySelector('#search_b > form > input[type=submit]:nth-child(3)');

  testButtonObserver = new MutationObserver(function(mutation){
    mutation.forEach(function(){
      testButton.click();
    });
  });

  let config = { attributes: true, childList: true, characterData: true };

  testButtonObserver.observe(testButton, config);  
}

function putPlayBotton(){
  // выбираем нужный элемент
  var playBotton = document.querySelector('#my-player > div.vjs-control-bar > button.vjs-play-control.vjs-control.vjs-button.vjs-paused');

  if (playBotton === null){
    playBotton = document.querySelector('#my-player > div.vjs-control-bar > button.vjs-play-control.vjs-control.vjs-button.vjs-paused');
  }
  
  // создаем новый экземпляр наблюдателя
  var playButtonObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      playBotton.click();
    });    
  });
  
  // создаем конфигурации для наблюдателя
  let config = { attributes: true, childList: true, characterData: true };
  
  // запускаем механизм наблюдения
  playButtonObserver.observe(playBotton, config);
};

function putSkipIntroButton(){
  var skipIntroButton = document.querySelector('#my-player > div.vjs-overlay.vjs-overlay-bottom-left.vjs-overlay-skip-intro.vjs-overlay-background');

  var skipIntroButtonObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      skipIntroButton.click();
    });    
  });
  
  // создаем конфигурации для наблюдателя
  let config = { attributes: true, childList: true, characterData: true };
  
  // запускаем механизм наблюдения
  playButtonObserver.observe(skipIntroButton, config);
};

function putNextEpisodeButton(){
  var nextEpisodeButton = document.querySelector('#my-player > div:nth-child(8)');

  var nextEpisodeButtonObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      skipIntroButton.click();
    });    
  });
  
  // создаем конфигурации для наблюдателя
  let config = { attributes: true, childList: true, characterData: true };
  
  // запускаем механизм наблюдения
  playButtonObserver.observe(nextEpisodeButton, config);
};