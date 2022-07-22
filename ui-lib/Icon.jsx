import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as DotsXIcon } from "./assets/icons/solid/dots-horizontal.svg";

const Icon = ({
  name = "archive",
  size = 16,
  fill = "#000",
  type = "solid",
  ...rest
}) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { ReactComponent: namedImport } = await import(
          `../public/assets/icons/solid/dots-horizontal.svg`
        );
        ImportedIconRef.current = namedImport;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon width={size} height={size} fill={fill} {...rest} />;
  } else {
    return <DotsXIcon width={size} height={size} fill={fill} {...rest} />;
  }

  return null;
};

export default Icon;
