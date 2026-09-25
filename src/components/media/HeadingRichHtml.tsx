import { component$ } from "@builder.io/qwik";
import { decorateHeadingsWithImages } from "~/config/images";

type HeadingRichHtmlProps = {
  html: string;
};

export const HeadingRichHtml = component$<HeadingRichHtmlProps>(({ html }) => {
  return <div dangerouslySetInnerHTML={decorateHeadingsWithImages(html)} />;
});
