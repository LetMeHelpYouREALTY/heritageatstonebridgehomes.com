import type { RequestHandler } from "@builder.io/qwik-city";

/** Permanent redirect to the canonical nearby amenities URL. */
export const onGet: RequestHandler = async ({ redirect }) => {
  throw redirect(301, "/nearby-amenities");
};
