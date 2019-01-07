import spellDialog from './img/screenshots/spellDialog.png';
import mathTask from './img/screenshots/mathTask.png';
import englishTask from './img/screenshots/englishTask.png';
import dragDropTask from './img/screenshots/dragDropTask.png';
import imageTask from './img/screenshots/imageTask.png';
import scoreScreen from './img/screenshots/scoreScreen.png';

export default `
<header class="masthead text-center text-white d-flex">
  <div class="container my-auto">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <h1 class="text-uppercase">
          <strong>Ice wastelands</strong>
        </h1>
      </div>
      <div class="col-lg-8 mx-auto">
        <p class="text-faded mb-5">On the planet Florn there was a climatic disaster. The whole planet was covered with snow and ice. Now to survive the inhabitants of this planet have to fight with each other for resources.</p>
        <button class="button-start btn btn-primary" type="button">Play</button>
      </div>
    </div>
  </div>
</header>

<section id="about" class="bg-primary">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="section-heading text-white">What is waiting for you?</h2>
        <p class="text-faded mb-4">Help your character to survive. Use your knowledge to solve tasks.</p>
        <button class="button-start btn btn-primary" type="button">Play</button>
      </div>
    </div>
  </div>
</section>

<section id="screenshots">
  <div class="container-fluid p-0">
    <div class="row no-gutters popup-gallery">
      <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="${spellDialog}" target="_blank">
          <img class="img-fluid" src="${spellDialog}" alt="spell dialog">
        </a>
      </div>
      <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="${mathTask}" target="_blank">
          <img class="img-fluid" src="${mathTask}" alt="math task">
        </a>
      </div>
      <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="${englishTask}" target="_blank">
          <img class="img-fluid" src="${englishTask}" alt="english task">
        </a>
      </div>
      <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="${dragDropTask}" target="_blank">
          <img class="img-fluid" src="${dragDropTask}" alt="drag&drop task">
        </a>
      </div>
      <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="${imageTask}" target="_blank">
          <img class="img-fluid" src="${imageTask}" alt="image task">
        </a>
      </div>
      <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="${scoreScreen}" target="_blank">
          <img class="img-fluid" src="${scoreScreen}" alt="score screen">
        </a>
      </div>
    </div>
  </div>
</section>
    
<section class="bg-dark text-white">
  <div class="container text-center">
    <h2 class="mb-4">Let's play!</h2>
    <button class="button-start btn btn-primary" type="button">Play</button>
  </div>
</section>

<section id="contact">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="section-heading">Iryna Malash</h2>
        <hr class="my-4">
        <p class="mb-5">
          <a href="https://rs.school" target="_blank">Rolling Scopes School</a> Student
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 ml-auto text-center">
        <i class="fab fa-skype fa-3x mb-3 sr-contact-1" style="visibility: visible;"></i>
        <p>
        <a href="skype:Skype_User">yanaisbg</a>
        </p>
      </div>
      <div class="col-lg-4 mr-auto text-center">
        <i class="fas fa-envelope fa-3x mb-3 sr-contact-2" style="visibility: visible;"></i>
        <p>
          <a href="mailto:mal7rish@gmail.com">mal7rish@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
</section>
`;
