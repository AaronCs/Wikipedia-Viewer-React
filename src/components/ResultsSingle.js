import React from 'react';
// TODO: Possibly make the results into a modal viewing thing?

const ResultsSingle = ({ title, link, desc, tileSize}) => {
  return(
        <a className='tile is-child box' href={link}>
          <article>
            <header className='title'>
              {title}
            </header>
            <section>
              Short Description:
              <p>
                {desc}
              </p>
            </section>
          </article>
        </a>
  );
};

export default ResultsSingle;
