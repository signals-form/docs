import React from 'react';
import { Checkbox, Form } from "antd"
import { useMessages } from '@/hooks/useMessages';
import { Messages } from '@signals-form/core';
interface Props {
  messages: Messages;
  value: any
  onChange: any
  label: string
  required: boolean
}
export default function (props: Props) {
  const { onChange, value, label, messages, required } = props
  const { validateStatus, message } = useMessages(messages)
  return <div>
    <Form.Item label={label} required={required} validateStatus={validateStatus} help={message}>
      <Checkbox checked={value} onChange={(e) => {
        onChange(e.target.checked)
      }} />
    </Form.Item>
  </div>
}
