<template>
    
<!-- Quantity should be the same in Sass-->
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
</template>


<style scoped>

.firefly {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 0.4vw;
  height: 0.4vw;
  margin: -0.2vw 0 0 9.8vw;
  animation: ease 200s alternate infinite;
  pointer-events: none;
}
.firefly::before, .firefly::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform-origin: -10vw;
}
.firefly::before {
  background: black;
  opacity: 0.4;
  animation: drift ease alternate infinite;
}
.firefly::after {
  background: white;
  opacity: 0;
  box-shadow: 0 0 0vw 0vw yellow;
  animation: drift ease alternate infinite, flash ease infinite;
}

.firefly:nth-child(1) {
  animation-name: move1;
}
.firefly:nth-child(1)::before {
  animation-duration: 18s;
}
.firefly:nth-child(1)::after {
  animation-duration: 18s, 6406ms;
  animation-delay: 0ms, 2451ms;
}

@keyframes move1 {
  0% {
    transform: translateX(1vw) translateY(39vh) scale(0.59);
  }
  3.5714285714% {
    transform: translateX(-10vw) translateY(37vh) scale(0.48);
  }
  7.1428571429% {
    transform: translateX(-48vw) translateY(26vh) scale(0.96);
  }
  10.7142857143% {
    transform: translateX(-31vw) translateY(-15vh) scale(0.28);
  }
  14.2857142857% {
    transform: translateX(17vw) translateY(-44vh) scale(0.7);
  }
  17.8571428571% {
    transform: translateX(0vw) translateY(14vh) scale(0.98);
  }
  21.4285714286% {
    transform: translateX(7vw) translateY(-21vh) scale(0.34);
  }
  25% {
    transform: translateX(-32vw) translateY(-35vh) scale(0.49);
  }
  28.5714285714% {
    transform: translateX(-46vw) translateY(21vh) scale(0.77);
  }
  32.1428571429% {
    transform: translateX(8vw) translateY(-21vh) scale(0.29);
  }
  35.7142857143% {
    transform: translateX(42vw) translateY(-38vh) scale(0.36);
  }
  39.2857142857% {
    transform: translateX(-45vw) translateY(47vh) scale(0.95);
  }
  42.8571428571% {
    transform: translateX(30vw) translateY(49vh) scale(0.53);
  }
  46.4285714286% {
    transform: translateX(-37vw) translateY(-45vh) scale(0.32);
  }
  50% {
    transform: translateX(-41vw) translateY(-10vh) scale(0.83);
  }
  53.5714285714% {
    transform: translateX(1vw) translateY(-36vh) scale(1);
  }
  57.1428571429% {
    transform: translateX(-44vw) translateY(-4vh) scale(0.67);
  }
  60.7142857143% {
    transform: translateX(-8vw) translateY(-36vh) scale(0.82);
  }
  64.2857142857% {
    transform: translateX(48vw) translateY(17vh) scale(0.6);
  }
  67.8571428571% {
    transform: translateX(-26vw) translateY(-42vh) scale(0.72);
  }
  71.4285714286% {
    transform: translateX(-39vw) translateY(22vh) scale(0.9);
  }
  75% {
    transform: translateX(-14vw) translateY(49vh) scale(0.72);
  }
  78.5714285714% {
    transform: translateX(-35vw) translateY(32vh) scale(0.26);
  }
  82.1428571429% {
    transform: translateX(-41vw) translateY(-5vh) scale(0.47);
  }
  85.7142857143% {
    transform: translateX(19vw) translateY(18vh) scale(0.35);
  }
  89.2857142857% {
    transform: translateX(19vw) translateY(3vh) scale(0.84);
  }
  92.8571428571% {
    transform: translateX(50vw) translateY(32vh) scale(0.51);
  }
  96.4285714286% {
    transform: translateX(-36vw) translateY(4vh) scale(0.93);
  }
  100% {
    transform: translateX(49vw) translateY(23vh) scale(0.76);
  }
}
.firefly:nth-child(2) {
  animation-name: move2;
}
.firefly:nth-child(2)::before {
  animation-duration: 18s;
}
.firefly:nth-child(2)::after {
  animation-duration: 18s, 5384ms;
  animation-delay: 0ms, 5804ms;
}

