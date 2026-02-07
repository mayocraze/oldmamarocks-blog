/**
 * Blog categories and their hashtags.
 * Add tags (without #) to article frontmatter to categorize.
 * Tag "AITech" maps to #AI/Tech display.
 */

export const CATEGORIES = [
	{
		name: 'Motherhood & Parenting',
		tags: ['Motherhood', 'OldMama', 'OldParenting', 'OldMamaRocks', 'ParentingIsFun'],
	},
	{
		name: 'Read & Books',
		tags: ['Illustrations', 'ReadTogether', 'BooksToShare'],
	},
	{
		name: 'Emotions & Philosophy',
		tags: ['Philosophy', 'Emotions', 'ReflectionsOnLife', 'ModernLove', 'Relationships'],
	},
	{
		name: 'Arts, Crafts & Eats',
		tags: ['Art', 'DIY', 'Handicrafts', 'Cooking', 'Music', 'Recipes'],
	},
	{
		name: 'Money / Investment / Technology',
		tags: ['Investing', 'Macro', 'Money', 'AITech'], // Use AITech for #AI/Tech in frontmatter
	},
	{
		name: 'Others',
		tags: ['RandomThoughts', 'Observations'],
	},
] as const;

/** Map tag (lowercase for matching) to category slug */
export function getTagToCategoryMap(): Map<string, string> {
	const map = new Map<string, string>();
	CATEGORIES.forEach((cat, idx) => {
		const slug = cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
		cat.tags.forEach((tag) => map.set(tag.toLowerCase(), slug));
	});
	return map;
}

/** Get category slug from category name */
export function getCategorySlug(name: string): string {
	return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
}
