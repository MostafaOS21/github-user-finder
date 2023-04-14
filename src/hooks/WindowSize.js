import { useEffect, useState } from "react"

const WindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const widthHandler = (e) => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', widthHandler);

    return () => {
      window.removeEventListener('resize', widthHandler);
    }
  }, [window.innerWidth]);

  return width;
}

export default WindowSize;