@keyframes move2 {
  0% {
    transform: translateX(-47vw) translateY(35vh) scale(0.61);
  }
  4.1666666667% {
    transform: translateX(16vw) translateY(-28vh) scale(0.33);
  }
  8.3333333333% {
    transform: translateX(-7vw) translateY(-28vh) scale(0.54);
  }
  12.5% {
    transform: translateX(-17vw) translateY(-28vh) scale(0.48);
  }
  16.6666666667% {
    transform: translateX(-38vw) translateY(-30vh) scale(0.79);
  }
  20.8333333333% {
    transform: translateX(-18vw) translateY(-10vh) scale(0.78);
  }
  25% {
    transform: translateX(-32vw) translateY(-40vh) scale(0.64);
  }
  29.1666666667% {
    transform: translateX(1vw) translateY(-38vh) scale(0.46);
  }
  33.3333333333% {
    transform: translateX(46vw) translateY(35vh) scale(0.93);
  }
  37.5% {
    transform: translateX(-8vw) translateY(-49vh) scale(0.68);
  }
  41.6666666667% {
    transform: translateX(-22vw) translateY(40vh) scale(0.54);
  }
  45.8333333333% {
    transform: translateX(46vw) translateY(47vh) scale(0.29);
  }
  50% {
    transform: translateX(26vw) translateY(-39vh) scale(0.68);
  }
  54.1666666667% {
    transform: translateX(-43vw) translateY(4vh) scale(0.82);
  }
  58.3333333333% {
    transform: translateX(2vw) translateY(3vh) scale(0.38);
  }
  62.5% {
    transform: translateX(17vw) translateY(14vh) scale(0.45);
  }
  66.6666666667% {
    transform: translateX(-34vw) translateY(48vh) scale(0.6);
  }
  70.8333333333% {
    transform: translateX(-2vw) translateY(17vh) scale(0.28);
  }
  75% {
    transform: translateX(34vw) translateY(32vh) scale(0.53);
  }
  79.1666666667% {
    transform: translateX(28vw) translateY(49vh) scale(0.38);
  }
  83.3333333333% {
    transform: translateX(-28vw) translateY(39vh) scale(0.76);
  }
  87.5% {
    transform: translateX(-2vw) translateY(36vh) scale(0.85);
  }
  91.6666666667% {
    transform: translateX(42vw) translateY(20vh) scale(0.84);
  }
  95.8333333333% {
    transform: translateX(-42vw) translateY(-18vh) scale(1);
  }
  100% {
    transform: translateX(-12vw) translateY(26vh) scale(0.28);
  }
}
.firefly:nth-child(3) {
  animation-name: move3;
}
.firefly:nth-child(3)::before {
  animation-duration: 9s;
}
.firefly:nth-child(3)::after {
  animation-duration: 9s, 8975ms;
  animation-delay: 0ms, 4171ms;
}

@keyframes move3 {
  0% {
    transform: translateX(12vw) translateY(-45vh) scale(0.82);
  }
  5.8823529412% {
    transform: translateX(-9vw) translateY(-40vh) scale(0.55);
  }
  11.7647058824% {
    transform: translateX(-16vw) translateY(-1vh) scale(0.81);
  }
  17.6470588235% {
    transform: translateX(2vw) translateY(-28vh) scale(0.34);
  }
  23.5294117647% {
    transform: translateX(-36vw) translateY(-34vh) scale(0.44);
  }
  29.4117647059% {
    transform: translateX(32vw) translateY(-25vh) scale(0.84);
  }
  35.2941176471% {
    transform: translateX(-25vw) translateY(-29vh) scale(0.53);
  }
  41.1764705882% {
    transform: translateX(-21vw) translateY(-31vh) scale(0.56);
  }
  47.0588235294% {
    transform: translateX(27vw) translateY(24vh) scale(0.92);
  }
  52.9411764706% {
    transform: translateX(-40vw) translateY(-26vh) scale(0.63);
  }
  58.8235294118% {
    transform: translateX(-13vw) translateY(-24vh) scale(0.86);
  }
  64.7058823529% {
    transform: translateX(40vw) translateY(40vh) scale(0.66);
  }
  70.5882352941% {
    transform: translateX(-5vw) translateY(-9vh) scale(0.75);
  }
  76.4705882353% {
    transform: translateX(47vw) translateY(34vh) scale(0.64);
  }
  82.3529411765% {
    transform: translateX(14vw) translateY(2vh) scale(0.37);
  }
  88.2352941176% {
    transform: translateX(24vw) translateY(-7vh) scale(0.89);
  }
  94.1176470588% {
    transform: translateX(-44vw) translateY(-39vh) scale(0.48);
  }
  100% {
    transform: translateX(47vw) translateY(-11vh) scale(0.38);
  }
}
.firefly:nth-child(4) {
  animation-name: move4;
}
.firefly:nth-child(4)::before {
  animation-duration: 14s;
}
.firefly:nth-child(4)::after {
  animation-duration: 14s, 8818ms;
  animation-delay: 0ms, 3756ms;
}

@keyframes move4 {
  0% {
    transform: translateX(43vw) translateY(-9vh) scale(0.61);
  }
  4.5454545455% {
    transform: translateX(-17vw) translateY(-4vh) scale(0.74);
  }
  9.0909090909% {
    transform: translateX(-30vw) translateY(3vh) scale(0.31);
  }
  13.6363636364% {
    transform: translateX(-11vw) translateY(-12vh) scale(0.86);
  }
  18.1818181818% {
    transform: translateX(-13vw) translateY(-40vh) scale(0.37);
  }
  22.7272727273% {
    transform: translateX(3vw) translateY(-39vh) scale(0.9);
  }
  27.2727272727% {
    transform: translateX(-15vw) translateY(6vh) scale(0.54);
  }
  31.8181818182% {
    transform: translateX(-29vw) translateY(3vh) scale(0.87);
  }
  36.3636363636% {
    transform: translateX(-21vw) translateY(-45vh) scale(0.33);
  }
  40.9090909091% {
    transform: translateX(-14vw) translateY(-6vh) scale(0.62);
  }
  45.4545454545% {
    transform: translateX(43vw) translateY(-28vh) scale(0.67);
  }
  50% {
    transform: translateX(48vw) translateY(-36vh) scale(0.86);
  }
  54.5454545455% {
    transform: translateX(-48vw) translateY(-4vh) scale(0.32);
  }
  59.0909090909% {
    transform: translateX(-10vw) translateY(5vh) scale(0.49);
  }
  63.6363636364% {
    transform: translateX(40vw) translateY(41vh) scale(0.3);
  }
  68.1818181818% {
    transform: translateX(48vw) translateY(36vh) scale(0.98);
  }
  72.7272727273% {
    transform: translateX(-11vw) translateY(-48vh) scale(0.69);
  }
  77.2727272727% {
    transform: translateX(-39vw) translateY(49vh) scale(0.28);
  }
  81.8181818182% {
    transform: translateX(22vw) translateY(13vh) scale(0.45);
  }
  86.3636363636% {
    transform: translateX(-34vw) translateY(-42vh) scale(0.75);
  }
  90.9090909091% {
    transform: translateX(-29vw) translateY(25vh) scale(0.79);
  }
  95.4545454545% {
    transform: translateX(17vw) translateY(-32vh) scale(0.48);
  }
  100% {
    transform: translateX(22vw) translateY(20vh) scale(0.6);
  }
}
.firefly:nth-child(5) {
  animation-name: move5;
}
.firefly:nth-child(5)::before {
  animation-duration: 10s;
}
.firefly:nth-child(5)::after {
  animation-duration: 10s, 6626ms;
  animation-delay: 0ms, 4491ms;
}

