'use client';

import {Scan} from "@/app/scan";
import {initializeAudio} from "@/app/scan/helper";
import {useEffect, useState} from "react";
import { useRouter } from 'next/navigation';

export default function ScanCodePage() {
  const router = useRouter();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [result, setResult] = useState();
  const [settings, setSettings] = useState({
    beep: false,
    bw: false,
    crossHair: false,
    crossHairStyle: 'rectangular'
  });

  useEffect(() => {
    // Load settings when component mounts
    const savedSettings = localStorage.getItem('scannerSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

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

  const handleSettingsBtn = async () => {
    setIsCameraOpen(false);
    setResult(undefined);
    router.push('/settings');
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
        beepOn={settings.beep}
        crosshair={{enabled: settings.crossHair, style: settings.crossHairStyle}}
        bw={settings.bw}
        onCapture={onCapture}
        onClear={onClear}
      />
    );
  };

  const renderResult = () => {
    if (result) return (
      <div className="p-4 px-4 mx-auto w-[340px] md:w-[480px] lg:w-[640px] rounded-2xl border-t-4 border-b-4 border-b-neutral-200">
        <p className="mb-5 text-wrap text-justify whitespace-pre-wrap break-words">{result['rawcode']}</p>
        <p className=""><b>{result['alg']}:</b> {result['milliseconds']} ms</p>
        <p className=""><b>type</b>: {result["type"]}</p>
      </div>
    );
  };

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[100dvh] font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 row-start-2 sm:items-center">
        <div className="font-[family-name:var(--font-geist-mono)]">
          <div style={{minHeight: 0, margin: 0}}>
            {renderHelp()}
            {renderResult()}
            {renderCamera()}
          </div>
        </div>
        <div className="flex gap-4 items-center flex-row content-center justify-center">
          {!isCameraOpen ?
            <button onClick={handleStartScanBtn}
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-base sm:text-base h-12 sm:h-12 px-6 sm:px-5">
              Scan
            </button> :
            <button onClick={handleStopScanBtn}
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-red-500 text-background gap-2 hover:bg-red-600 dark:hover:bg-red-400 text-base sm:text-base h-12 sm:h-12 px-6 sm:px-5">
              Stop
            </button>
          }

          <button
            onClick={handleSettingsBtn}
            className="rounded-full w-12 h-12 flex items-center justify-center bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] shadow-lg transition-all z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </button>


          <a href="/"
             className="rounded-full w-12 h-12 flex items-center justify-center bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] shadow-lg transition-all z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18"/>
              <path d="M6 6l12 12"/>
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
};