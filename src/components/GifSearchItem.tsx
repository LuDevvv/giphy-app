import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BiUser,
  BiLink,
  BiX,
  BiHeart,
  BiDownload,
  BiShare,
} from "react-icons/bi";
import { GifImage } from "../types";

export const GifSearchItem: React.FC<GifImage> = ({
  title,
  url,
  username,
  source,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title || "giphy"}.gif`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (navigator.share) {
      navigator
        .share({
          title: title || "GIF compartido desde Giphy Search App",
          url: url,
        })
        .catch(console.error);
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => alert("URL copiada al portapapeles"))
        .catch(console.error);
    }
  };

  return (
    <>
      <motion.div
        className="ct-card"
        whileHover={{ scale: 1.03 }}
        onClick={() => setShowModal(true)}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="card-actions">
          <button
            className={`action-btn ${isLiked ? "liked" : ""}`}
            onClick={handleLike}
            aria-label={isLiked ? "Quitar me gusta" : "Me gusta"}
          >
            <BiHeart />
          </button>
        </div>

        <img
          className="card-gif-img"
          src={url}
          alt={title || "GIF sin título"}
          loading="lazy"
        />
        <h5 className="card-gif-title">{title || "Sin título"}</h5>
      </motion.div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <BiX />
            </button>

            <div className="modal-image-container">
              <img src={url} alt={title || "GIF sin título"} />
            </div>

            <div className="modal-info">
              <h3>{title || "Sin título"}</h3>

              {username && (
                <p className="modal-username">
                  <BiUser /> {username}
                </p>
              )}

              {source && (
                <p className="modal-source">
                  <BiLink />
                  <a href={source} target="_blank" rel="noopener noreferrer">
                    Fuente original
                  </a>
                </p>
              )}

              <div className="modal-actions">
                <button
                  className={`modal-action-btn ${isLiked ? "liked" : ""}`}
                  onClick={handleLike}
                >
                  <BiHeart /> {isLiked ? "Liked" : "Like"}
                </button>

                <button className="modal-action-btn" onClick={handleDownload}>
                  <BiDownload /> Descargar
                </button>

                <button className="modal-action-btn" onClick={handleShare}>
                  <BiShare /> Compartir
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
