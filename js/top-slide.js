const mySwiper = new Swiper('.swiper', {
    effect: 'fade', // フェードモードにする（デフォルトは 'slide'）
    fadeEffect: {
      crossFade: true, // クロスフェードを有効にする（フェードモードの場合 true 推奨）
    },
   
    slidesPerView: 1, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
    spaceBetween: 0, // スライド間の余白（px）
    centeredSlides: true, // アクティブなスライドを中央に配置する
   
    loop: true,  // 無限ループさせる
    loopAdditionalSlides: 1, // 無限ループさせる場合に複製するスライド数
   
    speed: 800, // スライドアニメーションのスピード（ミリ秒）
   
    autoplay: { // 自動再生させる
      delay: 4500, // 次のスライドに切り替わるまでの時間（ミリ秒）
      disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
      waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
    },
    pagination: {
      el: '.swiper-pagination', // ページネーション要素のクラス
      clickable: true, // クリックによるスライド切り替えを有効にする
      type: 'bullets' // 'bullets'（デフォルト） | 'fraction' | 'progressbar'
    },
   
    navigation: {
      nextEl: '.swiper-button-next', // 「次へ」ボタン要素のクラス
      prevEl: '.swiper-button-prev', // 「前へ」ボタン要素のクラス
    },
  });

