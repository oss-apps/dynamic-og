"use client"

import { useState, useMemo } from "react";
import { Search, ExternalLink, Sun, Moon } from "lucide-react";
import { Input } from "@/components/ui/Inputs";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Header } from "@/components/Header";

// Import all template components
import { SimpleTemplateUI } from "@/app/og/simple/Simple";
import { DocsTemplateUI } from "@/app/og/docs/Docs";
import { BlogTemplateUI } from "@/app/og/blog/Blogs";
import { ActionTemplateUI } from "@/app/og/action/Action";
import { ProfileTemplateUI } from "@/app/og/profile/Profiles";
import { TemplateUI as SplitImageTemplateUI } from "@/app/og/split-img/SplitImage";
import { TemplateUI as SplitImage2TemplateUI } from "@/app/og/split-img-2/SplitImage2";
import { TemplateUI as ScreenshotTemplateUI } from "@/app/og/ss/Ss";

// Import template types
import { TSimpleTemplate } from "@/app/og/simple/page";
import { TDocsTemplate } from "@/app/og/docs/page";
import { TBlogsTemplate } from "@/app/og/blog/page";
import { TActionTemplate } from "@/app/og/action/page";
import { TProfileTemplate } from "@/app/og/profile/page";
import { Template as SplitImageTemplate } from "@/app/og/split-img/page";
import { Template as ScreenshotTemplate } from "@/app/og/ss/page";

interface TemplateData {
  id: string;
  name: string;
  description: string;
  route: string;
  tags: string[];
  category: string;
  component: React.ComponentType<any>;
  defaultValues: any;
}

