import { useState } from "react";

import Button from './Button.js'

export default function TextExpander({
    collapsedNumWords = 10,
    expandButtonText = "Show more",
    collapseButtonText = "Show less",
    buttonColor = "#1f09cd",
    expanded = false,
    className,
    children
  }) {
    const [isExpanded, setIsExpanded] = useState(expanded);
  
    const displayText = isExpanded
      ? children
      : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  
      function handleIsExpanded(){
        setIsExpanded(cur=>!cur)
      }
   
  
    return (
      <div className={className}>
        <span>{displayText}</span>
        <Button buttonColor={buttonColor} handleIsExpanded={handleIsExpanded}>{isExpanded ? collapseButtonText : expandButtonText} </Button>
      </div>
    );
  }
  