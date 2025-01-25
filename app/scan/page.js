'use client';

import {Scan} from "@/app/scan";
import {initializeAudio} from "@/app/scan/helper";
import {useState} from "react";
import {Button, Result} from "./styles";

export default function ScanCodePage() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [result, setResult] = useState();

  const onCapture = async (code) => {
    setResult(code);
  };

  const onClear = () => setIsCameraOpen(false);

  const handleStartScanBtn = async () => {
    initializeAudio();
    setIsCameraOpen(!isCameraOpen);
    setResult(undefined);
  };

  const handleStopScanBtn = () => {
    setIsCameraOpen(false);
    setResult(undefined);
  };

  const renderHelp = () => {
    if (!isCameraOpen && !result)
      return (
        <div>
          <p>Click <b>Scan</b> to start the camera</p>
        </div>
      );
  };

  const renderCamera = () => {
    if (!isCameraOpen) return null;
    return (
      <Scan
        beepOn={true}
        crosshair={{enabled: true, style: "square"}}
        bw={false}
        onCapture={onCapture}
        onClear={onClear}
      />
    );
  };

  const renderResult = () => {
    if (result) return (
      <Result>
        <p>{result['rawcode']}</p>
        <div><b>{result['alg']}:</b> {result['milliseconds']} ms</div>
        <div><b>type</b>: {result["type"]}</div>
      </Result>
    );
  };

  return (
    <div
      className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 sm:items-center">
        <div className="font-[family-name:var(--font-geist-mono)]">
          <div style={{minHeight: 0, margin: 0}}>
            {renderHelp()}
            {renderResult()}
            {renderCamera()}
          </div>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row content-center">
          {!isCameraOpen ?
            <button onClick={handleStartScanBtn} className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-base sm:text-base h-12 sm:h-12 px-6 sm:px-5">
              Scan
            </button> :
            <button onClick={handleStopScanBtn} className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-red-500 text-background gap-2 hover:bg-red-600 dark:hover:bg-red-400 text-base sm:text-base h-12 sm:h-12 px-6 sm:px-5">
              Stop
            </button>
          }
          <a href="/" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-base sm:text-base h-12 sm:h-12 px-6 sm:px-5">
            Back
          </a>
        </div>
      </main>
    </div>
  );
};