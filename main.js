//桜
window.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.cherry-blossom-container');
  
    // 花びらを生成する関数
    const createPetal = () => {
      const petalEl = document.createElement('span');
      petalEl.className = 'petal';
      const minSize = 10;
      const maxSize = 15;
      const size = Math.random() * (maxSize + 1 - minSize) + minSize;
      petalEl.style.width = `${size}px`;
      petalEl.style.height = `${size}px`;
      petalEl.style.left = Math.random() * innerWidth + 'px';
      section.appendChild(petalEl);
  
      // 一定時間が経てば花びらを消す
      setTimeout(() => {
        petalEl.remove();
      }, 10000);
    }
  
    // 花びらを生成する間隔をミリ秒で指定
    setInterval(createPetal, 300);
  });
//泡
  document.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.bubble-background');
  
    // 泡を生成する関数
    const createBubble = () => {
      const bubbleEl = document.createElement('span');
      bubbleEl.className = 'bubble';
      const minSize = 10;
      const maxSize = 50;
      const size = Math.random() * (maxSize + 1 - minSize) + minSize;
      bubbleEl.style.width = `${size}px`;
      bubbleEl.style.height = `${size}px`;
      bubbleEl.style.left = Math.random() * innerWidth + 'px';
      section.appendChild(bubbleEl);
  
      // 一定時間が経てば泡を消す
      setTimeout(() => {
        bubbleEl.remove();
      }, 8000);
    }
  
    // 泡の生成を開始するトリガー（初期値はOFF）
    let activeBubble = null;
  
    // 泡の生成をストップする関数
    const stopBubble = () => {
      clearInterval(activeBubble);
    };
  
    // Intersection observerに渡すコールバック関数
    const cb = (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          activeBubble = setInterval(createBubble, 300);
        } else {
          stopBubble();
        }
      })
    };
  
    // Intersection observerに渡すオプション
    const options = {
      rootMargin: "100px 0px"
    }
  
    // Intersection observerの初期化
    const io = new IntersectionObserver(cb, options);
    io.POLL_INTERVAL = 100; // Polyfill
    io.observe(section);
  });
//落ち葉
  window.addEventListener('DOMContentLoaded', ()=> {
    // コンテナを指定
    const container = document.querySelector('.leaves-container');
  
    // 葉っぱを生成する関数
    const createLeaf = (leafClass, minSizeVal, maxSizeVal) => {
      const leafEl = document.createElement('span');
      leafEl.className = `leaf ${leafClass}`;
      const minSize = minSizeVal;
      const maxSize = maxSizeVal;
      const size = Math.random() * (maxSize + 1 - minSize) + minSize;
      leafEl.style.width = `${size}px`;
      leafEl.style.height = `${size}px`;
      leafEl.style.left = Math.random() * 100 + '%';
      container.appendChild(leafEl);
  
      // 一定時間が経てば葉っぱを消す
      setTimeout(() => {
        leafEl.remove();
      }, 8000);
    }
  
    // 葉っぱを生成する間隔をミリ秒で指定する
    // createLeafの引数には、'クラス名', '最小サイズ', '最大サイズ'を渡す
    setInterval(createLeaf.bind(this, 'leaf-1', 30, 50), 1000);
    setInterval(createLeaf.bind(this, 'leaf-2', 30, 50), 1000);
    setInterval(createLeaf.bind(this, 'leaf-3', 30, 50), 1000);
  });

  //雪
  window.addEventListener('DOMContentLoaded', ()=> {
    // コンテナを指定
    const container = document.querySelector('.snow-container');
  
    // 雪を生成する関数
    const createSnow = () => {
      const snowEl = document.createElement('span');
      snowEl.className = 'snow';
      const minSize = 5;
      const maxSize = 10;
      const size = Math.random() * (maxSize - minSize) + minSize;
      snowEl.style.width = `${size}px`;
      snowEl.style.height = `${size}px`;
      snowEl.style.left = Math.random() * 100 + '%';
      container.appendChild(snowEl);
  
      // 一定時間が経てば雪を消す
      setTimeout(() => {
        snowEl.remove();
      }, 10000);
    }
  
    // 雪を生成する間隔をミリ秒で指定
    setInterval(createSnow, 100);
  });

  //aboutを押すと文字が出る
  const aboutSpan = document.querySelector('.about');
  const additionalText = document.querySelector('.additional-text');

  aboutSpan.addEventListener('click', () => {
    additionalText.style.display = 'block';
  });