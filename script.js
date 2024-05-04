  
  
  
  function randomText () {
    var text = ("日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｷﾑﾕﾗｾﾈｽﾀﾇﾍ:・.=*+-<>¦｜ﾘ01")
    letter = text[Math.floor(Math.random() * text.length)]
    return letter;
  }

  
  function rain() {
    let cloud = document.querySelector('.cloud');

    let e = document.createElement('div');

    let left = Math.floor(Math.random() * 315);

    let size = Math.random() * 1.5;

    e.classList.add('text');
    cloud.appendChild(e);

    e.innerText = randomText()
    e.style.left = left + 'px';
    e.style.fontSize = 0.7 + size + 'em';
   
    e.style.height = 0.5 + height + 'px';
    e.style.animationDuration = 1+duration+'s';

    setTimeout(function() {
        cloud.removeChild(e);
    },2000)
   } 

  setInterval(function() {
    rain()
  },10);