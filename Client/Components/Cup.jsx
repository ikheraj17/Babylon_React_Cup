import React from 'react'
import { Engine, Scene } from 'react-babylonjs'
import { Vector3, Color3, Color4, Vector4 } from '@babylonjs/core';
import cupStyles from './Cup.module.css';

var faceUV = [];
	faceUV[0] =	new Vector4(0, 0, 0, 0);
    faceUV[1] =	new Vector4(1, 0, 0.32, 1);
    faceUV[2] = new Vector4(0, 0, 0.25, 1);
    var faceColors = [];
    faceColors[1] = new Color4(1, 1, 1, 1);
    faceColors[2] = new Color4(1, 1, 1, 0.6);
 
const DefaultPlayground = () => (
  <Engine canvasId="sample-canvas">
    <Scene>
      <arcRotateCamera name="camera1"  alpha={Math.PI} beta={Math.PI /3} position={new Vector3(0,5,-10)} radius={6} target={Vector3.Zero()} />
      <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
      <cylinder name="cylinder" diameterTop={1.5} diameterBottom={1.2} segments={16} position={new Vector3(0, 0, 0)} height={3} faceUV={faceUV} faceColors={faceColors} hasVertexAlpha={true}>
          <standardMaterial emissiveColor={Color3.White()} />
          </cylinder>
      <cylinder name="cylinder" diameterTop={1.54} diameterBottom={1.54} segments={16} position={new Vector3(0, 1.3, 0)} height={0.4} faceUV={faceUV} faceColors={faceColors} hasVertexAlpha={true}>
      <standardMaterial emissiveColor={Color3.White()} />
      </cylinder>
    </Scene>
  </Engine>
)
 
export default DefaultPlayground;