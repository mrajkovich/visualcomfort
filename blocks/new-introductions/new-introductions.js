import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const divs = block.querySelectorAll('.new-introductions > div');

  divs.forEach((div, index) => {
    if (index === 0) div.classList.add('description');
    if (index === 1) div.classList.add('cards');
  });

  const buttonLink = block.querySelector('.button-container a');
  buttonLink?.classList.add('button-primary');

  // const cols = [...block.firstElementChild.children];
  // block.classList.add(`columns-${cols.length}-cols`);

  // // setup image columns
  // [...block.children].forEach((row) => {
  //   [...row.children].forEach((col) => {
  //     const pic = col.querySelector('picture');
  //     if (pic) {
  //       const picWrapper = pic.closest('div');
  //       if (picWrapper && picWrapper.children.length === 1) {
  //         // picture is only content in column
  //         picWrapper.classList.add('columns-img-col');
  //       }
  //     }
  //   });
  // });
}
