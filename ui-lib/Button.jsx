import React, { useState } from 'react';

export default function Button({
    children="Button",
    outline, 
    disabled, 
    to, 
    size="sm", 
    type="success", 
    bold, 
    outlineBold,
    full,
    className,
    iconLeft: IconLeft,
    iconRight: IconRight,
    iconSize,
    ...rest
  }){
  const classNames = ['text-sm leading-6 rounded-lg'];
  const classNamesIcon = []
  let _iconSize = iconSize

  if (outline || outlineBold) {
    classNames.push("bg-white")
    if (outlineBold) {
      classNames.push('border-2 font-bold');
    } else {
      classNames.push('border');
    }
    switch (type) {
      case 'primary':
        classNames.push('border-primary text-primary')
        if (IconLeft || IconRight) {
          classNamesIcon.push("fill-primary")
        }
        break;
      case 'secondary':
        classNames.push('border-secondary text-secondary')
        if (IconLeft || IconRight) {
          classNamesIcon.push("fill-secondary")
        }
        break;
      case 'success':
        classNames.push('border-success text-success')
        if (IconLeft || IconRight) {
          classNamesIcon.push("fill-success")
        }
        break;
      case 'warning':
        classNames.push('border-warning text-warning')
        if (IconLeft || IconRight) {
          classNamesIcon.push("fill-warning")
        }
        break;
      case 'danger':
        classNames.push('border-danger text-danger')
        if (IconLeft || IconRight) {
          classNamesIcon.push("fill-danger")
        }
        break;
      default:
        classNames.push('border-primary text-primary')
        if (IconLeft || IconRight) {
          classNamesIcon.push("fill-primary")
        }
        break;
    }
  } else {
    classNames.push('text-white hover:opacity-80')
    if (IconLeft || IconRight) {
      classNamesIcon.push("fill-white")
    }
    switch (type) {
      case 'primary':
        classNames.push('bg-primary')
        break;
      case 'secondary':
        classNames.push('bg-secondary')
        break;
      case 'success':
        classNames.push('bg-success')
        break;
      case 'warning':
        classNames.push('bg-warning')
        break;
      case 'danger':
        classNames.push('bg-danger')
        break;
      default:
        classNames.push('bg-primary')
        break;
    }
  }

  if (disabled) {
    classNames.push('disabled');
  }

  if (bold) {
    classNames.push('font-bold');
  }

  if (className) {
    classNames.push(className)
  }

  switch (size) {
    case 'xs':
      classNames.push('text-xs py-1 px-3')
      if (!_iconSize) {
        _iconSize = 14.5
      }
      break;
    case 'sm':
      classNames.push('text-sm py-1.5 px-2')
      if (!_iconSize) {
        _iconSize = 17
      }
      break;
    case 'md':
      classNames.push('text-base py-2 px-3')
      if (!_iconSize) {
        _iconSize = 18
      }
      break;
    case 'lg':
      classNames.push('text-lg py-2.5 px-4')
      if (!_iconSize) {
        _iconSize = 20
      }
      break;
    case 'xl':
      classNames.push('text-xl py-3 px-5')
      if (!_iconSize) {
        _iconSize = 24
      }
      break;
    default:
      break;
  }

  if (full) {
    classNames.push("w-full")
  }

  return (
    <button
      className={classNames.join(' ')}
      disabled={disabled}
      {...rest}
    >
      <div className="flex gap-2 items-center justify-center">
        {IconLeft && <IconLeft
          className={classNamesIcon.join(' ')}
          width={_iconSize}
          height={_iconSize}
        />}
        {children}
        {IconRight && <IconRight
          className={classNamesIcon.join(' ')}
          width={_iconSize}
          height={_iconSize}
        />}
      </div>
    </button>
  );
};