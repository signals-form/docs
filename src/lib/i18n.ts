import type { I18nConfig } from 'fumadocs-core/i18n';

export const i18n: I18nConfig = {
  defaultLanguage: 'en',
  languages: ['en', 'cn'],
  hideLocale: "never",
  fallbackLanguage: 'en',
};

export const languages = {
  en: 'English',
  cn: '简体中文',
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'en';

export const translations = {
  en: {
    hero: {
      badge: 'The New Form Library Experience',
      title: 'The Universal Form Library',
      description: 'A modern form library based on Signals architecture, supporting React, Vue, Svelte, Solid and all mainstream frameworks. Provides type safety, ultimate performance and unified development experience.',
      getStarted: 'Get Started',
      github: 'GitHub',
      installTitle: 'Quick Start Installation',
      moreFrameworks: '+ More Frameworks',
      mainTitle: 'Make Form Great Again',
      subtitle: 'The declarative API seamlessly integrates with powerful field linking, and provides flexible validation, excellent performance, and comprehensive support for various frameworks.',
      starGithub: 'Star GitHub',
      revolutionaryBadge: 'Revolutionary Form Library',
    },
    frameworks: {
      title: 'One API, All Frameworks',
      description: 'No matter which frontend framework you use, enjoy consistent development experience and the same powerful features',
      react: {
        name: 'React',
        description: 'Perfect integration with React ecosystem',
      },
      vue: {
        name: 'Vue',
        description: 'Native support for Vue 3 Composition API',
      },
      svelte: {
        name: 'Svelte',
        description: 'Lightweight with excellent performance',
      },
      solid: {
        name: 'Solid',
        description: 'Fine-grained reactivity',
      },
    },
    codeExample: {
      title: 'Unified API Design',
      description: 'Cross-framework consistent API, learn once, use everywhere. Built-in TypeScript support and Zod validation make form development simple and secure.',
      features: [
        'Zero configuration to get started',
        'Cross-framework consistent API',
        'Ultimate performance optimization',
      ],
    },
    features: {
      title: 'Designed for Modern Development',
      description: 'Combines best practices to provide features developers really need',
      signals: {
        title: 'Signals Architecture',
        description: 'Based on modern Signals pattern, achieving fine-grained updates and minimizing unnecessary re-renders',
      },
      devExp: {
        title: 'Developer Experience',
        description: 'Intuitive API with rich development tool support makes form development delightful',
      },
      validation: {
        title: 'Built-in Validation',
        description: 'Deep integration with Zod, Yup and other validation libraries, supports synchronous and asynchronous validation',
      },
      a11y: {
        title: 'Accessibility',
        description: 'Follows WCAG standards, automatically handles ARIA attributes and keyboard navigation',
      },
      i18n: {
        title: 'Internationalization',
        description: 'Built-in internationalization features, supports multi-language error messages and localization',
      },
      // Home page specific features
      fieldLinking: {
        title: '🔗 Powerful Field Linking',
        description: 'Intelligent field interdependencies with one line of code. Support disable, show/hide, validation and more linking modes.',
      },
      declarativeAPI: {
        title: '📝 Declarative API Design',
        description: 'Intuitive declarative configuration without complex imperative code. Define once, works everywhere.',
      },
      flexibleValidators: {
        title: '⚖️ Flexible Validators',
        description: 'Support Zod, Yup and popular validation libraries. Sync/async validation, custom rules for any business needs.',
      },
      exceptionalPerformance: {
        title: '⚡ Exceptional Performance',
        description: 'Signals-based architecture with fine-grained updates. Avoid unnecessary re-renders for ultimate performance.',
      },
      universalFramework: {
        title: '🌍 Universal Framework Support',
        description: 'React, Vue, Svelte, Solid compatible. Learn once, use everywhere. Cross-framework unified experience.',
      },
      typeSafe: {
        title: '🛡️ 100% Type Safe',
        description: 'Complete TypeScript integration with full type inference. Catch errors at compile time, not runtime.',
      },
    },
    demo: {
      title: 'Try Online',
      description: 'Experience the power of Signals Form directly in your browser',
      loading: 'Loading demo...',
      tryItLive: '🎮 Try It Live',
      tryItLiveDesc: 'Experience the power of Signals Form in action',
      loadingDemo: 'Loading interactive demo...',
    },
    stats: {
      frameworks: 'Frameworks Supported',
      performance: 'Faster Rendering',
      downloads: 'Monthly Downloads',
      typeSafe: 'By Design',
    },
    codeSection: {
      title: '💻 Code That Speaks For Itself',
      subtitle: 'Simple, powerful, beautiful. This is what modern form code should look like.',
      features: [
        '⚡ Lightning-fast field linking',
        '📝 Declarative configuration',
        '🛡️ Full TypeScript support',
        '🔄 Smart validation system',
      ],
    },
    frameworkSupport: {
      title: '🌍 Universal Framework Support',
      subtitle: 'One API to rule them all. Write once, run everywhere.',
      react: {
        name: 'React',
        description: 'Full React 18+ support with hooks and concurrent features',
      },
      vue: {
        name: 'Vue',
        description: 'Vue 3 composition API with full reactivity system',
      },
      svelte: {
        name: 'Svelte',
        description: 'SvelteKit ready with stores and reactive declarations',
      },
      solid: {
        name: 'Solid',
        description: 'SolidJS signals integration for maximum performance',
      },
    },
  },
  cn: {
    hero: {
      badge: '全新的表单库体验',
      title: 'The Universal Form Library',
      description: '基于 Signals 架构的现代表单库，支持 React、Vue、Svelte、Solid 等所有主流框架。提供类型安全、极致性能和统一的开发体验。',
      getStarted: '开始使用',
      github: 'GitHub',
      installTitle: '快速开始安装',
      moreFrameworks: '+ 更多框架',
      mainTitle: '让表单再次伟大',
      subtitle: '声明式 API 无缝集成强大的字段联动，提供灵活的验证、卓越的性能以及对各种框架的全面支持。',
      starGithub: 'GitHub 点星',
      revolutionaryBadge: '革命性表单库',
    },
    frameworks: {
      title: '一套 API，所有框架',
      description: '无论你使用哪种前端框架，都能享受一致的开发体验和相同的强大功能',
      react: {
        name: 'React',
        description: '完美集成 React 生态系统',
      },
      vue: {
        name: 'Vue',
        description: '原生支持 Vue 3 Composition API',
      },
      svelte: {
        name: 'Svelte',
        description: '轻量级，性能优异',
      },
      solid: {
        name: 'Solid',
        description: 'Fine-grained reactivity',
      },
    },
    codeExample: {
      title: '统一的 API 设计',
      description: '跨框架的一致性 API，学会一次，到处使用。内置 TypeScript 支持和 Zod 验证，让表单开发变得简单而安全。',
      features: [
        '零配置开始使用',
        '跨框架一致性 API',
        '极致性能优化',
      ],
    },
    features: {
      title: '专为现代开发而设计',
      description: '融合最佳实践，提供开发者真正需要的功能',
      signals: {
        title: 'Signals 架构',
        description: '基于现代 Signals 模式，实现细粒度更新，最小化不必要的重渲染',
      },
      devExp: {
        title: '开发体验',
        description: '直观的 API，丰富的开发工具支持，让表单开发变得愉悦',
      },
      validation: {
        title: '内置验证',
        description: '与 Zod、Yup 等验证库深度集成，支持同步和异步验证',
      },
      a11y: {
        title: '无障碍访问',
        description: '遵循 WCAG 标准，自动处理 ARIA 属性和键盘导航',
      },
      i18n: {
        title: '国际化支持',
        description: '内置国际化功能，支持多语言错误消息和本地化',
      },
      // Home page specific features
      fieldLinking: {
        title: '🔗 强大的字段联动',
        description: '一行代码实现智能字段依赖关系。支持禁用、显示/隐藏、验证等多种联动模式。',
      },
      declarativeAPI: {
        title: '📝 声明式 API 设计',
        description: '直观的声明式配置，无需复杂的命令式代码。定义一次，到处运行。',
      },
      flexibleValidators: {
        title: '⚖️ 灵活的验证器',
        description: '支持 Zod、Yup 等流行验证库。同步/异步验证，自定义规则满足任何业务需求。',
      },
      exceptionalPerformance: {
        title: '⚡ 卓越性能',
        description: '基于 Signals 的架构，细粒度更新。避免不必要的重渲染，实现极致性能。',
      },
      universalFramework: {
        title: '🌍 通用框架支持',
        description: '兼容 React、Vue、Svelte、Solid。学会一次，到处使用。跨框架统一体验。',
      },
      typeSafe: {
        title: '🛡️ 100% 类型安全',
        description: '完整的 TypeScript 集成，全类型推断。在编译时捕获错误，而非运行时。',
      },
    },
    demo: {
      title: '在线体验',
      description: '在浏览器中直接体验 Signals Form 的强大功能',
      loading: '加载演示中...',
      tryItLive: '🎮 在线体验',
      tryItLiveDesc: '在浏览器中直接体验 Signals Form 的强大功能',
      loadingDemo: '加载交互演示中...',
    },
    stats: {
      frameworks: '支持框架',
      performance: '性能提升',
      downloads: '月下载量',
      typeSafe: '类型安全',
    },
    codeSection: {
      title: '💻 代码自述',
      subtitle: '简单、强大、优雅。这就是现代表单代码应该有的样子。',
      features: [
        '⚡ 闪电般快速的字段联动',
        '📝 声明式配置',
        '🛡️ 完整的 TypeScript 支持',
        '🔄 智能验证系统',
      ],
    },
    frameworkSupport: {
      title: '🌍 通用框架支持',
      subtitle: '一套 API 统治所有。写一次，到处运行。',
      react: {
        name: 'React',
        description: '完整的 React 18+ 支持，包含 hooks 和并发特性',
      },
      vue: {
        name: 'Vue',
        description: 'Vue 3 组合式 API，完整的响应式系统',
      },
      svelte: {
        name: 'Svelte',
        description: 'SvelteKit 就绪，包含 stores 和响应式声明',
      },
      solid: {
        name: 'Solid',
        description: 'SolidJS signals 集成，实现最大性能',
      },
    },
  },
} as const;

export function getTranslation(lang: Language) {
  return translations[lang] || translations[defaultLanguage];
}
