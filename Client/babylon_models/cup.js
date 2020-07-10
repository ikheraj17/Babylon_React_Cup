var createScene = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    // var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI, Math.PI / 3, 10, BABYLON.Vector3.Zero(), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    var spotlight = new BABYLON.SpotLight("spotlight", new BABYLON.Vector3(0,1,1), new BABYLON.Vector3(0,-1,0), Math.PI /2, 1.5, scene);

    

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape.
    var cup = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.5, diameterBottom: 1.2, height: 2.1, tessellation: 24}, scene);

    // Move the sphere upward 1/2 its height
    cup.position.y = 1;

    var lip = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.54, diameterBottom: 1.54, height: 0.15, tessellation: 24}, scene);
    lip.position.y = 2;

    var styrofoam = new BABYLON.StandardMaterial("styrofoam", scene);
    styrofoam.emissiveColor = new BABYLON.Color3(1, 1, 1);
    cup.material = styrofoam;
    lip.material = styrofoam;

    return scene;

};