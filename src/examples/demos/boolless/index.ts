import { fileURLToPath } from "url";

import { getDemoFiles } from "../../utils";
import { getComponents } from "../../components";

export default {
  ...getDemoFiles(fileURLToPath(import.meta.url)),
  ...getComponents(["Form", "Input", "InputNumber"]),
}
