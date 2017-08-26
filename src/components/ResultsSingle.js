import React from 'react';

const ResultsSingle = ({ title, link, desc}) => {
  return(
        <a className='results__single' href={link}>
          Single Result:
          <article>
            <header>
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
