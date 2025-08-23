import { Form, InputNumber } from "antd"
import React from "react";
import { Messages } from "@signals-form/core";
import { useMessages } from "@/hooks/useMessages";
interface Props {
  messages: Messages;
  value: any
  onChange: any
  type: "number" | "text",
  label: string
  disabled: boolean
  required: boolean
  prefix: React.ReactNode
}
export default function (props: Props) {
  const { label, messages, required, disabled, ...other } = props;
  const { validateStatus, message } = useMessages(messages)
  return <Form.Item label={label} required={required} validateStatus={validateStatus} help={message}>
    <InputNumber
      disabled={disabled}
      style={{ width: "100%" }}
      {...other} />
  </Form.Item>
}
