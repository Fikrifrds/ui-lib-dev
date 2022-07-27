import { Children, cloneElement } from "react";

export default function CardGroup({ children, size, gap, rounded }) {
  const RenderChildren = () =>
    Children.map(children, (child) => {
      return cloneElement(child, {
        size,
        gap,
        rounded,
      });
    });

  return (
    <div className="flex flex-col sm:flex-row flex-wrap">
      {<RenderChildren />}
    </div>
  );
}
