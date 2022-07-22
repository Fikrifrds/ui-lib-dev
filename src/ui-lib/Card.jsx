import { useState, useEffect } from "react"

export default function Card({title, description, img, children }) {

  const [loadingImg, setLoadingImg] = useState(false);

  useEffect(() => {
    if (img) {
      setLoadingImg(true)
      const image = new Image();
      image.src = img;
      image.onload = () => {
        setLoadingImg(false);
      };
    }
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {img &&
      <div className="w-full h-64">
        {loadingImg ? <div className="animate-pulse w-full h-64 bg-slate-100"></div> :
        <img className="w-full object-cover" src={img} alt="Sunset in the mountains" />}
      </div>
      }
      <div className="px-6 py-4">
        {title && <div className="font-bold text-xl mb-2">{title}</div>}
        {description && <p className="text-gray-700 text-base">
          {description}
        </p>}
      </div>
      {children}
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  )
}