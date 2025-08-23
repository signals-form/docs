import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import "../../styles/global.css"
import type { ReactNode } from 'react';
import SearchDialog from "../../components/search"

import { source } from '@/lib/source';
export function generateStaticParams() {
  return source.generateParams();
}

const inter = Inter({
  subsets: ['latin'],
});

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <RootProvider
          search={{
            SearchDialog
          }}
          i18n={{
            locale: lang,
            locales: [
              {
                name: 'English',
                locale: 'en',
              },
              {
                name: '简体中文',
                locale: 'cn',
              },
            ],
            translations: {
              cn: {
                toc: '目录',
                search: '搜索文档',
                lastUpdate: '最后更新于',
                searchNoResult: '没有结果',
                previousPage: '上一页',
                nextPage: '下一页',
                chooseLanguage: '选择语言',
              },
            }[lang],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
