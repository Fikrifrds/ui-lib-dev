import { useState, useEffect } from "react"

import Button from "./Button"

export default function Card({title, description, img, children, footer, size, gap, rounded, onClick }) {

  const [loadingImg, setLoadingImg] = useState(false);
  const [error, setError] = useState(false);
  const classNames = ['w-full relative']
  const cardClassNames = ['overflow-hidden shadow-lg flex flex-col h-full']

  if (rounded) {
    cardClassNames.push('rounded')
  }

  if (onClick) {
    cardClassNames.push('cursor-pointer')
  }

  switch(size) {
    case '1':
      classNames.push('w-full');
      break
    case '1/2':
      classNames.push('sm:w-1/2');
      break
    case '1/3':
      classNames.push('sm:w-1/3');
      break
    case '1/4':
      classNames.push('sm:w-1/4');
      break
    case '1/5':
      classNames.push('sm:w-1/5');
      break
    case '1/6':
      classNames.push('sm:w-1/6');
      break
    default:
      classNames.push('sm:w-1/4');
      break
  }

  switch(gap) {
    case '1':
      classNames.push('p-1');
      break
    case '2':
      classNames.push('p-2');
      break
    case '3':
      classNames.push('p-3');
      break
    case '4':
      classNames.push('p-4');
      break
    case '5':
      classNames.push('p-5');
      break
    case '6':
      classNames.push('p-6');
      break
    default:
      classNames.push('p-4');
      break
  }

  useEffect(() => {
    if (img) {
      setLoadingImg(true)
      const image = new Image();
      image.src = img;
      image.onload = () => {
        setLoadingImg(false);
      };
      image.onerror = () => {
        setError(true);
      };
    }
  }, []);

  return (
    <div className={classNames.join(' ')}>
      <div className={cardClassNames.join(' ')} onClick={onClick}>
        {img &&
        <div className="w-full h-64">
          {loadingImg || error ? <div className="animate-pulse w-full h-full bg-slate-100"></div> :
          <img className="w-full object-cover h-full" src={img} alt="Sunset in the mountains" />}
        </div>
        }
        <div className="px-6 py-4 flex-1">
          {title && <div className="font-bold text-xl mb-2">{title}</div>}
          {description && <p className="text-gray-700 text-sm">
            {description}
          </p>}
        </div>
        <div className="px-6 py-4 flex-1">
          {children}
        </div>
        {footer && <div className="flex-1">
          {footer}
        </div>}
      </div>
    </div>
  )
}