# CSS

---

```
#container {
  position: relative;
  width: 400px;
  height: 450px;
  overflow: hidden;
}

```

In the above code container is defined with the id selector. The container component encapsulates the simple pendulum wire and weight animation components. The animation components are contained in the container with a dimension 400x450.

```
#anchor {
  position: absolute;
  width: 100px;
  height: 10px;
  background-color: black;
  border-radius: 5px;
  top: 0px;
  left: calc(50% - 100px);
  z-index: 500;
}
```

In the above code anchor is defined with id selector. The z-index property in CSS controls the vertical stacking order of elements that overlap.The border-radius property defines the radius of the element's corners. The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).

```
#pendulum-weight {
  position: absolute;
  left: calc(50% - 75px);
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 100%;
  position: relative;
  animation: oscilate 3s infinite;
  z-index: 200;
}
```

The Pendulum-wight is defined with id selector. An animation lets an element gradually change from one style to another. Using Osicalate property the pendulum is used to swing for 3s. The Pendulum weight is of dimenssion 50X50. The border-radius is 100% which appears to be the pendulum's weight.

```

#wire {
  position: absolute;
  top: -200px;
  left: calc(50% - 50px);
  width: 5px;
  height: 400px;
  background-color: gray;
  /* animation: oscilate-wire 3s infinite; */
  z-index: 100;
}
```

In the above code, the wire is defined with id selector. Position, Top, Left, Width, Height, Background color, z-index. The dimension of the wire is 400X5.

```
@keyframes oscilate {
  0% {
    transform: rotate(30deg) translateX(200px) rotate(30deg);
  }
  50% {
    transform: rotate(150deg) translateX(200px) rotate(-135deg);
  }
  100% {
    transform: rotate(30deg) translateX(200px) rotate(30deg);
  }
}
```

The @keyframes rule specifies the animation code. The Keyframe name used in this code is oscillate.  
If the length is 0% then the pendulum rotates 30 deg, translateX is to move the 2D object in X-axis for 200px and rotates 30 deg.  
If the length is 50% then the pendulum rotates 150 deg, translateX is to move the 2D object in X-axis for 200px and rotates -135 deg.  
If the length is 100%, the pendulum rotates 30 deg, translateX is to move the 2D object in X-axis for 200px and rotates 30 deg.

```
@keyframes oscilate-wire {
 0% {
   transform: rotateZ(45deg) rotate(80deg);
 }
 50% {
   transform: rotateZ(115deg) rotate(120deg);
 }
 100% {
   transform: rotateZ(45deg) rotate(80deg);
 }
}

```

The @keyframes rule specifies the animation code. The keyframe name used in this code is oscilate-wire.  
If the length 0%, The rotateZ() function is used to rotate the shape or an object around the z-axis for 45 deg and rotates 80 deg.  
If the length is 50%, rotates for 115 deg around the z-axis and rotates 120 deg.  
If the length is 100%, rotates for 45 deg around the z-zxis and rotates 80 deg.