const templates: TemplateData[] = [
  {
    id: "simple",
    name: "Simple",
    description: "Clean and minimal design with title and website",
    route: "/og/simple",
    tags: ["simple", "minimal", "clean", "title", "website", "basic"],
    category: "Basic",
    component: SimpleTemplateUI,
    defaultValues: {
      title: "Every moment is a fresh beginning.",
      website: "blogs.gratitude.com",
      dark: false
    } as TSimpleTemplate
  },
  {
    id: "docs",
    name: "Documentation",
    description: "Perfect for documentation pages with logo and metadata",
    route: "/og/docs",
    tags: ["docs", "documentation", "api", "guide", "reference", "technical"],
    category: "Technical",
    component: DocsTemplateUI,
    defaultValues: {
      logo: "https://dynamicog.com/fillers/stripe-logo.png",
      title: "Find a guide to integrate Stripe's payments APIs | Stripe",
      sub: "Payments infrastructure for the internet",
      name: "Stripe",
      website: "stripe.com",
      dark: false
    } as TDocsTemplate
  },
  {
    id: "blog",
    name: "Blog",
    description: "Ideal for blog posts with title, author, and date",
    route: "/og/blog",
    tags: ["blog", "article", "post", "content", "author", "date", "publishing"],
    category: "Content",
    component: BlogTemplateUI,
    defaultValues: {
      title: "10 Wildly-Successful Blogs That Earn Outlandish Incomes",
      logo: "https://dynamicog.com/fillers/forbes-logo.jpeg",
      name: "Forbes",
      date: "Aug 15, 2023",
      dark: false
    } as TBlogsTemplate
  },
  {
    id: "action",
    name: "Call to Action",
    description: "Engaging design with primary and secondary action buttons",
    route: "/og/action",
    tags: ["cta", "action", "button", "engagement", "conversion", "marketing"],
    category: "Marketing",
    component: ActionTemplateUI,
    defaultValues: {
      heading: "Scheduling infrastructure for everyone.",
      logo: "https://dynamicog.com/fillers/cal-logo.png",
      subHeading: "Focus on meeting, not making meetings.",
      primary: "Claim Username",
      secondary: "View Pricing",
      dark: false
    } as TActionTemplate
  },
  {
    id: "profile",
    name: "Profile",
    description: "Personal profile cards with image, name, and description",
    route: "/og/profile",
    tags: ["profile", "personal", "bio", "about", "social", "identity"],
    category: "Personal",
    component: ProfileTemplateUI,
    defaultValues: {
      name: "Elon Musk",
      logo: "http://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711152000&semt=ais",
      image: "https://dynamicog.com/fillers/elon-musk-profile.jpeg",
      role: "Tesla | SpaceX | X",
      website: "X Formerly Twitter",
      desc: "Elon Reeve Musk is a businessman and investor. He is the founder, chairman, CEO, and CTO of SpaceX",
      dark: false
    } as TProfileTemplate
  },
  {
    id: "split-img",
    name: "Split Image",
    description: "Split layout with image and text content",
    route: "/og/split-img",
    tags: ["split", "image", "layout", "visual", "media", "content"],
    category: "Visual",
    component: SplitImageTemplateUI,
    defaultValues: {
      title: "Every moment ",
      sub: "is a fresh beginning. So enjoy your freshly cooked italian food!",
      website: "Food Blogs",
      dark: false,
      logo: "https://dynamicog.com/fillers/cal-logo.png",
      image: "https://dynamicog.com/fillers/stock-kitchen.jpeg"
    } as SplitImageTemplate
  },
  {
    id: "split-img-2",
    name: "L-Split Image",
    description: "Alternative split layout with different image positioning",
    route: "/og/split-img-2",
    tags: ["split", "image", "layout", "visual", "media", "content", "alternative"],
    category: "Visual",
    component: SplitImage2TemplateUI,
    defaultValues: {
      title: "Every moment ",
      sub: "is a fresh beginning. So enjoy your freshly cooked italian food!",
      website: "Food Blogs",
      dark: false,
      logo: "https://dynamicog.com/fillers/cal-logo.png",
      image: "https://dynamicog.com/fillers/stock-kitchen.jpeg"
    } as SplitImageTemplate
  },
  {
    id: "screenshot",
    name: "Screenshot",
    description: "Display website screenshots with domain information",
    route: "/og/ss",
    tags: ["screenshot", "website", "preview", "demo", "showcase", "photo", "image"],
    category: "Showcase",
    component: ScreenshotTemplateUI,
    defaultValues: {
      domain: "dynamicog.com/og",
      param: "/screenshot",
      image: `${process.env.NEXT_PUBLIC_DOMAIN}/fillers/stripe-og.jpeg`,
      dark: false
    } as ScreenshotTemplate
  }
];

const categories = ["All", "Basic", "Technical", "Content", "Marketing", "Personal", "Visual", "Showcase"];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const filteredTemplates = useMemo(() => {
    return templates.filter(template => {
      const matchesSearch = searchQuery === "" || 
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Update template default values with current theme
  const getTemplateWithTheme = (template: TemplateData) => ({
    ...template.defaultValues,
    dark: isDarkTheme
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Template Search
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and explore all available OG image templates. Search by name, description, or tags to find the perfect template for your needs.
          </p>
        </div>

        {/* Search Bar and Theme Toggle */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 rounded-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search templates by name, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg rounded-full"
              />
            </div>
            
            {/* Theme Toggle */}
            <Button
              variant="outline"
              onClick={() => setIsDarkTheme(!isDarkTheme)}
              className="px-4 py-3 flex items-center gap-2"
            >
              {isDarkTheme ? (
                <>
                  <Sun className="w-5 h-5" />
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-fuchsia-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 b lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => {
            const TemplateComponent = template.component;
            return (
              <Link
                key={template.id}
                href={template.route}
                target="_blank"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden cursor-pointer"
              >
                {/* Preview Image */}
                <div className="relative aspect-[1.91/1] bg-gray-100 overflow-hidden">
                  <div className="w-full h-full">
                    <TemplateComponent t={getTemplateWithTheme(template)} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {template.name}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {template.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {template.description}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-1 mb-4 overflow-x-auto scrollbar-hide">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 whitespace-nowrap flex-shrink-0"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No templates found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 