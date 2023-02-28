function onmouseload() {
  const botao = document.getElementById("icone-pokebola");
  const menu = document.getElementById("menu");
  const pisca = document.getElementById("pisca");

  botao.onmouseenter = () => {
    menu.className = "menu-slide";
    pisca.className = "pisca-ativo";
  };

  menu.onmouseleave = () => {
    menu.className = "menu";
  };

  botao.onmouseleave = () => {
    pisca.className = "pisca";
  };
}

function playVideo() {
  const video = document.getElementById("video");
  const play = document.getElementById("play");

  play.onclick = () => {
    if (video.paused) {
      video.play();
      return;
    }

    video.pause();
  };
}

function piscasegue() {
  const pisca = document.getElementById("pisca-ativo");
  const botao = document.getElementById("icone-pokebola");
  pisca.style.left = botao.style.left;
  pisca.style.top = botao.style.top;
  pisca.style.backgroundColor = "yellow";

  return;
}

onmouseload();
playVideo();

