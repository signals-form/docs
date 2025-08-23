import { Sandpack } from "@codesandbox/sandpack-react";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultComponents from "fumadocs-ui/mdx";
import {
	CpuIcon,
	Database,
	File,
	Files,
	Folder,
	PanelsTopLeft,
	Terminal,
} from "lucide-react";
import type { MDXComponents } from "mdx/types";
import { Preview } from "./components/preview";
import { Mermaid } from "./components/mermaid"
export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultComponents,
		Accordions,
		CpuIcon,
		Accordion,
		Tab,
		Files,
		Folder,
		Database,
		Terminal,
		PanelsTopLeft,
		File,
		Tabs,
		Sandpack,
		Preview,
		Mermaid,
		...components,
	};
}
