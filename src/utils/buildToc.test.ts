import { buildToc } from "./buildToc";
import { SectionItem } from "../types";

describe("buildToc", () => {
  it("should work with empty list", () => {
    expect(buildToc([])).toEqual([]);
  });

  it("should categorize by slug", () => {
    const items: SectionItem[] = [
      {
        id: "extensionality",
        frontmatter: {
          title: "Extensionality",
          sources: [],
        },
        slug: "book/chapters/01_sets/01_extensionality.mdx",
      },
    ];
    const result = buildToc(items);
    expect(result).toHaveLength(1);
    expect(result).toEqual([
      {
        index: 1,
        items: [items[0]],
        name: "sets",
      },
    ]);
  });

  it("should sort by filename prefix", () => {
    const items: SectionItem[] = [
      {
        id: "extensionality",
        frontmatter: {
          title: "Extensionality",
          sources: [],
        },
        slug: "book/chapters/02_sets/01_extensionality.mdx",
      },
      {
        id: "relations",
        frontmatter: {
          title: "Relations",
          sources: [],
        },
        slug: "book/chapters/01_relations/01_relations.mdx",
      },
    ];
    const result = buildToc(items);
    expect(result[0]).toEqual({
      index: 1,
      items: [items[1]],
      name: "relations",
    });
    expect(result[1]).toEqual({ index: 2, items: [items[0]], name: "sets" });
  });
});
