import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { ReactNode } from "react";
import { baseOptions, linkItems } from "@/app/layout.config";

export default async function Layout({
	params,
	children,
}: {
	params: Promise<{ lang: string }>;
	children: ReactNode;
}) {
	const { lang } = await params;

	return <HomeLayout {...baseOptions({lang})} links={linkItems(lang)}>{children}</HomeLayout>;
}
