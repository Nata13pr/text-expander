export default function Button({children,handleIsExpanded,buttonColor}){
    const buttonStyle = {
        background: "none",
        border: "none",
        font: "inherit",
        cursor: "pointer",
        marginLeft: "6px",
        color: buttonColor
      };

    return(
        <button  style={buttonStyle} onClick={handleIsExpanded}>{children}</button>
    )

}