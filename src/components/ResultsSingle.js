import React from 'react';

const ResultsSingle = ({ title, link, desc}) => {
  return(
      <div>
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
        <footer>
          <a href={link}>Link to page</a>
        </footer>
      </div>
  );
};

export default ResultsSingle;
