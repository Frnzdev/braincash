"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const InstallPWAButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    (deferredPrompt as any).prompt();
    const { outcome } = await (deferredPrompt as any).userChoice;

    console.log(`Usuário escolheu: ${outcome}`);
    setDeferredPrompt(null);
    setShowButton(false);
  };

  if (!showButton) return null;

  return (
    <button
      onClick={handleInstallClick}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow transition hover:bg-green-700"
    >
      <Download size={24} />
    </button>
  );
};

export default InstallPWAButton;