@keyframes move5 {
  0% {
    transform: translateX(-3vw) translateY(26vh) scale(0.67);
  }
  5.5555555556% {
    transform: translateX(48vw) translateY(-27vh) scale(0.51);
  }
  11.1111111111% {
    transform: translateX(9vw) translateY(30vh) scale(0.41);
  }
  16.6666666667% {
    transform: translateX(34vw) translateY(-40vh) scale(0.8);
  }
  22.2222222222% {
    transform: translateX(-44vw) translateY(1vh) scale(0.68);
  }
  27.7777777778% {
    transform: translateX(26vw) translateY(29vh) scale(0.33);
  }
  33.3333333333% {
    transform: translateX(47vw) translateY(-46vh) scale(0.53);
  }
  38.8888888889% {
    transform: translateX(-39vw) translateY(-23vh) scale(0.58);
  }
  44.4444444444% {
    transform: translateX(27vw) translateY(-11vh) scale(0.77);
  }
  50% {
    transform: translateX(-45vw) translateY(-5vh) scale(0.77);
  }
  55.5555555556% {
    transform: translateX(-36vw) translateY(46vh) scale(0.86);
  }
  61.1111111111% {
    transform: translateX(28vw) translateY(-12vh) scale(0.29);
  }
  66.6666666667% {
    transform: translateX(-28vw) translateY(39vh) scale(0.62);
  }
  72.2222222222% {
    transform: translateX(5vw) translateY(-37vh) scale(0.6);
  }
  77.7777777778% {
    transform: translateX(44vw) translateY(-48vh) scale(0.95);
  }
  83.3333333333% {
    transform: translateX(29vw) translateY(40vh) scale(0.26);
  }
  88.8888888889% {
    transform: translateX(26vw) translateY(31vh) scale(0.26);
  }
  94.4444444444% {
    transform: translateX(-34vw) translateY(2vh) scale(0.99);
  }
  100% {
    transform: translateX(41vw) translateY(-19vh) scale(0.82);
  }
}
.firefly:nth-child(6) {
  animation-name: move6;
}
.firefly:nth-child(6)::before {
  animation-duration: 18s;
}
.firefly:nth-child(6)::after {
  animation-duration: 18s, 10996ms;
  animation-delay: 0ms, 630ms;
}

@keyframes move6 {
  0% {
    transform: translateX(15vw) translateY(-31vh) scale(0.32);
  }
  5% {
    transform: translateX(25vw) translateY(-11vh) scale(0.52);
  }
  10% {
    transform: translateX(-26vw) translateY(-10vh) scale(0.72);
  }
  15% {
    transform: translateX(7vw) translateY(-40vh) scale(0.5);
  }
  20% {
    transform: translateX(-41vw) translateY(41vh) scale(0.35);
  }
  25% {
    transform: translateX(-6vw) translateY(10vh) scale(0.29);
  }
  30% {
    transform: translateX(-44vw) translateY(-11vh) scale(0.85);
  }
  35% {
    transform: translateX(-39vw) translateY(0vh) scale(0.41);
  }
  40% {
    transform: translateX(29vw) translateY(29vh) scale(0.45);
  }
  45% {
    transform: translateX(50vw) translateY(-18vh) scale(0.84);
  }
  50% {
    transform: translateX(15vw) translateY(16vh) scale(0.77);
  }
  55% {
    transform: translateX(23vw) translateY(43vh) scale(0.29);
  }
  60% {
    transform: translateX(7vw) translateY(27vh) scale(0.42);
  }
  65% {
    transform: translateX(-22vw) translateY(34vh) scale(0.82);
  }
  70% {
    transform: translateX(-24vw) translateY(46vh) scale(0.78);
  }
  75% {
    transform: translateX(40vw) translateY(-46vh) scale(0.75);
  }
  80% {
    transform: translateX(-16vw) translateY(-44vh) scale(0.91);
  }
  85% {
    transform: translateX(-12vw) translateY(-42vh) scale(0.81);
  }
  90% {
    transform: translateX(19vw) translateY(-37vh) scale(0.8);
  }
  95% {
    transform: translateX(-34vw) translateY(-39vh) scale(0.28);
  }
  100% {
    transform: translateX(22vw) translateY(38vh) scale(0.42);
  }
}
.firefly:nth-child(7) {
  animation-name: move7;
}
.firefly:nth-child(7)::before {
  animation-duration: 18s;
}
.firefly:nth-child(7)::after {
  animation-duration: 18s, 5877ms;
  animation-delay: 0ms, 1270ms;
}

