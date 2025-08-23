import { defineField, defineForm } from "@signals-form/core";
import { FormControl } from "@signals-form/react";
import { zodResolver } from "@signals-form/resolvers";
import React, { type ReactNode } from "react";
import { z } from "zod";
import Form from "@/components/Form";
import Input from "@/components/Input";

interface Props {
	label?: string;
	type?: "Group" | "Search" | "TextArea" | "Password" | "OTP";
	prefix?: ReactNode;
	required?: boolean;
}

const username = defineField<string, Props>({
	id: "username",
	component: Input,
	disabled: (handler) => {
		return handler.model.password === "admin123";
	},
	props: {
		label: "用户名",
		prefix: "👤",
		required: true,
	},
	validators: z.string({ message: "请输入用户名!" }),
});

const password = defineField<string, Props>({
	id: "password",
	component: Input,
	props: { label: "密码", type: "Password", prefix: "🔒", required: true },
	validators: z
		.string({ message: "请输入密码!" })
		.min(6, { message: "密码长度不能小于6" }),
});

const form = defineForm({
	id: "login",
	defaultValidatorEngine: "zod",
	fields: [username, password],
	resolvers: {
		validator: {
			zod: zodResolver,
		},
	},
});

export default function () {
	return (
		<div className="flex flex-col h-screen w-full items-center justify-center bg-secondary p-8">
			<Form form={form} style={{ width: "400px" }}>
				<FormControl form={form} />
			</Form>
		</div>
	);
}
