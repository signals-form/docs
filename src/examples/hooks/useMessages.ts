import { isMultipleMessages, type Messages } from "@signals-form/core";
import { useMemo } from "react";

export function useMessages(messages: Messages) {
  const validateStatus = useMemo(() => {
    if (messages?.error.length) {
      return "error";
    }
    if (messages?.warning.length) {
      return "warning";
    }
    if (messages?.info.length) {
      return "success";
    }
    return undefined;
  }, [messages]);
  const message = useMemo(() => {
    const type = validateStatus === "success" ? "info" : validateStatus;
    if (type) {
      return messages[type]
        .map((item) => {
          if (isMultipleMessages(item)) {
            return Object.values(item.messages)
              .map((msg) => msg.message)
              .join(",");
          }
          return item.message;
        })
        .join(",");
    }
  }, [messages]);

  return {
    validateStatus,
    message,
  } as const;
}
