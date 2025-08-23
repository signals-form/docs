import React from "react";
import { useMemo } from 'react';
import { Form, Input } from "antd"
import { Messages } from "@signals-form/core";
import { useMessages } from "@/hooks/useMessages";

interface Props {
  value: any
  type: "Group" | "Search" | "TextArea" | "Password" | "OTP";
  prefix?: string,
  label?: string
  messages: Messages;
  disabled?: boolean
  required?: boolean
  onChange: (value: any) => void
}

export default function FieldInput(props: Props) {
  const { onChange, value, messages, label, disabled, type, required, ...other } = props
  const { validateStatus, message } = useMessages(messages)
  const Node = useMemo(() => type ? Input[type] : Input, [type])
  return <Form.Item label={label} required={required} validateStatus={validateStatus} help={message}>
    <Node disabled={disabled} value={value} {...other}
      onChange={(e) => {
        let value = undefined
        if (typeof e === 'string') {
          value = e
        } else if (e?.target?.value) {
          value = e?.target?.value ?? e
        }
        onChange(value)
      }} />
  </Form.Item>
}
