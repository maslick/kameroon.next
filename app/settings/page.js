"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();
  const [settings, setSettings] = useState({
    beep: false,
    bw: false,
    crossHair: false,
    crossHairStyle: 'square'
  });

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('scannerSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to localStorage whenever they change
  const updateSettings = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('scannerSettings', JSON.stringify(newSettings));
  };

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[100dvh] font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 sm:items-center">
        <div className="font-[family-name:var(--font-geist-mono)]">
          <div className="text-center mb-12">
            <h1 className="text-2xl font-bold">Config</h1>
          </div>
          <div className="rounded-2xl shadow-2xl p-6 w-[340px] md:w-[480px] lg:w-[640px] pb-10 pt-10">
            <div className="space-y-6">
              {/* Beep Setting */}
              <div className="flex items-center justify-between pt-2.5">
                <label className="text-pretty">Beep Sound</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.beep}
                    onChange={(e) => updateSettings('beep', e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"/>
                </label>
              </div>

              {/* Black and White Setting */}
              <div className="flex items-center justify-between">
                <label className="text-pretty">Black and white</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.bw}
                    onChange={(e) => updateSettings('bw', e.target.checked)}
                  />
                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                </label>
              </div>

              {/* Crosshair Frame Setting */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-pretty">Crosshair frame</label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.crossHair}
                      onChange={(e) => updateSettings('crossHair', e.target.checked)}
                    />
                    <div
                      className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                  </label>
                </div>

                {/* Crosshair Style Dropdown - Only shown when crossHair is enabled */}
                {settings.crossHair && (
                  <div className="flex items-center justify-center pt-8">
                    <select
                      className="w-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-pretty rounded-lg p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white appearance-none focus:outline-none"
                      value={settings.crossHairStyle}
                      onChange={(e) => updateSettings('crossHairStyle', e.target.value)}
                    >
                      <option value="rectangular" className="text-center">Rectangular</option>
                      <option value="square" className="text-center">Square</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <button onClick={() => router.back()} className="rounded-full w-12 h-12 flex items-center justify-center bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-all">
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
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
        </div>
      </main>

    </div>
  );
}
