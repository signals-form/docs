import { readFileSync } from "fs";
import { AppWindowIcon, CodeIcon, TerminalIcon } from "lucide-react";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { cn } from "@/utils";
import examples from "../../examples";
import {
	SandboxCodeEditor,
	SandboxConsole,
	SandboxFileExplorer,
	SandboxLayout,
	SandboxPreview,
	SandboxTabs,
	SandboxTabsContent,
	SandboxTabsList,
	SandboxTabsTrigger,
} from "../sandbox";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "../ui/resizable";
import { PreviewProvider } from "./provider";
import { tsconfig } from "./tsconfig";
import { V0Button } from "./v0-button";

type PreviewProps = {
	name: string;
	code: string;
	className: string;
	dependencies?: Record<string, string>;
};

const demosCache: Record<
	string,
	{
		files: Record<string, string>;
		dependencies: Record<string, string>;
		devDependencies: Record<string, string>;
	}
> = {};
let signalsFormSourceCache: Record<string, string> | string;

// export const getSignalsFormSource = async () => {
// 	if (signalsFormSourceCache) {
// 		return signalsFormSourceCache;
// 	}
// 	return (signalsFormSourceCache = {
// 		"/signals-form/core.js": readFileSync(
// 			resolve(
// 				fileURLToPath(import.meta.url),
// 				"../../../../../packages/core/dist/index.js",
// 			),
// 			"utf-8",
// 		),
// 		"/signals-form/shared.js": readFileSync(
// 			resolve(
// 				fileURLToPath(import.meta.url),
// 				"../../../../../packages/shared/dist/index.js",
// 			),
// 			"utf-8",
// 		),
// 		"/signals-form/path.js": readFileSync(
// 			resolve(
// 				fileURLToPath(import.meta.url),
// 				"../../../../../packages/path/dist/index.js",
// 			),
// 			"utf-8",
// 		),
// 		"/signals-form/react.js": readFileSync(
// 			resolve(
// 				fileURLToPath(import.meta.url),
// 				"../../../../../packages/react/dist/index.js",
// 			),
// 			"utf-8",
// 		),
// 		"/signals-form/resolvers.js": readFileSync(
// 			resolve(
// 				fileURLToPath(import.meta.url),
// 				"../../../../../packages/resolvers/dist/index.js",
// 			),
// 			"utf-8",
// 		),
// 	});
// };

const parseExample = (name: string) => {
	if (demosCache[name]) {
		return demosCache[name];
	}
	// @ts-ignore
	const example = examples[name];
	if (!example) {
		throw new Error(`Example ${name} not found`);
	}
	const files: Record<string, string> = {};
	const dependencies: Record<string, string> = {};
	const devDependencies: Record<string, string> = {};

	Object.assign(files, example);

	demosCache[name] = {
		files,
		dependencies,
		devDependencies,
	};

	return {
		files,
		dependencies,
		devDependencies,
	};
};

export const Preview = async ({
	name,
	dependencies: demoDependencies,
	className,
}: PreviewProps) => {
	const { files, dependencies, devDependencies } = parseExample(name);
	Object.assign(files, {
		"/tsconfig.json": tsconfig,
		// ...(await getSignalsFormSource()),
	});

	return (
		<PreviewProvider
			template="react-ts"
			options={{
				externalResources: [
					"https://cdn.tailwindcss.com",
					"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
				],
			}}
			customSetup={{
				dependencies: {
					clsx: "latest",
					"tailwind-merge": "latest",
					"class-variance-authority": "latest",
					antd: "latest",
					// Tailwind dependencies
					tailwindcss: "latest",
					"tailwindcss-animate": "latest",
					// Common utilities
					"date-fns": "latest",
					"alien-deepsignals": "0.1.0",
					"alien-signals": "^1.0.13",
					"es-toolkit": "latest",
					"valibot": "latest",
					zod: "latest",
					uuid: "latest",
					...dependencies,
					...demoDependencies,
				},
				devDependencies: {
					autoprefixer: "latest",
					postcss: "latest",
					...devDependencies,
				},
			}}
			files={files}
			className={cn("not-prose h-[30rem]", className)}
		>
			<SandboxLayout>
				<SandboxTabs defaultValue="preview">
					<SandboxTabsList>
						<SandboxTabsTrigger value="code">
							<CodeIcon size={14} />
							Code
						</SandboxTabsTrigger>
						<SandboxTabsTrigger value="preview">
							<AppWindowIcon size={14} />
							Preview
						</SandboxTabsTrigger>
						<SandboxTabsTrigger value="console">
							<TerminalIcon size={14} />
							Console
						</SandboxTabsTrigger>
					</SandboxTabsList>
					<V0Button name={name} />
					<SandboxTabsContent value="code" className="overflow-hidden">
						<ResizablePanelGroup
							direction="horizontal"
							className="overflow-hidden"
						>
							<ResizablePanel
								className="!overflow-y-auto"
								defaultSize={25}
								minSize={20}
								maxSize={40}
							>
								<SandboxFileExplorer />
							</ResizablePanel>
							<ResizableHandle withHandle />
							<ResizablePanel className="!overflow-y-auto">
								<SandboxCodeEditor />
							</ResizablePanel>
						</ResizablePanelGroup>
					</SandboxTabsContent>
					<SandboxTabsContent value="preview">
						<SandboxPreview />
					</SandboxTabsContent>
					<SandboxTabsContent value="console">
						<SandboxConsole />
					</SandboxTabsContent>
				</SandboxTabs>
			</SandboxLayout>
		</PreviewProvider>
	);
};
