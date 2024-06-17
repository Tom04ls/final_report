const pgtp_btn = document.querySelector(".pgtp");
//cssのpgtpボタンの名前を.pgtpにしておく
//smoothがものによっては対応していないかも
//.pgtp内で，opacityの値を0にしておく，

pgtp_btn.addEventListener("click",scroll_top);
function scroll_top(){
    window.scroll({ top: 0,behavior: "smooth"});
}

window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.scrollY > 300) {
    pgtp_btn.style.opacity = "1";
  } else if (window.scrollY < 300) {
    pgtp_btn.style.opacity = "0";
  }
}