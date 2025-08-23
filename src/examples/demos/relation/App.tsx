import {
	$bind,
	defineField,
	defineForm,
	defineReaction,
	defineRelation,
	type MacroProp,
} from "@signals-form/core";
import { FormControl } from "@signals-form/react";
import { zodResolver } from "@signals-form/resolvers";
import { signal } from "alien-deepsignals";
import type { ReactNode } from "react";
import { useEffect } from "react";
import Form from "@/components/Form";
import Input from "@/components/Input";

interface Props {
	label: string;
	type?: "Group" | "Search" | "TextArea" | "Password" | "OTP";
	prefix?: ReactNode;
	required?: boolean | MacroProp<boolean>;
	info?: string;
}

const s = signal(true);

const a = defineField<string, Props>({
	id: "a",
	component: Input,
	props: {
		label: "a",
		prefix: "👤",
		required: $bind(s),
	},
	events: {
		onChange(v) {
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
});

const b = defineField<string, Props>({
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


const r1 = defineRelation({
	field: c,
	dependencies: [a],
	update(handler, _values, as) {
		as?.addEventListener("abort", () => {
			console.log("abort", "aaaa");
		});
		return new Promise<number>((resolve) => {
			setTimeout(() => {
				handler.setState("value", Math.round(100 * Math.random()));
				resolve(Math.round(100 * Math.random()));
			}, 800);
		});
	},
});

const r2_1 = defineRelation({
	field: d,
	dependencies: [c],
	update(_field, _values, as) {
		as?.addEventListener("abort", () => {
			console.log("abort", "cccc");
		});
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(String(Math.floor(Math.random() * 100)));
			}, 1200);
		});
	},
});

const r2 = defineRelation({
	field: d,
	dependencies: [c],
	update(_field, _values, as) {
		as?.addEventListener("abort", () => {
			console.log("abort", "as");
		});
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(String(Math.floor(Math.random() * 100)));
			}, 1000);
		});
	},
});


const r4 = defineRelation({
	field: e,
	dependencies: [c, "d"],
	update: (field, [c, d]) => {
		const aValue = field.query("a")?.value;
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve([`a: ${aValue}, c: ${c}, d: ${d}`]);
			}, 2000);
		});
	},
});

const r5 = defineRelation({
	field: a,
	dependencies: [e],
	update: (field, eValue) => {
		// field.setState('label', eValue[0])
	},
});

const r7 = defineReaction({
	field: a,
	dependencies: [e],
	update: (field, eValue) => {
		// field.setState('info', eValue[0])
	},
});

const form = defineForm({
	id: "DefineRelationDemo",
	defaultValidatorEngine: "zod",
	fields: [a, b, c, d, e],
	resolvers: {
		validator: {
			zod: zodResolver,
		},
	},
	effects: {
		reactions: [r7],
		relations: [r1, r2, r2_1, r4, r5],
	},
});

export default function () {
	useEffect(() => {
		form.onUpdatesComplete(() => {
			console.log("onUpdatesComplete");
		});
	}, []);
	return (
		<Form form={form} style={{ width: 400 }}>
			<FormControl form={form}></FormControl>
		</Form>
	);
}
