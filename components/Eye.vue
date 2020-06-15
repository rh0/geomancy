<template>
  <div class="eye">
    <div class="lid bottom">
      <div class="top-mask"></div>
      <div class="lid top">
        <div class="iris">
          <div class="pupil"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.eye {
  width: 200px;
  height: 200px;
  margin-top: -50px;
  position: relative;
  overflow: hidden;
}

.iris {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 50%;
  margin: 0% 0 0 -25px;
  border-radius: 50%;
  background: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.pupil {
  width: 40%;
  height: 40%;
  border-radius: 50%;
  background: #222;
}

.iris.red {
  background: #700d04;
}

.pupil.red {
  background: #111;
}

.lid {
  position: absolute;
  width: 100%;
  height: 85%;
  top: 22%;
  left: 50%;
  margin: -43% 0 0 -50%;
  border-radius: 50%;
  border: 3px solid #222;
  overflow: hidden;
}

.lid.top {
  height: 168%;
  top: 119%;
  width: 124%;
  margin-left: -62%;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  overflow: visible;
  animation-name: topShrink;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in;
}

.lid.bottom {
  margin-left: -50%;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}

@keyframes topShrink {
  0% {
    height: 168%;
    top: 119%;
    border-top-color: #222;
  }
  49% {
    border-top-color: #222;
  }
  50% {
    height: 0%;
    top: 135%;
    border-top-color: transparent;
  }
  100% {
    height: 0%;
    top: 135%;
    border-top-color: transparent;
  }
}

.top-mask {
  position: absolute;
  bottom: 14%;
  left: 50%;
  height: 50%;
  width: 124%;
  margin-left: -62%;
  border: 3px solid #222;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-radius: 0%;
  background: #F3F2E2;
  z-index: 3;
  visibility: hidden;
  animation-name: maskShrink;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-out;
}

@keyframes maskShrink {
  0% {
    visibility: hidden;
    height: 50%;
    border-radius: 0%;
    bottom: 14%;
  }
  49% {
    visibility: hidden;
  }
  50% {
    visibility: visible;
    height: 50%;
    border-radius: 30%;
    bottom: 13%;
  }
  100% {
    height: 150%;
    border-radius: 50%;
    bottom: -2%;
  }
}
</style>