@keyframes move7 {
  0% {
    transform: translateX(-41vw) translateY(-11vh) scale(0.79);
  }
  3.8461538462% {
    transform: translateX(44vw) translateY(-39vh) scale(0.3);
  }
  7.6923076923% {
    transform: translateX(-7vw) translateY(-8vh) scale(0.64);
  }
  11.5384615385% {
    transform: translateX(7vw) translateY(-49vh) scale(0.85);
  }
  15.3846153846% {
    transform: translateX(16vw) translateY(-37vh) scale(0.88);
  }
  19.2307692308% {
    transform: translateX(-16vw) translateY(-22vh) scale(0.43);
  }
  23.0769230769% {
    transform: translateX(-9vw) translateY(29vh) scale(0.5);
  }
  26.9230769231% {
    transform: translateX(25vw) translateY(19vh) scale(1);
  }
  30.7692307692% {
    transform: translateX(6vw) translateY(47vh) scale(0.93);
  }
  34.6153846154% {
    transform: translateX(4vw) translateY(-8vh) scale(0.88);
  }
  38.4615384615% {
    transform: translateX(-22vw) translateY(11vh) scale(0.52);
  }
  42.3076923077% {
    transform: translateX(-33vw) translateY(-2vh) scale(0.49);
  }
  46.1538461538% {
    transform: translateX(17vw) translateY(-5vh) scale(0.88);
  }
  50% {
    transform: translateX(-16vw) translateY(-9vh) scale(0.67);
  }
  53.8461538462% {
    transform: translateX(24vw) translateY(0vh) scale(0.32);
  }
  57.6923076923% {
    transform: translateX(-43vw) translateY(-11vh) scale(0.99);
  }
  61.5384615385% {
    transform: translateX(-38vw) translateY(-44vh) scale(0.33);
  }
  65.3846153846% {
    transform: translateX(27vw) translateY(-10vh) scale(0.91);
  }
  69.2307692308% {
    transform: translateX(45vw) translateY(-10vh) scale(0.31);
  }
  73.0769230769% {
    transform: translateX(12vw) translateY(27vh) scale(0.38);
  }
  76.9230769231% {
    transform: translateX(-3vw) translateY(-38vh) scale(0.3);
  }
  80.7692307692% {
    transform: translateX(-9vw) translateY(28vh) scale(0.66);
  }
  84.6153846154% {
    transform: translateX(-22vw) translateY(8vh) scale(0.93);
  }
  88.4615384615% {
    transform: translateX(-2vw) translateY(-7vh) scale(0.7);
  }
  92.3076923077% {
    transform: translateX(4vw) translateY(38vh) scale(0.51);
  }
  96.1538461538% {
    transform: translateX(-48vw) translateY(-6vh) scale(0.7);
  }
  100% {
    transform: translateX(9vw) translateY(-36vh) scale(0.45);
  }
}
.firefly:nth-child(8) {
  animation-name: move8;
}
.firefly:nth-child(8)::before {
  animation-duration: 16s;
}
.firefly:nth-child(8)::after {
  animation-duration: 16s, 9706ms;
  animation-delay: 0ms, 2690ms;
}

@keyframes move8 {
  0% {
    transform: translateX(2vw) translateY(21vh) scale(0.6);
  }
  4% {
    transform: translateX(26vw) translateY(-44vh) scale(0.35);
  }
  8% {
    transform: translateX(-33vw) translateY(-9vh) scale(0.68);
  }
  12% {
    transform: translateX(49vw) translateY(11vh) scale(0.59);
  }
  16% {
    transform: translateX(-9vw) translateY(1vh) scale(0.31);
  }
  20% {
    transform: translateX(8vw) translateY(-48vh) scale(0.33);
  }
  24% {
    transform: translateX(-25vw) translateY(21vh) scale(0.36);
  }
  28% {
    transform: translateX(17vw) translateY(-37vh) scale(0.72);
  }
  32% {
    transform: translateX(-16vw) translateY(23vh) scale(0.69);
  }
  36% {
    transform: translateX(6vw) translateY(0vh) scale(0.97);
  }
  40% {
    transform: translateX(21vw) translateY(23vh) scale(0.35);
  }
  44% {
    transform: translateX(-32vw) translateY(-20vh) scale(0.53);
  }
  48% {
    transform: translateX(-38vw) translateY(-49vh) scale(0.56);
  }
  52% {
    transform: translateX(-40vw) translateY(-20vh) scale(0.73);
  }
  56% {
    transform: translateX(1vw) translateY(-18vh) scale(0.64);
  }
  60% {
    transform: translateX(-26vw) translateY(-25vh) scale(0.51);
  }
  64% {
    transform: translateX(-49vw) translateY(-16vh) scale(0.57);
  }
  68% {
    transform: translateX(16vw) translateY(25vh) scale(0.84);
  }
  72% {
    transform: translateX(16vw) translateY(27vh) scale(0.32);
  }
  76% {
    transform: translateX(-28vw) translateY(17vh) scale(0.56);
  }
  80% {
    transform: translateX(33vw) translateY(5vh) scale(0.84);
  }
  84% {
    transform: translateX(-24vw) translateY(-14vh) scale(0.93);
  }
  88% {
    transform: translateX(-4vw) translateY(1vh) scale(0.85);
  }
  92% {
    transform: translateX(-10vw) translateY(-19vh) scale(0.87);
  }
  96% {
    transform: translateX(-42vw) translateY(13vh) scale(0.61);
  }
  100% {
    transform: translateX(-3vw) translateY(-38vh) scale(0.86);
  }
}
.firefly:nth-child(9) {
  animation-name: move9;
}
.firefly:nth-child(9)::before {
  animation-duration: 11s;
}
.firefly:nth-child(9)::after {
  animation-duration: 11s, 6224ms;
  animation-delay: 0ms, 1239ms;
}

