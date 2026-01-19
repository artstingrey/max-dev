import React from "react";

type HoverTextProps = {
  visible: string[]
  hover: string[]
}

export default function HoverText ({visible, hover}:HoverTextProps) {
    return (
        <span className="hover-part-link">
            <span className="hover-part-link-text-in">
                {visible.map((text, index) => {
                    return <React.Fragment key={`visible-${index}`}><span>{text}</span>{index < visible.length - 1 && " "}</React.Fragment>
                })}
                
            </span>
            <span className="hover-part-link-text-out">
                {hover.map((text, index) => {
                    return <React.Fragment key={`hover-${index}`}><span>{text}</span>{index < hover.length - 1 && " "}</React.Fragment>
                })}
            </span>
        </span>
    );
}