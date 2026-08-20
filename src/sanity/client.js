import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

if (!projectId || !dataset) {
	throw new Error(
		"Missing VITE_SANITY_PROJECT_ID or VITE_SANITY_DATASET environment variable.",
	);
}

export const client = createClient({
	projectId,
	dataset,
	apiVersion: "2026-08-15",
	useCdn: true,
	perspective: "published",
});
