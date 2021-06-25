import React from 'react'
import styled from 'styled-components'

const LoadingStyle = styled.div`
  width: 100%;
  height: 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    font-size: 20px;
    color: blue;
    text-align: center;
    line-height: 100px;

    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 2px 2px #f60;
    animation: shrink 3s infinite;
  }

  @keyframes shrink {
    from {
      opacity: 1;
      box-shadow: 0 0 2px 2px #f60;
    }
    20% {
      opacity: .6;
      box-shadow: 0 0 2px 2px orange;
    }
    30% {
      opacity: .3;
      box-shadow: 0 0 2px 2px yellow;
    }
    40% {
      opacity: .6;
      box-shadow: 0 0 2px 2px green;
    }
    50% {
      opacity: 1;
      box-shadow: 0 0 2px 2px #33a3dc;
    }
    70% {
      opacity: .5;
      box-shadow: 0 0 2px 2px #2a5caa;
    }
    to {
      opacity: 1;
      box-shadow: 0 0 2px 2px #8552a1;
    }
  }
`
export default function Loading() {
  return (
    <LoadingStyle>
      <div className="box">
        <span className="letter">l</span>
        <span className="letter">o</span>
        <span className="letter">a</span>
        <span className="letter">d</span>
        <span className="letter">i</span>
        <span className="letter">n</span>
        <span className="letter">g</span>
      </div>
    </LoadingStyle>
  )
}