@keyframes move9 {
  0% {
    transform: translateX(-41vw) translateY(27vh) scale(0.61);
  }
  3.7037037037% {
    transform: translateX(-48vw) translateY(32vh) scale(0.3);
  }
  7.4074074074% {
    transform: translateX(22vw) translateY(-7vh) scale(0.43);
  }
  11.1111111111% {
    transform: translateX(-42vw) translateY(4vh) scale(0.69);
  }
  14.8148148148% {
    transform: translateX(-20vw) translateY(33vh) scale(0.37);
  }
  18.5185185185% {
    transform: translateX(4vw) translateY(24vh) scale(0.83);
  }
  22.2222222222% {
    transform: translateX(9vw) translateY(-44vh) scale(0.86);
  }
  25.9259259259% {
    transform: translateX(6vw) translateY(18vh) scale(0.41);
  }
  29.6296296296% {
    transform: translateX(27vw) translateY(29vh) scale(0.76);
  }
  33.3333333333% {
    transform: translateX(-49vw) translateY(38vh) scale(0.69);
  }
  37.037037037% {
    transform: translateX(40vw) translateY(49vh) scale(0.89);
  }
  40.7407407407% {
    transform: translateX(34vw) translateY(44vh) scale(0.91);
  }
  44.4444444444% {
    transform: translateX(50vw) translateY(36vh) scale(0.65);
  }
  48.1481481481% {
    transform: translateX(-17vw) translateY(38vh) scale(0.46);
  }
  51.8518518519% {
    transform: translateX(1vw) translateY(-31vh) scale(0.29);
  }
  55.5555555556% {
    transform: translateX(27vw) translateY(1vh) scale(0.85);
  }
  59.2592592593% {
    transform: translateX(-11vw) translateY(17vh) scale(0.5);
  }
  62.962962963% {
    transform: translateX(29vw) translateY(1vh) scale(0.42);
  }
  66.6666666667% {
    transform: translateX(35vw) translateY(-48vh) scale(0.62);
  }
  70.3703703704% {
    transform: translateX(47vw) translateY(2vh) scale(0.31);
  }
  74.0740740741% {
    transform: translateX(42vw) translateY(-31vh) scale(0.7);
  }
  77.7777777778% {
    transform: translateX(31vw) translateY(-27vh) scale(0.85);
  }
  81.4814814815% {
    transform: translateX(-4vw) translateY(-30vh) scale(0.86);
  }
  85.1851851852% {
    transform: translateX(-38vw) translateY(-45vh) scale(0.86);
  }
  88.8888888889% {
    transform: translateX(-27vw) translateY(5vh) scale(0.6);
  }
  92.5925925926% {
    transform: translateX(48vw) translateY(37vh) scale(0.81);
  }
  96.2962962963% {
    transform: translateX(-26vw) translateY(-13vh) scale(0.58);
  }
  100% {
    transform: translateX(2vw) translateY(-10vh) scale(0.43);
  }
}
.firefly:nth-child(10) {
  animation-name: move10;
}
.firefly:nth-child(10)::before {
  animation-duration: 12s;
}
.firefly:nth-child(10)::after {
  animation-duration: 12s, 8710ms;
  animation-delay: 0ms, 6968ms;
}

