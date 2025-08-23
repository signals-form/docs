import { Messages } from "@signals-form/core";
import { Cascader, Form } from "antd"
import React from "react";
import { useMessages } from "@/hooks/useMessages";

interface Props {
  value: any
  type: "Group" | "Search" | "TextArea" | "Password" | "OTP";
  prefix?: string,
  label?: string
  messages: Messages;
  disabled?: boolean
  required?: boolean
  options: any[]
  onChange: (value: any) => void
}

export default function (props: Props) {
  const { label, value, messages, onChange, options, required } = props;
  const { validateStatus, message } = useMessages(messages)
  return (
    <Form.Item label={label} required={required} validateStatus={validateStatus} help={message}>
      <Cascader
        value={value}
        onChange={onChange}
        options={options}
      />
    </Form.Item>
  )
}
