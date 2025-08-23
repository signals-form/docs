import { defineField, defineForm } from "@signals-form/core";
import { FormControl } from "@signals-form/react";
import { zodResolver } from "@signals-form/resolvers";
import React from "react";
import { z } from "zod";
import Cascader from "@/components/Cascader";
import Form from "@/components/Form";
import Input from "@/components/Input";
import InputNumber from "@/components/InputNumber";
import Select from "@/components/Select";

const email = defineField({
	id: "email",
	component: Input,
	props: {
		label: "邮箱",
		prefix: "📧",
		required: true,
	},
	validators: z
		.string({ message: "请输入邮箱!" })
		.email({ message: "请输入正确的邮箱格式!" }),
});

const nickname = defineField({
	id: "nickname",
	component: Input,
	props: {
		label: "昵称",
		prefix: "👤",
		required: true,
	},
	validators: z
		.string({ message: "请输入昵称!" })
		.min(2, { message: "昵称长度不能小于2" })
		.max(10, { message: "昵称长度不能大于10" }),
});

const password = defineField({
	id: "password",
	component: Input,
	props: {
		label: "密码",
		prefix: "🔒",
		required: true,
	},
	validators: z
		.string({ message: "请输入密码!" })
		.min(6, { message: "密码长度不能小于6" })
		.max(20, { message: "密码长度不能大于20" }),
	lifecycle: {
		onDestroy() {
			this.setState("value", "");
		},
	},
});

const phone = defineField({
	id: "phone",
	component: InputNumber,
	props: {
		label: "手机号",
		prefix: "📱",
		required: true,
	},
	validators: z
		.number({ message: "请输入手机号!" })
		.min(11, { message: "手机号长度必须大于11" }),
});

const donation = defineField({
	id: "donation",
	component: InputNumber,
	props: {
		label: "捐款金额",
		prefix: "💰",
		required: true,
	},
	validators: z
		.number({ message: "必须是一个数字" })
		.min(1, { message: "捐款金额必须大于1" }),
});

const residence = defineField({
	id: "residence",
	component: Cascader,
	props: {
		placeholder: "请选择地区",
		label: "地区",
		required: true,
		options: [
			{
				value: "zhejiang",
				label: "Zhejiang",
				children: [
					{
						value: "hangzhou",
						label: "Hangzhou",
						children: [
							{
								value: "xihu",
								label: "West Lake",
							},
						],
					},
				],
			},
			{
				value: "jiangsu",
				label: "Jiangsu",
				children: [
					{
						value: "nanjing",
						label: "Nanjing",
					},
				],
			},
		],
	},
	validators: z.array(z.string()).min(2, { message: "地区长度必须大于2" }),
	lifecycle: {
		onDestroy() {
			this.setState("value", []);
		},
	},
});

const paymentType = defineField({
	id: "paymentType",
	component: Select,
	props: {
		placeholder: "请选择支付类型",
		label: "支付类型",
		required: true,
		options: [
			{
				value: "1",
				label: "现金",
			},
			{
				value: "2",
				label: "支票",
			},
			{
				value: "3",
				label: "其他",
			},
		],
	},
	validators: z.string().min(1, { message: "支付类型长度必须大于1" }),
});

const form = defineForm({
	fields: [nickname, password, email, phone, residence, donation, paymentType],
	id: "edit",
	defaultValidatorEngine: "zod",
	resolvers: {
		validator: {
			zod: zodResolver,
		},
	},
});

form.updateModel({
	nickname: "张三",
	password: "123456",
	email: "123@163.com",
	phone: 12345678901,
	donation: 100,
	residence: ["zhejiang", "hangzhou", "xihu"],
	paymentType: "1",
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
