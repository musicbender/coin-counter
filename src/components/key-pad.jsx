import React from 'react';
import ContentBackspace from 'material-ui/svg-icons/content/backspace';
'../style/key-pad.scss';

export default (props) => {
  const LABELS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", '.', "delete"];

  const createDelete = () => {
    return <ContentBackspace />;
  }

  const handleClick = (num) => {
    props.clickHandle(num);
  }

  const labelList = LABELS.map((label, index) => {
      return (
        <div className="number-btn" key={index} onClick={() => handleClick(label)}>
          <div className="number-btn-num">{label === "delete" ? createDelete() : label}</div>
        </div>
      );
    });

  return ( 
    <div className="number-container">
      {labelList}
    </div>
  )
}
