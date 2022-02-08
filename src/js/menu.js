import axios from 'axios';
import cards from '../../cardGallery.hbs';


const ul = document.querySelector('.sport-list');
const renderSports = function () {
      axios
    .get('http://localhost:3000/icons')
          .then(({ data }) => {
              data.map(el => {
                  ul.insertAdjacentHTML('afterbegin', cards(el));
              })
          })
    
}

renderSports();