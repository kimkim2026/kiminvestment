'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

interface ShareButtonsProps {
  title: string;
  description?: string;
  url?: string;
}

export default function ShareButtons({ title, description, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js';
    script.async = true;
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
      }
    };
    document.head.appendChild(script);
  }, []);

  const shareKakao = () => {
    if (!window.Kakao?.Share) return;
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl: 'https://www.kiminvestment.com/og-image.png',
        link: {
          webUrl: currentUrl,
          mobileWebUrl: currentUrl,
        },
      },
      buttons: [
        {
          title: '글 읽기',
          link: {
            webUrl: currentUrl,
            mobileWebUrl: currentUrl,
          },
        },
      ],
    });
  };

  const shareFacebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl), '_blank');
  };

  const shareTwitter = () => {
    window.open(
      'https://twitter.com/intent/tweet?text=' +
        encodeURIComponent(title + ' — 김통찰의 미국 부동산') +
        '&url=' +
        encodeURIComponent(currentUrl),
      '_blank'
    );
  };

  const shareEmail = () => {
    const subject = '[김통찰의 미국 부동산] ' + title;
    const body =
      '미국 부동산 투자에 관심 있는 분께 유용한 글을 공유합니다.\n\n' +
      title +
      '\n' +
      currentUrl +
      '\n\n한국인이 미국 집주인 되는 법, 김통찰의 미국 부동산에서 더 많은 정보를 확인해 보세요.';
    window.location.href = 'mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  };

  const shareBand = () => {
    window.open(
      'https://band.us/plugin/share?body=' +
        encodeURIComponent(
          '[미국 부동산 투자 가이드] ' + title + '\n' + currentUrl + '\n미국 투자 시작 전 꼭 읽어보세요.'
        ) +
        '&route=' +
        encodeURIComponent(currentUrl),
      '_blank'
    );
  };

  const copyLink = async () => {
    const text =
      '[미국 부동산 투자 가이드] ' + title + '\n' + currentUrl + '\n미국 투자 시작 전 꼭 읽어보세요.';
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-t border-slate-700 pt-8 pb-2">
      <p className="text-slate-400 text-sm text-center mb-4">
        이 글이 도움이 되셨나요? 미국 부동산 투자 고민하는 분들에게 공유해보세요 :)
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={shareKakao}
          className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold transition-colors bg-yellow-400 hover:bg-yellow-300 text-yellow-900"
        >
          카카오톡
        </button>
        <button
          onClick={shareFacebook}
          className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold transition-colors bg-blue-600 hover:bg-blue-700 text-white"
        >
          Facebook
        </button>
        <button
          onClick={shareTwitter}
          className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold transition-colors bg-slate-900 hover:bg-slate-700 text-white"
        >
          X (트위터)
        </button>
        <button
          onClick={shareEmail}
          className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold transition-colors bg-slate-200 hover:bg-slate-300 text-slate-800"
        >
          이메일
        </button>
        <button
          onClick={shareBand}
          className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold transition-colors bg-green-500 hover:bg-green-600 text-white"
        >
          네이버 밴드
        </button>
        <button
          onClick={copyLink}
          className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold transition-colors bg-slate-700 hover:bg-slate-600 text-white"
        >
          {copied ? '복사되었습니다 ✓' : '링크 복사'}
        </button>
      </div>
      <p className="text-xs text-slate-500 text-center mt-3">링크 복사 시 제목과 주소가 함께 복사됩니다</p>
    </div>
  );
}
