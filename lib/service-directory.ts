import { MARKETING_MENU_CATEGORIES } from "@/lib/marketing-menu";
import { TALENT_MENU_CATEGORIES } from "@/lib/talent-menu";
import { TECHNOLOGY_MENU_CATEGORIES } from "@/lib/technology-menu";

const menus = {
  technology: TECHNOLOGY_MENU_CATEGORIES,
  talent: TALENT_MENU_CATEGORIES,
  marketing: MARKETING_MENU_CATEGORIES,
};

export type ServiceDivision = keyof typeof menus;

export interface ServiceEntry {
  division: ServiceDivision;
  category: string;
  categorySlug: string;
  label: string;
  slug: string;
  path: string;
  image?: string;
}

export const serviceDirectory: ServiceEntry[] = (Object.keys(menus) as ServiceDivision[]).flatMap(
  (division) => menus[division].flatMap((category) => category.items
    // Both staffing menus lead to the same canonical page under Global Staffing.
    .filter((item) => item.label !== "Cross-Border Contract Staffing (US)")
    .map((item) => {
      const [, , , categorySlug, slug] = item.href.split("/");
      return {
        division,
        category: category.label,
        categorySlug,
        label: item.label,
        slug,
        path: item.href,
        image: item.image,
      };
    }))
);
