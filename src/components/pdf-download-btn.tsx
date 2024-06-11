"use client";
import React, { useState, useCallback } from "react";
import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";

const PdfDownloadButton = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDownloadClick = useCallback(async () => {
    setLoading(true);

    const pdfUrl = "/PORTFOLIO.pdf";

    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error(`Failed to download PDF: ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "PORTFOLIO.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Button
      onClick={handleDownloadClick}
      className="my-4 w-1/2"
      variant="outline"
      size="lg"
      disabled={loading}
    >
      {loading ? <LoaderCircle className="animate-spin" /> : "View More"}
    </Button>
  );
};

export default PdfDownloadButton;
