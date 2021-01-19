import {useEffect} from 'react';
import './Image.css';

const imgSrcs = [
    "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
    "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
    "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
    "https://homepages.cae.wisc.edu/~ece533/images/frymire.png",
    "https://homepages.cae.wisc.edu/~ece533/images/girl.png",
    "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
    "https://homepages.cae.wisc.edu/~ece533/images/peppers.png",
    "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
]

function Image () {

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      (entries, imgObserver) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            const element = entry.target;
            element.src = element.getAttribute('dataSrc');
            element.removeAttribute('dataSrc');
            imgObserver.unobserve(element)
          }
        })
      }
    )
    const imgArr = document.querySelectorAll('img')
    imgArr.forEach((item) => {
      imageObserver.observe(item);
    })
  });
    return imgSrcs.map((src) => (
        <div class= "imageBox">
            <img dataSrc={src} alt="imageAlt"></img>
        </div>
    ))
}

export default Image;