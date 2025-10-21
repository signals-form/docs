import * as Tabs from "@radix-ui/react-tabs";
import { DynamicLink } from "fumadocs-core/dynamic-link";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import {
  Check,
  Code,
  Globe,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Suspense } from "react";
import { SiReact, SiSolid, SiSvelte, SiVuedotjs } from "react-icons/si";
import { getTranslation, type Language } from "@/lib/i18n";

const MightySignalsLogo = () => (
  <div className="relative group">
    <div className="absolute -inset-1"></div>
    <div className="flex items-center space-x-4">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black">
        SIGNALS
      </h1>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
        FORM
      </h1>
    </div>
  </div>
);

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="group relative border border-gray-400 dark:border-gray-700 rounded-xl p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative">
      <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const FrameworkCard = ({
  name,
  description,
  icon,
}: {
  name: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="text-center group">
    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {name}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const resolvedParams = await params;
  const t = getTranslation(resolvedParams.lang || "en");

  const exampleCode = `import { defineField, defineForm } from '@signals-form/core'
import { z } from 'zod'

const username = defineField({
  id: 'username',
  component: Input,
  disabled: (handler) => {
    return handler.model.password === 'admin123';
  },
  validators: z.string().min(2, 'Name is required'),
})

const form = defineForm({
  id: 'login',
  fields: [username, password],
  resolvers: {
    validator: { zod: zodResolver }
  }
})`;

  const vueExampleCode = `import { defineField, defineForm } from '@signals-form/vue'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
})

export default {
  setup() {
    const form = useSignalForm({
      schema,
      defaultValues: {
        name: '',
        email: '',
      },
    })

    return { form }
  }
}`;

  const svelteExampleCode = `<script>
  import { defineField, defineForm } from '@signals-form/svelte'
  import { z } from 'zod'

  const schema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email'),
  })

  const form = signalForm({
    schema,
    defaultValues: {
      name: '',
      email: '',
    },
  })
</script>`;

  const solidExampleCode = `import { defineField, defineForm } from '@signals-form/solid'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
})

export function ContactForm() {
  const form = useSignalForm({
    schema,
    defaultValues: {
      name: '',
      email: '',
    },
  })

  return (
    <form onSubmit={form.handleSubmit}>
      <input {...form.register('name')} />
      <input {...form.register('email')} />
      <button type="submit">Submit</button>
    </form>
  )
}`;

  return (
    <main className="relative">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-red-600/10 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-red-400/5" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <MightySignalsLogo />
            </div>

            <h1 className="text-4xl sm:text-2xl lg:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                {t.hero.mainTitle}
              </span>
            </h1>

            <p className="text-base opacity-90 text-balance text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <DynamicLink href={`/${resolvedParams.lang}/docs/core`}>
                <button 
                  type="button"
                  className="cursor-pointer bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-2xl font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
                >
                  {t.hero.getStarted}
                </button>
              </DynamicLink>
              {/* <DynamicLink href="https://github.com/CCherry07">
                <button 
                  type="button"
                  className="cursor-pointer border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-3 rounded-2xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  {t.hero.starGithub}
                </button>
              </DynamicLink> */}
            </div>

            <div className="mt-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                {t.hero.revolutionaryBadge}
              </div>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title={t.features.fieldLinking.title}
                description={t.features.fieldLinking.description}
                icon={
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-200 dark:from-yellow-900 dark:to-orange-800 rounded-2xl flex items-center justify-center shadow-xl">
                    <Settings className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                  </div>
                }
              />

              <FeatureCard
                title={t.features.declarativeAPI.title}
                description={t.features.declarativeAPI.description}
                icon={
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900 dark:to-emerald-800 rounded-2xl flex items-center justify-center shadow-xl">
                    <Code className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                }
              />

              <FeatureCard
                title={t.features.flexibleValidators.title}
                description={t.features.flexibleValidators.description}
                icon={
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-200 dark:from-blue-900 dark:to-cyan-800 rounded-2xl flex items-center justify-center shadow-xl">
                    <ShieldCheck className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                }
              />

              <FeatureCard
                title={t.features.exceptionalPerformance.title}
                description={t.features.exceptionalPerformance.description}
                icon={
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-200 dark:from-purple-900 dark:to-violet-800 rounded-2xl flex items-center justify-center shadow-xl">
                    <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                }
              />

              <FeatureCard
                title={t.features.universalFramework.title}
                description={t.features.universalFramework.description}
                icon={
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-200 dark:from-red-900 dark:to-pink-800 rounded-2xl flex items-center justify-center shadow-xl">
                    <Globe className="w-8 h-8 text-red-600 dark:text-red-400" />
                  </div>
                }
              />

              <FeatureCard
                title={t.features.typeSafe.title}
                description={t.features.typeSafe.description}
                icon={
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-indigo-900 dark:to-blue-800 rounded-2xl flex items-center justify-center shadow-xl">
                    <Shield className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
                {t.codeSection.title.split(' ').slice(0, 3).join(' ')}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t.codeSection.title.split(' ').slice(3).join(' ')}
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                {t.codeSection.subtitle}
              </p>

              <ul className="space-y-4">
                {t.codeSection.features.map((feature, index) => (
                  <li
                    key={String(index)}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Tabs.Root defaultValue="react" className="space-y-4">
                <Tabs.List className="border-b border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-8">
                    <Tabs.Trigger
                      value="react"
                      className="border-b-2 border-transparent py-3 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <SiReact className="w-4 h-4" />
                        React
                      </div>
                    </Tabs.Trigger>
                    <Tabs.Trigger
                      value="vue"
                      className="border-b-2 border-transparent py-3 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 data-[state=active]:border-green-500 data-[state=active]:text-green-600 dark:data-[state=active]:text-green-400 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <SiVuedotjs className="w-4 h-4" />
                        Vue
                      </div>
                    </Tabs.Trigger>
                    <Tabs.Trigger
                      value="svelte"
                      className="border-b-2 border-transparent py-3 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 data-[state=active]:border-orange-500 data-[state=active]:text-orange-600 dark:data-[state=active]:text-orange-400 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <SiSvelte className="w-4 h-4" />
                        Svelte
                      </div>
                    </Tabs.Trigger>
                    <Tabs.Trigger
                      value="solid"
                      className="border-b-2 border-transparent py-3 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 data-[state=active]:border-purple-500 data-[state=active]:text-purple-600 dark:data-[state=active]:text-purple-400 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <SiSolid className="w-4 h-4" />
                        Solid
                      </div>
                    </Tabs.Trigger>
                  </div>
                </Tabs.List>

                <Tabs.Content
                  value="react"
                  className="mt-6 animate-in fade-in-50 duration-200"
                >
                  <div className="bg-gray-900 dark:bg-black rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                    <DynamicCodeBlock code={exampleCode} lang="tsx" />
                  </div>
                </Tabs.Content>

                <Tabs.Content
                  value="vue"
                  className="mt-6 animate-in fade-in-50 duration-200"
                >
                  <div className="bg-gray-900 dark:bg-black rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-green-400"></div>
                    <DynamicCodeBlock code={vueExampleCode} lang="ts" />
                  </div>
                </Tabs.Content>

                <Tabs.Content
                  value="svelte"
                  className="mt-6 animate-in fade-in-50 duration-200"
                >
                  <div className="bg-gray-900 dark:bg-black rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-orange-400"></div>
                    <DynamicCodeBlock code={svelteExampleCode} lang="ts" />
                  </div>
                </Tabs.Content>

                <Tabs.Content
                  value="solid"
                  className="mt-6 animate-in fade-in-50 duration-200"
                >
                  <div className="bg-gray-900 dark:bg-black rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400"></div>
                    <DynamicCodeBlock code={solidExampleCode} lang="tsx" />
                  </div>
                </Tabs.Content>
              </Tabs.Root>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Support Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              {t.frameworkSupport.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {t.frameworkSupport.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FrameworkCard
              name={t.frameworkSupport.react.name}
              description={t.frameworkSupport.react.description}
              icon={<SiReact className="w-10 h-10 text-blue-500" />}
            />
            <FrameworkCard
              name={t.frameworkSupport.vue.name}
              description={t.frameworkSupport.vue.description}
              icon={<SiVuedotjs className="w-10 h-10 text-green-500" />}
            />
            <FrameworkCard
              name={t.frameworkSupport.svelte.name}
              description={t.frameworkSupport.svelte.description}
              icon={<SiSvelte className="w-10 h-10 text-orange-500" />}
            />
            <FrameworkCard
              name={t.frameworkSupport.solid.name}
              description={t.frameworkSupport.solid.description}
              icon={<SiSolid className="w-10 h-10 text-blue-400" />}
            />
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-24 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-purple-50/30 dark:from-gray-900 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              {t.demo.tryItLive}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {t.demo.tryItLiveDesc}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-2xl">
            <Suspense
              fallback={
                <div className="w-full h-96 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce" />
                    <div
                      className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <span className="ml-3 text-gray-600 dark:text-gray-400 font-medium">
                      {t.demo.loadingDemo}
                    </span>
                  </div>
                </div>
              }
            >
              {/* <iframe
                className="w-full h-200 border-0"
                src="https://stackblitz.com/edit/signals-form-mmjycpjj?file=src%2FApp.tsx&terminal=dev"
                loading="lazy"
                title="Signals Form Live Demo"
              /> */}
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
