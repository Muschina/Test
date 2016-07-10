import React, { Component, PropTypes } from 'react';

export default class DominoStone extends Component {
  constructor() {
    super();
      this.width = 300;
      this.height = 300;
      this.topCoordinates = {
        x1: 120,
        x2: 180,
        y1: 70,
        y2: 130
      }
      this.bottomCoordinates = {
        x1: 120,
        x2: 180,
        y1: 170,
        y2: 230
      }
  }

  drawCircles (number, c) {
    if(!number) return;

    let arr = [
    {x: c.x2, y: c.y1},
    {x: c.x1, y: c.y2},
    {x: c.x1, y: c.y1},
    {x: c.x2, y: c.y2},
    {x: c.x1, y: (c.y2 + c.y1) / 2},
    {x: c.x2, y: (c.y2 + c.y1) / 2},
    {x: (c.x2 + c.x1) / 2, y: (c.y2 + c.y1) / 2}
    ];

    switch (number) {
      case 1: return this.groupCircles([].concat(arr[6]));
      case 2: return this.groupCircles(arr.slice(0, 2)); 
      case 3: return this.groupCircles(arr.slice(0, 2).concat(arr[6])); 
      case 4: return this.groupCircles(arr.slice(0, 4)); 
      case 5: return this.groupCircles(arr.slice(0, 4).concat(arr[6])); 
      case 6: return this.groupCircles(arr.slice(0, 6)); 
    }
  }

  groupCircles(arr) {
    return arr.map((item, i) => {
        return <circle key={i} cx={item.x} cy={item.y} r='4' fill='#000000' />
      }
    );
  }

  render() {
    let scale = this.props.scale;
    let viewBoxWidth = this.width / scale;
    let viewBoxHeight = this.height / scale;
    let viewBoxX = Math.round((this.width - viewBoxWidth)/2);
    let viewBoxY = Math.round((this.height - viewBoxHeight)/2);
    let transform = {
      transition: `transform ${this.props.time}s`, 
      transform: `rotate(${this.props.angle}deg)`
    }

    let circlesTop = this.drawCircles(this.props.value.top, this.topCoordinates);
    let circlesBottom = this.drawCircles(this.props.value.bottom, this.bottomCoordinates);

    return (
      <object>
       <svg className={'rotate' + this.props.time} xmlns='http://www.w3.org/2000/svg' version='1.1' baseProfile='full'  
          width='300px' height='300px' 
          viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`} style={transform}>
          <g id='domino' fill='#FDFAC9' stroke='#E5D2A9' strokeWidth= '5px'>
            <rect x='100' y='50' width='100' height='200'/>
            {circlesTop}
            <line x1="115" y1="148" x2="185" y2="148" strokeLinecap='round' 
              stroke='#E5D2A9' strokeWidth='4px' />
            {circlesBottom}
          </g>
        </svg>
      </object>
    )
  }
}

DominoStone.propTypes = {
  value: PropTypes.objectOf(PropTypes.number).isRequired,
  scale: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired
}