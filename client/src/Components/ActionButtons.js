import React from 'react'

const ActionButtons = (props) => {
  return(
    <div className="action-buttons">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 588.3 959.7"
        xmlSpace="preserve"
        height="94vh"
        id='template'
      >
      <radialGradient
        id="c"
        cx="-306.637"
        cy="488.009"
        r="30.81"
        gradientTransform="translate(785.225 84.751) scale(1.1148)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#5C3566"></stop>
        <stop offset="1" stopColor="#5C3566" stopOpacity="0"></stop>
      </radialGradient>

      <radialGradient
        id="b"
        cx="-336.637"
        cy="508.009"
        r="30.81"
        gradientTransform="translate(785.225 84.751) scale(1.1148)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#5C3566"></stop>
        <stop offset="1" stopColor="#5C3566" stopOpacity="0"></stop>
      </radialGradient>

      <radialGradient
        id="g"
        cx="-664.009"
        cy="-97.745"
        r="36.067"
        gradientTransform="matrix(.89 -.456 .1084 .2115 913.043 488.393)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#555753"></stop>
        <stop offset="1" stopColor="#3C3E3A"></stop>
      </radialGradient>

      <radialGradient
        id="h"
        cx="-486.479"
        cy="98.577"
        r="36.069"
        gradientTransform="matrix(.89 -.456 .1084 .2115 730.754 531.932)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#555753"></stop>
        <stop offset="1" stopColor="#3C3E3A"></stop>
      </radialGradient>

      <path
        fill="#482A50"
        d="M444.4 648.8c0 19-15.4 34.3-34.3 34.3-19 0-34.3-15.4-34.3-34.3 0-19 15.4-34.3 34.3-34.3s34.3 15.3 34.3 34.3z"
      ></path>
      <path
        fill="url(#b)"
        d="M440.4 646.8c0 19-15.4 34.3-34.3 34.3-19 0-34.3-15.4-34.3-34.3 0-19 15.4-34.3 34.3-34.3s34.3 15.3 34.3 34.3z"
        onClick={props.aButton}
      ></path>

      <path
        fill="#482A50"
        d="M538.3 606.4c0 19-15.4 34.3-34.3 34.3-19 0-34.3-15.4-34.3-34.3S485 572 504 572c18.9 0 34.3 15.4 34.3 34.4z"
      ></path>
      <path
        fill="url(#b)"
        d="M534.3 604.4c0 19-15.4 34.3-34.3 34.3-19 0-34.3-15.4-34.3-34.3S485 572 504 572c18.9 0 34.3 15.4 34.3 34.4z"
        onClick={props.aButton}
      ></path>


      <path d="M107.4 572H142.8V607.4H107.4z" onClick={props.rightPress}></path>

      <path d="M108.3 665.4H143.7V700.8H108.3z" onClick={props.leftPress}></path>

      <path d="M64.1 617.5H99.5V652.9H64.1z" onClick={props.leftPress}></path>

      <path d="M150.4 617.5H185.8V652.9H150.4z" onClick={props.rightPress}></path>

      <path
        fill="url(#g)"
        d="M283.1 775.4l48.9-25.1c4.2-2.2 9.4-.5 11.5 3.7 2.2 4.2.5 9.4-3.7 11.5l-48.9 25.1c-4.2 2.2-9.4.5-11.5-3.7-2.2-4.2-.5-9.3 3.7-11.5z"
        onClick={props.startPress}
      ></path>

      <g transform="translate(-96.429 -.357)">
        <path
          fill="url(#h)"
          d="M280.1 779.6l48.9-25.1c4.2-2.2 9.4-.5 11.5 3.7 2.2 4.2.5 9.4-3.7 11.5l-48.9 25.1c-4.2 2.2-9.4.5-11.5-3.7-2.2-4.2-.5-9.4 3.7-11.5z"
          onClick={props.ejectPress}
        ></path>
      </g>

      </svg>
    </div>
  )
}

export default ActionButtons