@keyframes move10 {
  0% {
    transform: translateX(-19vw) translateY(-33vh) scale(0.57);
  }
  4.1666666667% {
    transform: translateX(40vw) translateY(-1vh) scale(0.66);
  }
  8.3333333333% {
    transform: translateX(-8vw) translateY(-3vh) scale(0.5);
  }
  12.5% {
    transform: translateX(40vw) translateY(-6vh) scale(0.84);
  }
  16.6666666667% {
    transform: translateX(2vw) translateY(-16vh) scale(0.41);
  }
  20.8333333333% {
    transform: translateX(42vw) translateY(38vh) scale(0.74);
  }
  25% {
    transform: translateX(23vw) translateY(27vh) scale(0.44);
  }
  29.1666666667% {
    transform: translateX(-49vw) translateY(-30vh) scale(0.89);
  }
  33.3333333333% {
    transform: translateX(0vw) translateY(-18vh) scale(0.74);
  }
  37.5% {
    transform: translateX(40vw) translateY(36vh) scale(0.88);
  }
  41.6666666667% {
    transform: translateX(50vw) translateY(-37vh) scale(0.68);
  }
  45.8333333333% {
    transform: translateX(31vw) translateY(2vh) scale(0.75);
  }
  50% {
    transform: translateX(34vw) translateY(27vh) scale(0.53);
  }
  54.1666666667% {
    transform: translateX(-34vw) translateY(-6vh) scale(0.39);
  }
  58.3333333333% {
    transform: translateX(27vw) translateY(-47vh) scale(0.92);
  }
  62.5% {
    transform: translateX(32vw) translateY(47vh) scale(0.94);
  }
  66.6666666667% {
    transform: translateX(-13vw) translateY(-4vh) scale(0.83);
  }
  70.8333333333% {
    transform: translateX(1vw) translateY(-31vh) scale(0.86);
  }
  75% {
    transform: translateX(33vw) translateY(12vh) scale(0.71);
  }
  79.1666666667% {
    transform: translateX(40vw) translateY(27vh) scale(0.7);
  }
  83.3333333333% {
    transform: translateX(5vw) translateY(46vh) scale(0.55);
  }
  87.5% {
    transform: translateX(-29vw) translateY(-44vh) scale(0.36);
  }
  91.6666666667% {
    transform: translateX(-10vw) translateY(-32vh) scale(0.26);
  }
  95.8333333333% {
    transform: translateX(24vw) translateY(17vh) scale(0.98);
  }
  100% {
    transform: translateX(36vw) translateY(48vh) scale(0.45);
  }
}
.firefly:nth-child(11) {
  animation-name: move11;
}
.firefly:nth-child(11)::before {
  animation-duration: 10s;
}
.firefly:nth-child(11)::after {
  animation-duration: 10s, 10171ms;
  animation-delay: 0ms, 5643ms;
}

@keyframes move11 {
  0% {
    transform: translateX(-32vw) translateY(-11vh) scale(0.63);
  }
  3.8461538462% {
    transform: translateX(45vw) translateY(46vh) scale(0.51);
  }
  7.6923076923% {
    transform: translateX(-8vw) translateY(27vh) scale(0.27);
  }
  11.5384615385% {
    transform: translateX(38vw) translateY(20vh) scale(0.84);
  }
  15.3846153846% {
    transform: translateX(-40vw) translateY(14vh) scale(0.69);
  }
  19.2307692308% {
    transform: translateX(31vw) translateY(-30vh) scale(1);
  }
  23.0769230769% {
    transform: translateX(43vw) translateY(-22vh) scale(0.46);
  }
  26.9230769231% {
    transform: translateX(-8vw) translateY(-27vh) scale(0.46);
  }
  30.7692307692% {
    transform: translateX(-44vw) translateY(34vh) scale(0.3);
  }
  34.6153846154% {
    transform: translateX(-16vw) translateY(-27vh) scale(0.43);
  }
  38.4615384615% {
    transform: translateX(-14vw) translateY(6vh) scale(0.94);
  }
  42.3076923077% {
    transform: translateX(-10vw) translateY(-38vh) scale(0.71);
  }
  46.1538461538% {
    transform: translateX(-28vw) translateY(-4vh) scale(0.46);
  }
  50% {
    transform: translateX(-14vw) translateY(17vh) scale(0.36);
  }
  53.8461538462% {
    transform: translateX(-28vw) translateY(-41vh) scale(0.44);
  }
  57.6923076923% {
    transform: translateX(17vw) translateY(-41vh) scale(0.59);
  }
  61.5384615385% {
    transform: translateX(44vw) translateY(10vh) scale(0.8);
  }
  65.3846153846% {
    transform: translateX(-13vw) translateY(-49vh) scale(0.62);
  }
  69.2307692308% {
    transform: translateX(-16vw) translateY(-30vh) scale(0.79);
  }
  73.0769230769% {
    transform: translateX(27vw) translateY(36vh) scale(0.81);
  }
  76.9230769231% {
    transform: translateX(44vw) translateY(44vh) scale(0.9);
  }
  80.7692307692% {
    transform: translateX(-31vw) translateY(-17vh) scale(0.82);
  }
  84.6153846154% {
    transform: translateX(-15vw) translateY(-14vh) scale(0.69);
  }
  88.4615384615% {
    transform: translateX(-3vw) translateY(3vh) scale(0.94);
  }
  92.3076923077% {
    transform: translateX(19vw) translateY(36vh) scale(0.6);
  }
  96.1538461538% {
    transform: translateX(50vw) translateY(-36vh) scale(0.67);
  }
  100% {
    transform: translateX(-46vw) translateY(-29vh) scale(0.82);
  }
}
.firefly:nth-child(12) {
  animation-name: move12;
}
.firefly:nth-child(12)::before {
  animation-duration: 13s;
}
.firefly:nth-child(12)::after {
  animation-duration: 13s, 8568ms;
  animation-delay: 0ms, 5921ms;
}

