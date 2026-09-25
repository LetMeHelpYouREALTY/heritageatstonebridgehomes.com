import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { NapBlock } from "~/components/nap/NapBlock";
import { business } from "~/config/business";
import { LocationHeroImage } from "~/components/media/LocationHeroImage";
import { PagePhotoRail } from "~/components/media/PagePhotoRail";

export const head: DocumentHead = {
  title: `Privacy Policy | ${business.name}`,
  meta: [
    {
      name: "description",
      content: `Privacy policy for ${business.name}. Contact ${business.telephoneDisplay}. ${business.addressDisplay}.`,
    },
  ],
};

export default component$(() => {
  return (
    <article class="max-w-3xl mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <section class="relative h-56 overflow-hidden rounded-lg mb-8">
        <LocationHeroImage />
        <div class="absolute inset-0 bg-slate-900/30" aria-hidden="true"></div>
      </section>

      <PagePhotoRail />
      <p class="text-gray-600 mb-8">
        {business.name} respects your privacy. This page describes how we handle contact
        information submitted through heritagestonebridge.com.
      </p>
      <NapBlock />
      <div class="prose prose-gray mt-8 space-y-4 text-gray-700">
        <p>
          Information you send through this website — including name, phone, email, and property
          questions — is used to respond to your real estate inquiry. We do not sell your contact
          information.
        </p>
        <p>
          Questions about this policy: call{" "}
          <a href={business.telephoneHref} class="text-blue-700 hover:underline">
            {business.telephoneDisplay}
          </a>{" "}
          or visit {business.addressDisplay}.
        </p>
      </div>
    </article>
  );
});
