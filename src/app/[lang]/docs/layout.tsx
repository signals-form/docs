/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type React from "react";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";

interface LogoProps {
	size?: "small" | "medium" | "large";
	showText?: boolean;
}

interface LogoProps {
	size?: "small" | "medium" | "large";
	showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({
	size = "medium",
	showText = true,
}) => {
	const dimensions = {
		small: { logo: 32, font: "text-lg", spacing: "gap-2" },
		medium: { logo: 40, font: "text-xl", spacing: "gap-3" },
		large: { logo: 48, font: "text-2xl", spacing: "gap-3" },
	};

	const { logo, font, spacing } = dimensions[size];

	return (
		<div className={`flex items-center ${spacing}`}>
			<div className="relative">
				<div
					className="rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg"
					style={{ width: logo, height: logo }}
				>
					<svg
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-full h-full p-2"
					>
						<path
							d="M20 50 L30 50 L40 30 L60 70 L70 50 L80 50"
							stroke="white"
							strokeWidth="8"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M20 50 L30 50 L40 30 L60 70 L70 50 L80 50"
							stroke="rgba(255,255,255,0.4)"
							strokeWidth="12"
							strokeLinecap="round"
							strokeLinejoin="round"
							style={{ filter: "blur(4px)" }}
						/>
					</svg>
				</div>

				<div
					className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 rounded-full"
					style={{
						background:
							"linear-gradient(to right, rgba(56, 189, 248, 0.6), rgba(45, 212, 191, 0.6))",
						filter: "blur(2px)",
					}}
				/>
			</div>

			{showText && (
				<div
					className={`font-semibold ${font} bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 tracking-tight`}
				>
					<span className="font-bold">Signals</span>
					<span>Form</span>
				</div>
			)}
		</div>
	);
};

export default async function Layout({
	params,
	children,
}: {
	params: Promise<{ lang: string }>;
	children: ReactNode;
}) {
	const { lang } = await params;
	const options = baseOptions();
	return (
		<DocsLayout
			{...options}
			tree={source.pageTree[lang]}
			nav={{
				...options.nav,
				title: (
					<>
						<Logo size="small" />
					</>
				),
			}}
			sidebar={{
				tabs: {
					transform(option, node) {
						const meta = source.getNodeMeta(node);
						if (!meta || !node.icon) return option;

						const color = `var(--${meta.path.split('/')[0]}-color, var(--color-fd-foreground))`;

						return {
							...option,
							icon: (
								<div
									className="[&_svg]:size-full rounded-lg size-full text-(--tab-color) max-md:bg-(--tab-color)/10 max-md:border max-md:p-1.5"
									style={
										{
											'--tab-color': color,
										} as object
									}
								>
									{node.icon}
								</div>
							),
						};
					},
				},
			}}>
			{children}
		</DocsLayout>
	);
}
