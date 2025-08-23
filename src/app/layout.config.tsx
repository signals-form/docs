import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { DraftingCompass, Library } from "lucide-react";
import { i18n } from "@/lib/i18n";

export function linkItems(locale: string): BaseLayoutProps['links'] {
  const navTexts = {
    en: {
      documentation: "Documentation",
      devtools: "DevTools",
      reference: "Reference",
      examples: "Examples",
    },
    cn: {
      documentation: "文档",
      devtools: "开发工具",
      reference: "参考",
      examples: "示例",
    },
  };

  const texts = navTexts[locale as keyof typeof navTexts] || navTexts.en;

  return [
    {
      type: "main",
      on: "all",
      text: texts.documentation,
      url: `/${locale}/docs/core`,
      icon: <Library />,
    },
    {
      type: "main",
      on: "all",
      text: texts.devtools,
      url: `/${locale}/docs/devtools`,
      icon: <DraftingCompass />,
    },
    {
      type: "main",
      on: "all",
      text: texts.reference,
      url: `/${locale}/docs/api-reference`,
      icon: <DraftingCompass />,
    },
    {
      type: "main",
      on: "all",
      text: texts.examples,
      url: `/${locale}/docs/examples`,
      icon: <DraftingCompass />,
    },
  ]
}

export function baseOptions(): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
          <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
            SignalsForm
          </span>
        </>
      ),
      transparentMode: "top",
    },
    githubUrl: "https://github.com/CCherry07",
  };
}
