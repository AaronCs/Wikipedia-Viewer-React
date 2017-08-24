import React from 'react';

const ResultsSingle = ({ title, link, desc}) => {
  return(
      <div>
        <a className='results-single__link' href={link}>
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
      </div>
  );
};

export default ResultsSingle;
