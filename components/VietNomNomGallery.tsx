"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react";
import { vietNomNomPhotos } from "./vietNomNomPhotos";
import styles from "./VietNomNomCaseStudy.module.css";

export default function VietNomNomGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const photo = vietNomNomPhotos[selected];

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function move(direction: number) {
    setSelected((current) => (current + direction + vietNomNomPhotos.length) % vietNomNomPhotos.length);
  }

  return (
    <>
      <div className={styles.gallery}>
        {vietNomNomPhotos.map((item, index) => (
          <button
            className={styles.photo}
            type="button"
            key={item.src}
            aria-label={`Enlarge photo ${index + 1}: ${item.alt}`}
            aria-haspopup="dialog"
            onClick={() => {
              setSelected(index);
              dialogRef.current?.showModal();
              setIsOpen(true);
            }}
          >
            <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 700px) 100vw, (max-width: 1288px) 50vw, 620px" />
          </button>
        ))}
      </div>
      <dialog
        className={styles.lightbox}
        ref={dialogRef}
        aria-label="Viet Nom Nom photography gallery"
        onClose={() => setIsOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        }}
      >
        <div className={styles.viewer}>
          <div className={styles.viewerToolbar}>
            <span aria-live="polite">{selected + 1} / {vietNomNomPhotos.length}</span>
            <button type="button" aria-label="Close gallery" onClick={() => dialogRef.current?.close()}><X size={24} /></button>
          </div>
          {isOpen && <Image key={photo.src} className={styles.largePhoto} src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="100vw" />}
          <div className={styles.viewerToolbar}>
            <button type="button" aria-label="Previous photo" onClick={() => move(-1)}><ArrowLeft size={24} /></button>
            <p>{photo.alt}</p>
            <button type="button" aria-label="Next photo" onClick={() => move(1)}><ArrowRight size={24} /></button>
          </div>
        </div>
      </dialog>
    </>
  );
}
