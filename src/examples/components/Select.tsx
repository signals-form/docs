import { Messages } from "@signals-form/core";
import { Form, Select } from "antd"
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
  const { label, value, onChange, options, required, messages } = props;
  const { validateStatus, message } = useMessages(messages)
  return (
    <Form.Item label={label} required={required} validateStatus={validateStatus} help={message}>
      <Select
        value={value}
        onChange={onChange}
      >
        {options.map((option: any) => (
          <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
        ))}
      </Select>
    </Form.Item>
  )
}
