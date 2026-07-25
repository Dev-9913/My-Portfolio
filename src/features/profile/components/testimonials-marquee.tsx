"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorBio,
  TestimonialAuthorName,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote,
} from "@/registry/testimonials-marquee";
import { TESTIMONIALS_1 } from "@/features/profile/data/testimonials";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function TestimonialsMarquee() {
  return (
    <Panel id="highlights">
      <PanelHeader>
        <PanelTitle>Project Highlights</PanelTitle>
      </PanelHeader>

      <div className="w-full bg-background py-4">
        <Marquee className="[&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch!">
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />

          <MarqueeContent>
            {TESTIMONIALS_1.map((item) => (
              <MarqueeItem
                key={item.url}
                className="mx-2 h-full w-xs rounded-xl border"
              >
                <Testimonial>
                  <TestimonialQuote>
                    <p>{item.quote}</p>
                  </TestimonialQuote>

                  <TestimonialAuthor>
                    <TestimonialAvatar>
                      <TestimonialAvatarImg src={item.authorAvatar} />
                      <TestimonialAvatarRing />
                    </TestimonialAvatar>

                    <TestimonialAuthorName href={item.url}>
                      {item.authorName}
                    </TestimonialAuthorName>

                    <TestimonialAuthorBio>
                      {item.authorBio}
                    </TestimonialAuthorBio>
                  </TestimonialAuthor>
                </Testimonial>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </Panel>
  );
}
