'use client';
import * as Primitive from 'fumadocs-ui/components/card';
import { type ComponentProps, useMemo } from 'react';
import { useParams } from 'next/navigation';

export const Cards = Primitive.Cards;
export function Card({
  href,
  ...props
}: ComponentProps<typeof Primitive.Card>) {
  const { lang } = useParams();
  const processedHref = useMemo(
    () => href?.replaceAll('[lang]', lang as string),
    [href, lang],
  );

  return <Primitive.Card href={processedHref} {...props} />;
}
