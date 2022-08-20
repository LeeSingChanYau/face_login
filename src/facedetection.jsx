import { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

const FaceDetection = (props) => {
  const imgRef = useRef();
  const canvasRef = useRef();

  const handleImage = async () => {
    const detections = await faceapi
      .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(imgRef.current);

    faceapi.matchDimensions(canvasRef.current, {
        width: 800,
        height: 450,
    });

    const resized = faceapi.resizeResults(detections, {
        width: 800,
        height: 450,
    });

    faceapi.draw.drawDetections(canvasRef.current, resized);
  };

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ])
        .then(handleImage)
        .catch((e) => {
          console.log(e);
        });
    };

    imgRef.current && loadModels();
  }, [props.file]);

  return (
    <div className="face">
      <img
        crossorigin="anonymous"
        src={props.file}
        ref={imgRef}
        alt=""
        height="450"
        width="800"
      />
      <canvas ref={canvasRef} height="450" width="800" />
    </div>
  );
};

export default FaceDetection;
