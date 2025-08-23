import { createDecision, defineField, defineForm } from "@signals-form/core";
import { FormControl } from "@signals-form/react"
import { zodResolver } from "@signals-form/resolvers";
import React, { type ReactNode } from "react";
import { z } from "zod";

import Form from "@/components/Form";
import Input from "@/components/Input";
import InputNumber from "@/components/InputNumber";

interface Props {
	label: string;
	type?: "Group" | "Search" | "TextArea" | "Password" | "OTP";
	prefix?: ReactNode;
	required?: boolean;
}
interface Model {
	username: string;
	password: string;
	age: number;
}

const boolConfig = {
	isTom: (model: Model) => model.username === "tom",
	isJerry: (model: Model) => model.username === "jerry",
	is18: (model: Model) => model.age >= 18,
};

const D = createDecision(boolConfig);

const username = defineField<string, Props>({
	id: "username",
	component: Input,
	props: {
		label: "用户名",
		prefix: "👤",
		required: true,
	},
	validators: z
		.string({ message: "用户名为必填项" })
		.min(2, "用户名长度必须在2-10")
		.max(10, "用户名长度必须在2-10")
		.regex(/^[a-zA-Z]+$/, { message: "用户名必须是英文" }),
});

const password = defineField<string, Props>({
	id: "password",
	component: Input,
	props: { label: "密码", type: "Password", prefix: "🔒", required: true },
	validators: z
		.string({ message: "密码必须包含大小写字母、数字和特殊字符" })
		.min(6, "密码长度必须在6-16")
		.max(16, "密码长度必须在6-16")
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,16}$/, {
			message: "密码必须包含大小写字母、数字和特殊字符",
		}),
});

const age = defineField<number, Props>({
	id: "age",
	component: InputNumber,
	hidden: D.use("isJerry"),
	props: {
		label: "年龄",
		prefix: "🔢",
	},
});

const form = defineForm({
	id: "boolless",
	defaultValidatorEngine: "zod",
	fields: [username, password, age],
	boolConfig,
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
				<FormControl form={form}/>
			</Form>
		</div>
	);
}
