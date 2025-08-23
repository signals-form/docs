import { defineField, defineForm, defineReaction } from "@signals-form/core";
import { FormControl } from "@signals-form/react";
import { zodResolver } from "@signals-form/resolvers";
import { cloneDeep } from "@signals-form/shared";
import { createPersistPlugin, defineStore } from "@signals-form/store";
import { effect, signal } from "alien-deepsignals";
import type { ReactNode } from "react";
import { useEffect } from "react";
import Form from "@/components/Form";
import Input from "@/components/Input";

interface Props {
	label: string;
	type?: "Group" | "Search" | "TextArea" | "Password" | "OTP";
	prefix?: ReactNode;
	required?: boolean;
	info?: string;
}

createPersistPlugin();

const useCounter = defineStore(
	"counter",
	() => {
		const counter = signal(100);
		const name = signal("cherry");
		const ins = () => {
			counter.value += 1;
		};
		return {
			counter,
			ins,
			name,
		};
	},
	{
		persist: true,
	},
);

// biome-ignore lint/correctness/useHookAtTopLevel: <explanation>
const { counter } = useCounter();
effect(() => {
	console.log("change", counter.value);
});

const a = defineField<string, Props>({
	id: "a",
	component: Input,
	props: {
		label: "a",
		prefix: "👤",
		required: true,
	},
	events: {
		onChange(v) {
			const { counter, ins } = useCounter();
			console.log(counter.value);
			ins();

			this.setAsyncState("label", () => {
				return new Promise<string>((res) => {
					setTimeout(() => {
						res(v);
					}, 1000);
				});
			});
			this.setState("value", v);
		},
	},
	lifecycle: {
		onMounted() {
			this.setState("label", String(counter.value));
		},
	},
});

const b = defineField<string, any>({
	id: "b",
	component: Input,
	props: {
		label: "b",
		prefix: "🔒",
		required: true,
	},
});

const c = defineField<number, any>({
	id: "c",
	component: Input,
	props: {
		label: "c",
		prefix: "🎂",
		required: true,
	},
});

const d = defineField<string, any>({
	id: "d",
	component: Input,
	initialValue() {
		return "d";
	},
	props: {
		label: "d",
		prefix: "🏠",
		required: true,
	},
});

const e = defineField<any, any>({
	id: "e",
	component: Input,
	props: {
		label: "e",
		prefix: "🏠",
	},
	actions: {
		onDefaultValue() {
			return [];
		},
	},
});

const r1 = defineReaction({
	field: c,
	dependencies: [a],
	update(field, [aValue]) {
		setTimeout(() => {
			console.log(field);

			field.setState("value", Math.floor(Math.random() * 100));
		}, 500);
	},
});

const r3 = defineReaction({
	field: a,
	dependencies: [d],
	update(field) {
		const url = "https://mdn.github.io/dom-examples/abort-api/sintel.mp4";
		async function fetchVideo() {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const blob = await response.blob();
			const videoUrl = URL.createObjectURL(blob);
			console.log("videoUrl", videoUrl);
			return videoUrl;
		}
		fetchVideo()
			.then((videoUrl) => {
				setTimeout(() => {
					field.setState("label", videoUrl);
				}, 500);
			})
			.catch((error) => {
				if (error instanceof DOMException && error.name === "AbortError") {
					console.log("Fetch aborted:", error.message);
				} else {
					console.error("Fetch failed:", error);
				}
			});
	},
});

const r4 = defineReaction({
	field: e,
	dependencies: [c, d],
	update: (field, [cValue, dValue]) => {
		const aValue = field.query("a")?.value;
		setTimeout(() => {
			const d = [`a: ${aValue}, c: ${cValue}, d: ${dValue}`];
			field.setState("value", d);
		}, 2000);
	},
});

const r5 = defineReaction({
	field: a,
	dependencies: [e],
	update: (field, [eValue]) => {
		const cValue = field.query("c")?.value;
		console.log(cValue);
		field.setState("label", "aasdasdsad");
	},
	options: {
		immediate: true,
	},
});

const r6 = defineReaction([
	(handler) => {
		const { query } = handler;
		const aValue = query("a")?.value;
		const bValue = query("c")?.value;
		console.log("auto reaction", `a: ${aValue}, c: ${bValue}`);
	},
]);

const r7 = defineReaction([
	(handler) => {
		const { query } = handler;
		const aValue = query("a")?.props.prefix;
		console.log("auto reaction", `a label: ${aValue}`);
	},
]);

const form = defineForm({
	id: "DefineReactionDemo",
	defaultValidatorEngine: "zod",
	fields: [a, b, c, d, e],
	resolvers: {
		validator: {
			zod: zodResolver,
		},
	},
	effects: {
		reactions: [r1, r3, r4, r5, r6, r7],
		relations: [],
	},
});

export default function () {
	useEffect(() => {
		form.onUpdatesComplete(() => {
			console.log("onUpdatesComplete");
			console.log(cloneDeep(form.model));
		});
	}, []);
	console.log(form.relationControl);

	return (
		<div className="flex flex-col h-screen w-full items-center justify-center bg-secondary p-8">
			<Form form={form} style={{ width: "400px" }}>
				<FormControl form={form} />
			</Form>
		</div>
	);
}
