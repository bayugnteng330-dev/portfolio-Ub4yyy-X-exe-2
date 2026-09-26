"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";

type Comment = {
  id: number;
  name: string;
  comment: string;
  time: string;
  photo?: string;
};

function UserIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.7 9.7 0 0 1-4-.9L3 21l1.9-4.2A8.2 8.2 0 0 1 3 11.5 8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .7A11.5 11.5 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.5-4.1-1.5-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.4 3.5 1.1.1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.5 6 18.5 6.3 18.5 6.3c.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M5.2 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 10h4.4v11H3V10Zm7 0h4.2v1.5h.1c.6-1 1.9-2 4-2 4.3 0 5.1 2.8 5.1 6.5V21H19v-4.4c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V21H10V10Z" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9" r="1.5" />
      <path d="m21 15-5-5L5 20" />
    </svg>
  );
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [commentName, setCommentName] = useState("");
  const [comment, setComment] = useState("");
  const [photo, setPhoto] = useState("");

  const [comments, setComments] = useState<Comment[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-comments");

    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch {
        setComments([]);
      }
    }
  }, []);

  function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const whatsappNumber = "628XXXXXXXXXX";

    const text = `
Halo Bayu!

Nama: ${name}
Email: ${email}

Pesan:
${message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");

    setName("");
    setEmail("");
    setMessage("");
  }

  function handleCommentSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!commentName.trim() || !comment.trim()) {
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      name: commentName,
      comment: comment,
      time: "Baru saja",
      photo: photo || undefined,
    };

    const updatedComments = [newComment, ...comments];

    setComments(updatedComments);

    localStorage.setItem(
      "portfolio-comments",
      JSON.stringify(updatedComments)
    );

    setCommentName("");
    setComment("");
    setPhoto("");
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Ukuran foto maksimal 5MB.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020611] text-white">
      {/* BACKGROUND */}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute right-[5%] top-[45%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/5 blur-[140px]" />
      </div>

      <Navbar />

      {/* CONTACT */}

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-32">
        {/* TITLE */}

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black md:text-5xl">
            Hubungi <span className="text-blue-500">Saya</span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-500">
            Punya pertanyaan, ide, atau ingin bekerja sama?
            Silakan hubungi saya atau tinggalkan komentar.
          </p>
        </div>

        {/* GRID */}

        <div className="grid gap-7 lg:grid-cols-[330px_1fr]">
          {/* LEFT */}

          <div className="rounded-2xl border border-white/10 bg-[#0c101d]/90 p-6 shadow-2xl backdrop-blur-xl">
            <h2 className="text-xl font-bold text-blue-400">
              Hubungi
            </h2>

            <p className="mt-2 text-xs leading-6 text-gray-500">
              Ada yang mau didiskusikan? Langsung kirim pesan
              aja ya...!
            </p>

            {/* CONTACT FORM */}

            <form
              onSubmit={handleContactSubmit}
              className="mt-6 space-y-4"
            >
              {/* NAME */}

              <div className="relative">
                <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <UserIcon />
                </div>

                <input
                  type="text"
                  placeholder="Nama Anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.06] pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500/60 focus:bg-white/[0.08]"
                />
              </div>

              {/* EMAIL */}

              <div className="relative">
                <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <MailIcon />
                </div>

                <input
                  type="email"
                  placeholder="Email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.06] pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500/60 focus:bg-white/[0.08]"
                />
              </div>

              {/* MESSAGE */}

              <div className="relative">
                <div className="pointer-events-none absolute left-3 top-4 text-gray-500">
                  <MessageIcon />
                </div>

                <textarea
                  placeholder="Pesan Anda"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.06] py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500/60 focus:bg-white/[0.08]"
                />
              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-semibold transition hover:bg-blue-500 active:scale-[0.98]"
              >
                <SendIcon />
                Kirim Pesan
              </button>
            </form>

            {/* DIVIDER */}

            <div className="my-7 h-px bg-white/10" />

            <p className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Find Me
            </p>

            {/* SOCIAL */}

            <div className="mt-4 space-y-3">
              {/* LINKEDIN */}

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 transition hover:border-blue-500/40 hover:bg-blue-500/5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <LinkedinIcon />
                </div>

                <div>
                  <p className="text-xs font-semibold">
                    Let's Connect
                  </p>

                  <p className="text-[10px] text-gray-500">
                    on LinkedIn
                  </p>
                </div>
              </a>

              {/* INSTAGRAM */}

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 transition hover:border-pink-500/40 hover:bg-pink-500/5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
                  <InstagramIcon />
                </div>

                <div>
                  <p className="text-xs font-semibold">
                    Instagram
                  </p>

                  <p className="text-[10px] text-gray-500">
                    @bayu
                  </p>
                </div>
              </a>

              {/* GITHUB */}

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white">
                  <GithubIcon />
                </div>

                <div>
                  <p className="text-xs font-semibold">
                    Github
                  </p>

                  <p className="text-[10px] text-gray-500">
                    @bayu
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div className="rounded-2xl border border-white/10 bg-[#0b0e18]/90 p-6 shadow-2xl backdrop-blur-xl">
            {/* HEADER */}

            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <MessageIcon />
              </div>

              <h2 className="text-sm font-bold">
                Komentar ({comments.length})
              </h2>
            </div>

            {/* COMMENT FORM */}

            <form
              onSubmit={handleCommentSubmit}
              className="mt-7"
            >
              <label className="mb-2 block text-[11px] text-gray-400">
                Nama
              </label>

              <input
                type="text"
                placeholder="Masukkan nama kamu"
                value={commentName}
                onChange={(e) =>
                  setCommentName(e.target.value)
                }
                required
                className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500/60"
              />

              <label className="mb-2 mt-5 block text-[11px] text-gray-400">
                Komentar
              </label>

              <textarea
                placeholder="Tulis komentar kamu di sini..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500/60"
              />

              {/* PHOTO */}

              <label className="mb-2 mt-5 block text-[11px] text-gray-400">
                Foto Profil (opsional)
              </label>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-white/20 bg-white/[0.02] text-xs text-gray-400 transition hover:border-blue-500/50 hover:text-blue-400"
              >
                <ImageIcon />

                {photo
                  ? "Foto berhasil dipilih"
                  : "Choose Profile Photo"}
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />

              <p className="mt-2 text-center text-[10px] text-gray-600">
                Max file size: 5MB
              </p>

              {/* SEND */}

              <button
                type="submit"
                className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-xs font-semibold transition hover:bg-blue-500 active:scale-[0.99]"
              >
                <SendIcon />
                Kirim Komentar
              </button>
            </form>

            {/* COMMENTS */}

            <div className="mt-6">
              {comments.length === 0 ? (
                <div className="border-t border-white/10 py-10 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-gray-500">
                    <MessageIcon />
                  </div>

                  <p className="mt-3 text-sm text-gray-500">
                    Belum ada komentar.
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Jadilah orang pertama yang memberikan komentar.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-white/10">
                  {comments.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 py-5"
                    >
                      {/* AVATAR */}

                      {item.photo ? (
                        <img
                          src={item.photo}
                          alt={item.name}
                          className="h-9 w-9 shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-gray-300">
                          {item.name
                            .charAt(0)
                            .toUpperCase()}
                        </div>
                      )}

                      {/* CONTENT */}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs font-semibold text-gray-200">
                            {item.name}
                          </p>

                          <span className="text-[9px] text-gray-600">
                            {item.time}
                          </span>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          {item.comment}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}