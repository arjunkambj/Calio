"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Image from "next/image";

const VIDEO_ID = "jbcaONNEc_I";
const THUMBNAIL_URLS = [
  `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
  `https://img.youtube.com/vi/${VIDEO_ID}/sddefault.jpg`,
  `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`,
] as const;

const HIGHLIGHTS = [
  {
    icon: "solar:play-circle-bold-duotone",
    text: "Live trading sessions & market analysis",
  },
  {
    icon: "solar:chat-round-dots-bold-duotone",
    text: "Real-time Q&A with experienced traders",
  },
  {
    icon: "solar:bell-bold-duotone",
    text: "Weekly streams — never miss an update",
  },
] as const;

export default function FeaturedStream() {
  const [playing, setPlaying] = useState(false);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const currentThumbnail =
    THUMBNAIL_URLS[Math.min(thumbnailIndex, THUMBNAIL_URLS.length - 1)]!;

  const moveToNextThumbnail = () => {
    setThumbnailIndex((index) =>
      index < THUMBNAIL_URLS.length - 1 ? index + 1 : index,
    );
  };

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex flex-col space-y-4 lg:col-span-2"
          >
            <span className="marketing-kicker">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Featured Stream
            </span>

            <h2 className="marketing-title">
              Watch Traders <span className="text-primary/70">In Action</span>
            </h2>

            <p className="marketing-copy max-w-md">
              See how top prop firm traders operate in real-time. Learn
              strategies, risk management, and what it takes to pass challenges
              — straight from funded traders.
            </p>

            <div className="space-y-3 pt-2">
              {HIGHLIGHTS.map((highlight) => (
                <div
                  key={highlight.text}
                  className="flex items-center gap-3 border-b border-border/60 py-3 last:border-none"
                >
                  <Icon
                    icon={highlight.icon}
                    className="h-4 w-4 shrink-0 text-primary"
                  />
                  <span className="text-sm text-muted-foreground">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-3"
          >
            <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card">
              <div className="relative aspect-video">
                {playing ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                    title="Calio Trader — Live Trading & Analysis"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="group absolute inset-0 h-full w-full cursor-pointer"
                    aria-label="Play video"
                  >
                    <Image
                      src={currentThumbnail}
                      alt="Video thumbnail"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="absolute inset-0 h-full w-full object-cover"
                      onError={moveToNextThumbnail}
                      onLoad={(event) => {
                        const { naturalWidth, naturalHeight } =
                          event.currentTarget;
                        if (naturalWidth <= 120 || naturalHeight <= 90) {
                          moveToNextThumbnail();
                        }
                      }}
                    />

                    <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/92 text-primary-foreground transition-transform group-hover:scale-105 md:h-20 md:w-20">
                        <div
                          className="absolute inset-0 animate-ping rounded-full bg-primary/25"
                          style={{ animationDuration: "2s" }}
                        />
                        <Icon
                          icon="solar:play-bold"
                          className="relative h-7 w-7 translate-x-0.5 md:h-8 md:w-8"
                        />
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