@keyframes move12 {
  0% {
    transform: translateX(-37vw) translateY(48vh) scale(0.6);
  }
  3.8461538462% {
    transform: translateX(1vw) translateY(15vh) scale(0.76);
  }
  7.6923076923% {
    transform: translateX(2vw) translateY(-44vh) scale(0.96);
  }
  11.5384615385% {
    transform: translateX(30vw) translateY(22vh) scale(0.62);
  }
  15.3846153846% {
    transform: translateX(23vw) translateY(35vh) scale(0.28);
  }
  19.2307692308% {
    transform: translateX(13vw) translateY(22vh) scale(0.94);
  }
  23.0769230769% {
    transform: translateX(19vw) translateY(-45vh) scale(0.46);
  }
  26.9230769231% {
    transform: translateX(11vw) translateY(22vh) scale(0.71);
  }
  30.7692307692% {
    transform: translateX(-6vw) translateY(0vh) scale(0.31);
  }
  34.6153846154% {
    transform: translateX(-10vw) translateY(-28vh) scale(0.49);
  }
  38.4615384615% {
    transform: translateX(-16vw) translateY(31vh) scale(0.65);
  }
  42.3076923077% {
    transform: translateX(36vw) translateY(35vh) scale(0.99);
  }
  46.1538461538% {
    transform: translateX(5vw) translateY(2vh) scale(0.87);
  }
  50% {
    transform: translateX(-14vw) translateY(9vh) scale(0.96);
  }
  53.8461538462% {
    transform: translateX(49vw) translateY(17vh) scale(0.54);
  }
  57.6923076923% {
    transform: translateX(-29vw) translateY(36vh) scale(0.52);
  }
  61.5384615385% {
    transform: translateX(-24vw) translateY(17vh) scale(0.28);
  }
  65.3846153846% {
    transform: translateX(30vw) translateY(-1vh) scale(0.79);
  }
  69.2307692308% {
    transform: translateX(-17vw) translateY(-2vh) scale(0.55);
  }
  73.0769230769% {
    transform: translateX(-8vw) translateY(31vh) scale(0.47);
  }
  76.9230769231% {
    transform: translateX(29vw) translateY(-34vh) scale(0.99);
  }
  80.7692307692% {
    transform: translateX(30vw) translateY(-7vh) scale(0.39);
  }
  84.6153846154% {
    transform: translateX(37vw) translateY(24vh) scale(0.33);
  }
  88.4615384615% {
    transform: translateX(44vw) translateY(5vh) scale(0.31);
  }
  92.3076923077% {
    transform: translateX(20vw) translateY(21vh) scale(0.85);
  }
  96.1538461538% {
    transform: translateX(-35vw) translateY(45vh) scale(0.8);
  }
  100% {
    transform: translateX(19vw) translateY(-12vh) scale(0.87);
  }
}
.firefly:nth-child(13) {
  animation-name: move13;
}
.firefly:nth-child(13)::before {
  animation-duration: 13s;
}
.firefly:nth-child(13)::after {
  animation-duration: 13s, 5110ms;
  animation-delay: 0ms, 5854ms;
}

@keyframes move13 {
  0% {
    transform: translateX(-16vw) translateY(11vh) scale(0.78);
  }
  4.7619047619% {
    transform: translateX(-35vw) translateY(9vh) scale(0.56);
  }
  9.5238095238% {
    transform: translateX(-11vw) translateY(-39vh) scale(0.87);
  }
  14.2857142857% {
    transform: translateX(45vw) translateY(19vh) scale(0.89);
  }
  19.0476190476% {
    transform: translateX(-29vw) translateY(-25vh) scale(0.35);
  }
  23.8095238095% {
    transform: translateX(4vw) translateY(-38vh) scale(0.62);
  }
  28.5714285714% {
    transform: translateX(-31vw) translateY(-32vh) scale(0.37);
  }
  33.3333333333% {
    transform: translateX(-13vw) translateY(-45vh) scale(0.91);
  }
  38.0952380952% {
    transform: translateX(-20vw) translateY(-43vh) scale(0.3);
  }
  42.8571428571% {
    transform: translateX(-12vw) translateY(-7vh) scale(0.86);
  }
  47.619047619% {
    transform: translateX(17vw) translateY(-14vh) scale(0.62);
  }
  52.380952381% {
    transform: translateX(-22vw) translateY(-24vh) scale(0.68);
  }
  57.1428571429% {
    transform: translateX(-18vw) translateY(-48vh) scale(0.31);
  }
  61.9047619048% {
    transform: translateX(23vw) translateY(-20vh) scale(0.72);
  }
  66.6666666667% {
    transform: translateX(-49vw) translateY(-1vh) scale(0.35);
  }
  71.4285714286% {
    transform: translateX(-34vw) translateY(-13vh) scale(0.96);
  }
  76.1904761905% {
    transform: translateX(37vw) translateY(0vh) scale(0.98);
  }
  80.9523809524% {
    transform: translateX(19vw) translateY(-42vh) scale(0.46);
  }
  85.7142857143% {
    transform: translateX(5vw) translateY(-35vh) scale(0.33);
  }
  90.4761904762% {
    transform: translateX(10vw) translateY(8vh) scale(0.4);
  }
  95.2380952381% {
    transform: translateX(-8vw) translateY(-46vh) scale(0.66);
  }
  100% {
    transform: translateX(-25vw) translateY(35vh) scale(0.85);
  }
}
.firefly:nth-child(14) {
  animation-name: move14;
}
.firefly:nth-child(14)::before {
  animation-duration: 18s;
}
.firefly:nth-child(14)::after {
  animation-duration: 18s, 7092ms;
  animation-delay: 0ms, 2024ms;
}

