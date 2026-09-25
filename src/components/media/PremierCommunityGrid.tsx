import { component$ } from "@builder.io/qwik";
import { COMMUNITY_GRIDS, type CommunityGridVariant } from "~/config/community-cards";
import { PhotoThumbCard } from "./PhotoThumbCard";

type PremierCommunityGridProps = {
  variant: CommunityGridVariant;
};

export const PremierCommunityGrid = component$<PremierCommunityGridProps>(({ variant }) => {
  const cards = COMMUNITY_GRIDS[variant];
  const columns =
    cards.length <= 3 ? "grid md:grid-cols-3 gap-8" : "grid md:grid-cols-2 lg:grid-cols-3 gap-8";

  return (
    <div class={columns}>
      {cards.map((card) => (
        <PhotoThumbCard
          key={card.heading}
          heading={card.heading}
          description={card.description}
          items={card.items}
          price={card.price}
          href={card.href}
          linkLabel={card.linkLabel}
        />
      ))}
    </div>
  );
});
