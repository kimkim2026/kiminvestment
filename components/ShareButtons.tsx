'use client';

import { useEffect, useState } from 'react';

interface ShareButtonsProps {
  title: string;
  description?: string;
  url?: string;
}

export default function ShareButtons({ title, description, url }: ShareButtonsProps) {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(url || window.location.href);
  }, [url]);

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description || '한국인이 미국 집주인 되는 법 — 김통찰의 미국 부동산',
        url: currentUrl,
      }).catch(() => {});
    } else {
      setShowModal(true);
    }
  };

  const shareFacebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl), '_blank', 'width=600,height=400');
  };

  const shareTwitter = () => {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(title + ' — 김통찰의 미국 부동산') + '&url=' + encodeURIComponent(currentUrl), '_blank', 'width=600,height=400');
  };

  const shareEmail = () => {
    const subject = '[김통찰의 미국 부동산] ' + title;
    const body = '미국 부동산 투자에 관심 있는 분께 유용한 글을 공유합니다.\n\n' + title + '\n' + currentUrl + '\n\n한국인이 미국 집주인 되는 법, 김통찰의 미국 부동산에서 더 많은 정보를 확인해 보세요.';
    window.location.href = 'mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  };

  const shareBand = () => {
    window.open('https://band.us/plugin/share?body=' + encodeURIComponent('[미국 부동산 투자 가이드] ' + title + '\n' + currentUrl) + '&route=' + encodeURIComponent(currentUrl), '_blank');
  };

  const copyLink = async () => {
    const text = '[미국 부동산 투자 가이드] ' + title + '\n' + currentUrl + '\n미국 투자 시작 전 꼭 읽어보세요.';
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="border-t border-slate-700 pt-8 pb-2 text-center">
        <p className="text-slate-400 text-sm mb-4">이 글이 도움이 되셨나요? 미국 부동산 투자 고민하는 분들에게 공유해보세요 :)</p>
        <button
          onClick={handleNativeShare}
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold px-6 py-3 rounded-full text-sm transition-colors"
        >
          공유하기
        </button>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-end justify-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-slate-800 rounded-t-2xl w-full max-w-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-white font-bold text-lg">공유하기</span>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white text-xl leading-none"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={handleNativeShare}
                className="flex flex-col items-center gap-2 bg-slate-700 hover:bg-slate-600 rounded-xl p-4 transition-colors"
              >
                <span className="text-2xl">💬</span>
                <span className="text-xs text-slate-300">카카오톡</span>
              </button>
              <button
                onClick={shareFacebook}
                className="flex flex-col items-center gap-2 bg-slate-700 hover:bg-slate-600 rounded-xl p-4 transition-colors"
              >
                <span className="text-2xl">📘</span>
                <span className="text-xs text-slate-300">Facebook</span>
              </button>
              <button
                onClick={shareTwitter}
                className="flex flex-col items-center gap-2 bg-slate-700 hover:bg-slate-600 rounded-xl p-4 transition-colors"
              >
                <span className="text-2xl">🐦</span>
                <span className="text-xs text-slate-300">X (트위터)</span>
              </button>
              <button
                onClick={shareEmail}
                className="flex flex-col items-center gap-2 bg-slate-700 hover:bg-slate-600 rounded-xl p-4 transition-colors"
              >
                <span className="text-2xl">📧</span>
                <span className="text-xs text-slate-300">이메일</span>
              </button>
              <button
                onClick={shareBand}
                className="flex flex-col items-center gap-2 bg-slate-700 hover:bg-slate-600 rounded-xl p-4 transition-colors"
              >
                <span className="text-2xl">📣</span>
                <span className="text-xs text-slate-300">네이버 밴드</span>
              </button>
              <button
                onClick={copyLink}
                className="flex flex-col items-center gap-2 bg-slate-700 hover:bg-slate-600 rounded-xl p-4 transition-colors"
              >
                <span className="text-2xl">🔗</span>
                <span className="text-xs text-slate-300">{copied ? '복사됨 ✓' : '링크 복사'}</span>
              </button>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-slate-700 hover:bg-slate-600 text-white rounded-xl py-3 mt-2 transition-colors"
            >
              취소
            </button>
          </div>
        </div>
      )}
    </>
  );
}
