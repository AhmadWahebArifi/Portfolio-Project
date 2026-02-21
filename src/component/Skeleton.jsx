import React from 'react';

const Skeleton = ({ 
  className = "", 
  variant = "default", 
  width, 
  height, 
  lines = 1,
  animate = true 
}) => {
  const baseClasses = "bg-gray-200 dark:bg-gray-700 rounded";
  const animationClass = animate ? "animate-pulse" : "";
  
  const variants = {
    default: "h-4 w-full",
    text: "h-4 w-full",
    heading: "h-8 w-3/4",
    avatar: "h-12 w-12 rounded-full",
    button: "h-10 w-20",
    card: "h-48 w-full",
    image: "h-64 w-full",
    circle: "rounded-full",
    rectangle: ""
  };

  const skeletonClass = variants[variant] || variants.default;
  const finalClassName = `${baseClasses} ${skeletonClass} ${animationClass} ${className}`;
  
  const style = {
    width: width,
    height: height,
  };

  if (lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }, (_, index) => (
          <div
            key={index}
            className={`${baseClasses} h-4 w-full ${animationClass} ${className}`}
            style={{
              ...style,
              width: index === lines - 1 ? "75%" : "100%"
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div 
      className={finalClassName}
      style={style}
    />
  );
};

export default Skeleton;
