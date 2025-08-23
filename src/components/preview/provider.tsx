"use client";

import { useTheme } from "next-themes";
import type { ComponentProps } from "react";
import { SandboxProvider } from "../sandbox";
type PreviewProviderProps = Omit<
	ComponentProps<typeof SandboxProvider>,
	"theme"
>;

export const PreviewProvider = ({
	options,
	...props
}: PreviewProviderProps) => {
	const { resolvedTheme } = useTheme();

	if (typeof window === "undefined") {
		return null;
	}

	return (
		<SandboxProvider
			theme={resolvedTheme === "dark" ? "dark" : "light"}
			{...props}
			options={{
				...options,
				externalResources: [
					...(options?.externalResources || []),
					new URL("/preview/shadcn.css", window.location.origin).toString(),
					new URL(
						"/preview/tailwind-config.js",
						window.location.origin,
					).toString(),
				],
			}}
		/>
	);
};
