import { Button, Form } from "antd";
import type React from "react";

interface Props {
	children: React.ReactNode;
	form: any;
	style?: React.CSSProperties;
}

export default function (props: Props) {
	const { children, style, form } = props;
	return (
		<div>
			<Form style={style}>{children}</Form>
			<Button
				style={{ width: "400px" }}
				type="primary"
				onClick={async () => {
					const model = await form.submit();
					console.log(model);
				}}
			>
				登录
			</Button>
		</div>
	);
}
