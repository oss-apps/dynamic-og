import Link from "next/link";
import { Button } from "@/components/Button";
import { Search, ExternalLink } from "lucide-react";

export default function Templates() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            OG Image Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Create beautiful, dynamic Open Graph images for your website. Choose from our collection of professionally designed templates.
          </p>
          
          {/* Search CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/search">
              <Button variant="solid" color="blue">
                <Search className="w-4 h-4 mr-2" />
                Search All Templates
              </Button>
            </Link>
            <Button variant="outline" href="https://github.com/oss-apps/dynamic-og" target="_blank">
              <ExternalLink className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Quick Template Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Simple Theme</h3>
            <p className="text-gray-600 text-sm mb-4">Clean and minimal design with title and website</p>
            <Link href="/og/simple">
              <Button variant="outline" className="w-full">
                Try Template
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation Theme</h3>
            <p className="text-gray-600 text-sm mb-4">Perfect for documentation pages with logo and metadata</p>
            <Link href="/og/docs">
              <Button variant="outline" className="w-full">
                Try Template
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog Theme</h3>
            <p className="text-gray-600 text-sm mb-4">Ideal for blog posts with title, author, and date</p>
            <Link href="/og/blog">
              <Button variant="outline" className="w-full">
                Try Template
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call to Action Theme</h3>
            <p className="text-gray-600 text-sm mb-4">Engaging design with primary and secondary action buttons</p>
            <Link href="/og/action">
              <Button variant="outline" className="w-full">
                Try Template
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile Theme</h3>
            <p className="text-gray-600 text-sm mb-4">Personal profile cards with image, name, and description</p>
            <Link href="/og/profile">
              <Button variant="outline" className="w-full">
                Try Template
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Split Image Theme</h3>
            <p className="text-gray-600 text-sm mb-4">Split layout with image and text content</p>
            <Link href="/og/split-img">
              <Button variant="outline" className="w-full">
                Try Template
              </Button>
            </Link>
          </div>
        </div>

        {/* More Templates CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Discover more templates and advanced features
          </p>
          <Link href="/search">
            <Button variant="solid" color="blue">
              <Search className="w-4 h-4 mr-2" />
              Explore All Templates
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
