import React, { useState } from 'react';
import Icon from './Icon';

export default function Button({
    children,
    outline, 
    disabled, 
    to, 
    size, 
    type, 
    bold, 
    outlineBold,
    full,
    className,
    iconLeft,
    iconRight,
    iconSize,
    ...rest
  }){
  const classNames = ['text-sm leading-6 py-2 px-3 rounded-lg'];
  const classNamesIcon = []

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
        if (iconLeft || iconRight) {
          classNamesIcon.push("fill-primary")
        }
        break;
      case 'secondary':
        classNames.push('border-secondary text-secondary')
        if (iconLeft || iconRight) {
          classNamesIcon.push("fill-secondary")
        }
        break;
      case 'success':
        classNames.push('border-success text-success')
        if (iconLeft || iconRight) {
          classNamesIcon.push("fill-success")
        }
        break;
      case 'warning':
        classNames.push('border-warning text-warning')
        if (iconLeft || iconRight) {
          classNamesIcon.push("fill-warning")
        }
        break;
      case 'danger':
        classNames.push('border-danger text-danger')
        if (iconLeft || iconRight) {
          classNamesIcon.push("fill-danger")
        }
        break;
      default:
        classNames.push('border-primary text-primary')
        if (iconLeft || iconRight) {
          classNamesIcon.push("fill-primary")
        }
        break;
    }
  } else {
    classNames.push('text-white hover:opacity-80')
    if (iconLeft || iconRight) {
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
      classNames.push('text-xs')
      break;
    case 'sm':
      classNames.push('text-sm')
      break;
    case 'md':
      classNames.push('text-base')
      break;
    case 'lg':
      classNames.push('text-lg')
      break;
    case 'xl':
      classNames.push('text-xl')
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
        {iconLeft && <Icon
          className={classNamesIcon.join(' ')}
          name={iconLeft}
          type="solid"
          size={iconSize}
        />}
        {children}
        {iconRight && <Icon
          className={classNamesIcon.join(' ')}
          name={iconRight}
          type="solid"
          size={iconSize}
        />}
      </div>
    </button>
  );
};