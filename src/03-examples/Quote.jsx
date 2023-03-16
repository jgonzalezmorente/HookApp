import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ author, quote }) => {

  const pRef = useRef();
  const [ boxSize, setBoxSize ] = useState({ height: 0, width: 0 });

  useLayoutEffect(() => {    

    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width })

  }, [ quote ]);

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
          <p ref={ pRef } className="mb-3">{ author }</p>
          <footer className="blockquote-footer">{ quote }</footer>
      </blockquote>

      <code>{ JSON.stringify( boxSize ) }</code>
    </>
  );
  
}