@keyframes move14 {
  0% {
    transform: translateX(-42vw) translateY(37vh) scale(0.67);
  }
  5.2631578947% {
    transform: translateX(-13vw) translateY(42vh) scale(0.41);
  }
  10.5263157895% {
    transform: translateX(-21vw) translateY(48vh) scale(0.95);
  }
  15.7894736842% {
    transform: translateX(-20vw) translateY(-28vh) scale(0.97);
  }
  21.0526315789% {
    transform: translateX(1vw) translateY(49vh) scale(0.5);
  }
  26.3157894737% {
    transform: translateX(-35vw) translateY(-19vh) scale(0.65);
  }
  31.5789473684% {
    transform: translateX(1vw) translateY(-8vh) scale(0.88);
  }
  36.8421052632% {
    transform: translateX(25vw) translateY(35vh) scale(0.86);
  }
  42.1052631579% {
    transform: translateX(29vw) translateY(26vh) scale(0.38);
  }
  47.3684210526% {
    transform: translateX(-26vw) translateY(-45vh) scale(0.81);
  }
  52.6315789474% {
    transform: translateX(44vw) translateY(19vh) scale(0.29);
  }
  57.8947368421% {
    transform: translateX(30vw) translateY(-37vh) scale(0.33);
  }
  63.1578947368% {
    transform: translateX(-34vw) translateY(37vh) scale(0.7);
  }
  68.4210526316% {
    transform: translateX(-41vw) translateY(34vh) scale(0.67);
  }
  73.6842105263% {
    transform: translateX(-28vw) translateY(11vh) scale(0.74);
  }
  78.9473684211% {
    transform: translateX(4vw) translateY(-5vh) scale(0.9);
  }
  84.2105263158% {
    transform: translateX(45vw) translateY(-16vh) scale(0.76);
  }
  89.4736842105% {
    transform: translateX(-21vw) translateY(-32vh) scale(0.31);
  }
  94.7368421053% {
    transform: translateX(18vw) translateY(-20vh) scale(0.53);
  }
  100% {
    transform: translateX(36vw) translateY(-37vh) scale(0.6);
  }
}
.firefly:nth-child(15) {
  animation-name: move15;
}
.firefly:nth-child(15)::before {
  animation-duration: 14s;
}
.firefly:nth-child(15)::after {
  animation-duration: 14s, 5122ms;
  animation-delay: 0ms, 2306ms;
}

@keyframes move15 {
  0% {
    transform: translateX(10vw) translateY(-37vh) scale(0.9);
  }
  3.7037037037% {
    transform: translateX(-49vw) translateY(26vh) scale(0.91);
  }
  7.4074074074% {
    transform: translateX(-9vw) translateY(-48vh) scale(0.73);
  }
  11.1111111111% {
    transform: translateX(-46vw) translateY(10vh) scale(0.96);
  }
  14.8148148148% {
    transform: translateX(21vw) translateY(2vh) scale(0.53);
  }
  18.5185185185% {
    transform: translateX(-43vw) translateY(22vh) scale(0.8);
  }
  22.2222222222% {
    transform: translateX(10vw) translateY(-5vh) scale(0.49);
  }
  25.9259259259% {
    transform: translateX(27vw) translateY(-42vh) scale(0.99);
  }
  29.6296296296% {
    transform: translateX(-35vw) translateY(-10vh) scale(0.63);
  }
  33.3333333333% {
    transform: translateX(-21vw) translateY(42vh) scale(0.86);
  }
  37.037037037% {
    transform: translateX(12vw) translateY(5vh) scale(0.6);
  }
  40.7407407407% {
    transform: translateX(-24vw) translateY(45vh) scale(0.81);
  }
  44.4444444444% {
    transform: translateX(39vw) translateY(10vh) scale(0.33);
  }
  48.1481481481% {
    transform: translateX(-37vw) translateY(22vh) scale(0.33);
  }
  51.8518518519% {
    transform: translateX(40vw) translateY(12vh) scale(0.81);
  }
  55.5555555556% {
    transform: translateX(-23vw) translateY(28vh) scale(0.57);
  }
  59.2592592593% {
    transform: translateX(-31vw) translateY(-39vh) scale(0.53);
  }
  62.962962963% {
    transform: translateX(46vw) translateY(-47vh) scale(0.39);
  }
  66.6666666667% {
    transform: translateX(50vw) translateY(-23vh) scale(0.77);
  }
  70.3703703704% {
    transform: translateX(-12vw) translateY(16vh) scale(0.57);
  }
  74.0740740741% {
    transform: translateX(-20vw) translateY(34vh) scale(0.8);
  }
  77.7777777778% {
    transform: translateX(48vw) translateY(-40vh) scale(0.26);
  }
  81.4814814815% {
    transform: translateX(-28vw) translateY(-45vh) scale(0.41);
  }
  85.1851851852% {
    transform: translateX(19vw) translateY(50vh) scale(0.5);
  }
  88.8888888889% {
    transform: translateX(6vw) translateY(-5vh) scale(0.32);
  }
  92.5925925926% {
    transform: translateX(-27vw) translateY(30vh) scale(1);
  }
  96.2962962963% {
    transform: translateX(27vw) translateY(-48vh) scale(0.32);
  }
  100% {
    transform: translateX(-19vw) translateY(10vh) scale(0.35);
  }
}
@keyframes drift {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes flash {
  0%, 30%, 100% {
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
  }
  5% {
    opacity: 1;
    box-shadow: 0 0 2vw 0.4vw yellow;
  }
}
</style>