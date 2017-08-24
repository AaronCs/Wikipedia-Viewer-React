import { SEARCH, CLEAR } from './types';
import axios from 'axios';

export function clearResults() {
  return {
    type: CLEAR,
  };
}

export function search(searchTerm) {
  return (dispatch) => {
    // Call the wikipedia API from here.
    let config = {
      params: {
        action: 'opensearch',
        origin: '*',
        format: 'json',
        search: searchTerm,
      },
      };
      axios.get('https://en.wikipedia.org/w/api.php', config).then(
       (res) => {
         dispatch(searchResults(res.data));
       }
     );
      // JUST NEEDED TO ADD origin=* TO IT TO WORK!
    };
  }

  export function searchResults(results) {
    let slicedResults = results.slice(1, 4);
    let finalResults = [];
    for(let i = 0; i < slicedResults[0].length; ++i) {
      // I feel like there's a better way than this to make an
      // array of objects.
      finalResults.push({
        title: slicedResults[0][i],
        desc: slicedResults[1][i],
        link: slicedResults[2][i]
      });
    }
    return {
      type: SEARCH,
      data: finalResults,
    };
  }
