import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext.jsx';
import { Users, Copy, Check, Play, UserX, QrCode, ShieldAlert, Sparkles } from 'lucide-react';

export const AdminLobby = ({ qrCodeUrl, joinUrl }) => {
  const { roomCode, quizTitle, participants, kickStudent, startQuiz } = useQuiz();
  const [copied, setCopied] = useState(false);
  const [kickingId, setKickingId] = useState(null);

  const handleCopy = () => {
    const textToCopy = joinUrl || `${window.location.origin}/join/${roomCode}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKick = (socketId, studentName) => {
    setKickingId(socketId);
    kickStudent(socketId, `Removed by host.`);
    setTimeout(() => setKickingId(null), 500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Top Banner: Quiz Title & PIN */}
      <div className="bg-gradient-to-r from-purple-100 dark:from-purple-900/60 via-slate-50 dark:via-slate-900 to-indigo-100 dark:to-indigo-950/60 rounded-3xl p-6 md:p-8 border border-purple-300 dark:border-purple-500/30 shadow-xl backdrop-blur-xl mb-8 transition-colors">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-200/70 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Live Quiz Lobby
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              {quizTitle || 'C++ Programming Championship'}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
              Scan the QR code or enter the Room PIN on your phone to participate!
            </p>
          </div>

          {/* Huge Room PIN Display */}
          <div className="bg-white dark:bg-slate-950/80 px-8 py-5 rounded-2xl border-2 border-amber-500/50 shadow-xl text-center min-w-[240px]">
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold block mb-1">
              GAME PIN
            </span>
            <span className="text-4xl sm:text-5xl font-mono font-black text-amber-600 dark:text-amber-400 tracking-wider">
              {roomCode}
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: QR Code Onboarding + Participant Roster */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: QR Code & Link (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-xl transition-colors">
          <div className="flex items-center gap-2 mb-4 text-purple-700 dark:text-purple-300 font-bold text-sm">
            <QrCode className="w-4 h-4" />
            <span>Instant Mobile Onboarding</span>
          </div>

          {/* QR Code Container */}
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-transparent mb-6 group hover:scale-[1.02] transition-transform">
            {qrCodeUrl ? (
              <img
                src={qrCodeUrl}
                alt={`QR code to join room ${roomCode}`}
                className="w-64 h-64 sm:w-72 sm:h-72 object-contain rounded-lg"
              />
            ) : (
              <div className="w-64 h-64 flex flex-col items-center justify-center text-slate-400 bg-slate-100 rounded-lg">
                <QrCode className="w-16 h-16 animate-pulse text-purple-600 mb-2" />
                <span className="text-xs text-slate-600">Generating QR...</span>
              </div>
            )}
          </div>

          {/* Direct Link & Copy */}
          <div className="w-full bg-slate-50 dark:bg-slate-900/90 rounded-xl p-3 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-2">
            <div className="truncate text-xs text-slate-600 dark:text-slate-300 font-mono">
              {joinUrl || `${window.location.origin}/join/${roomCode}`}
            </div>
            <button
              onClick={handleCopy}
              className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
            Students can open camera on iPhone or Android to immediately join.
          </p>
        </div>

        {/* Right Column: Participant Roster & Controls (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col h-full bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-xl transition-colors">
          <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-700/60 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Joined Students</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Live roster updates in real-time</p>
              </div>
            </div>

            {/* Counter Badge */}
            <div className="px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-500/40 text-purple-800 dark:text-purple-200 font-bold text-sm shadow-inner flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{participants.length} {participants.length === 1 ? 'Player' : 'Players'}</span>
            </div>
          </div>

          {/* Participants Grid */}
          {participants.length === 0 ? (
            <div className="flex-1 min-h-[260px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-200 dark:border-slate-700/50 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-slate-400 dark:text-slate-500 mb-4 animate-pulse">
                <Users className="w-8 h-8 text-purple-500/60" />
              </div>
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">Waiting for players to join...</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mt-1">
                Tell students to scan the QR code or visit the join URL to join with their name.
              </p>
            </div>
          ) : (
            <div className="flex-1 max-h-[320px] overflow-y-auto pr-2 grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {participants.map((p, idx) => (
                <div
                  key={p.socketId || idx}
                  className="bg-slate-50 dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-700/70 rounded-xl p-3.5 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {p.studentName ? p.studentName.charAt(0).toUpperCase() : '?'}
                    </div>
                    <div className="truncate">
                      <div className="font-bold text-sm text-slate-800 dark:text-slate-100 truncate">
                        {p.studentName}
                      </div>
                      {p.studentId && (
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono truncate">
                          ID: {p.studentId}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Kick Button */}
                  <button
                    onClick={() => handleKick(p.socketId, p.studentName)}
                    disabled={kickingId === p.socketId}
                    title="Kick student from game"
                    className="opacity-60 group-hover:opacity-100 p-1.5 rounded-lg text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 border border-transparent hover:border-rose-200 dark:hover:border-rose-800/50 transition-all flex-shrink-0"
                  >
                    <UserX className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Host Start CTA */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-purple-500 dark:text-purple-400" />
              <span>You have host controls to kick disruptive participants at any time.</span>
            </div>

            <button
              onClick={() => startQuiz(roomCode)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-extrabold text-base shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>Start Quiz ({participants.length} Ready)</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
