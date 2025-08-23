import { fileURLToPath } from "url";
import { getComponents } from "../../components";
import { getDemoFiles } from "../../utils";

export default {
	...getDemoFiles(fileURLToPath(import.meta.url)),
	...getComponents(["Form", "Input"]),
};
