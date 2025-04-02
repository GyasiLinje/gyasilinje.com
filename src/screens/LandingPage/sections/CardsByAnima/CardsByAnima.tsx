import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const CardsByAnima = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      quote: "A terrific piece of praise",
      avatar: "/avatar-2.svg",
      name: "Name",
      description: "Description",
    },
    {
      quote: "A fantastic bit of feedback",
      avatar: "/avatar-1.svg",
      name: "Name",
      description: "Description",
    },
    {
      quote: "A genuinely glowing review",
      avatar: "/avatar.svg",
      name: "Name",
      description: "Description",
    },
  ];

  return (
    <section className="flex w-full items-start gap-8 py-16">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="flex flex-col items-start gap-12 p-8 flex-1"
        >
          <CardContent className="p-0 w-full">
            <blockquote className="self-stretch [font-family:'Inter',Helvetica] font-medium text-black text-2xl tracking-[0] leading-9">
              &quot;{testimonial.quote}&quot;
            </blockquote>

            <div className="mt-12 inline-flex items-center gap-4">
              <Avatar className="w-[45px] h-[45px]">
                <AvatarImage
                  src={testimonial.avatar}
                  alt="Avatar"
                  className="object-cover"
                />
              </Avatar>

              <div className="inline-flex flex-col items-start gap-0.5">
                <div className="font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] whitespace-nowrap [font-style:var(--small-text-font-style)]">
                  {testimonial.name}
                </div>
                <div className="font-small-text font-[number:var(--small-text-font-weight)] text-[#828282] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] whitespace-nowrap [font-style:var(--small-text-font-style)]">
                  {testimonial.description}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
