'use client';

import { useEffect, useId, useRef, useState } from 'react';

const RESUME_PDF_URL = '/projects/Resume.pdf';

function ResumeModal({ open, onClose }) {
  const titleId = useId();
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    // Focus the modal panel for accessibility.
    panelRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close resume modal"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-gray-950 shadow-2xl"
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-gray-950/80 px-4 py-3">
          <div className="min-w-0">
            <h3 id={titleId} className="truncate text-sm font-semibold text-white">
              Resume
            </h3>
            <p className="truncate text-xs text-gray-400">Preview & download PDF</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-100 hover:border-white/25 hover:bg-white/10"
            >
              Open in new tab
            </a>
            <a
              href={RESUME_PDF_URL}
              download
              className="rounded-lg bg-[#EC9706] px-3 py-2 text-xs font-semibold text-black hover:bg-[#D88506]"
            >
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-100 hover:border-white/25 hover:bg-white/10"
            >
              Close
            </button>
          </div>
        </div>

        <div className="h-[75vh] bg-black">
          <iframe
            title="Resume PDF"
            src={RESUME_PDF_URL}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function ResumeButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="px-8 py-3 rounded-xl font-semibold border border-white/10 hover:border-[#EC9706] text-gray-200 hover:text-white transition"
      >
        Resume
      </button>
      <ResumeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
