/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator() {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const left = document.createElement('div');
  left.classList.add('left-button');
  left.textContent = '<';
  carousel.appendChild(left);

  const img1 = document.createElement('img');
  img1.setAttribute('src', 'https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg');
  carousel.appendChild(img1);

  const img2 = document.createElement('img');
  img2.setAttribute('src', 'https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg');
  carousel.appendChild(img2);

  const img3 = document.createElement('img');
  img3.setAttribute('src', 'https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg');
  carousel.appendChild(img3);

  const img4 = document.createElement('img');
  img4.setAttribute('src', 'https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg');
  carousel.appendChild(img4);

  const right = document.createElement('div');
  right.classList.add('right-button');
  right.textContent = '>';
  carousel.appendChild(right);

  left.addEventListener('click', e => {
    img1.display = 'flex';
  })

  return carousel;

}

document.querySelector('.carousel-container').appendChild(carouselCreator());