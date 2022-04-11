import { ChapterItem, SectionItem } from "../types";

type TocObject = Record<string, ChapterItem>;

export const buildToc = (items: SectionItem[]): ChapterItem[] => {
  const content: TocObject = items.reduce(reducer, {});
  return Object.values(content).sort(sorter);
};

const reducer = (result: TocObject, item: SectionItem): TocObject => {
  const [chapter] = item.slug.split("/").slice(-2);
  const [index, name] = chapter.split("_");
  const key = name.replace(/-/g, " ");
  if (!result[key]) {
    result[key] = {
      index: Number.parseInt(index),
      items: [],
      name: key,
    };
  }
  result[key].items.push(item);

  return result;
};

const sorter = (a: ChapterItem, b: ChapterItem): number => {
  return a.index < b.index ? -1 : 1;
};
