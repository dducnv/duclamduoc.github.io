import { TracingBeam } from "@/components";
import Image from "next/image";
import { format } from "date-fns";

interface Author {
    login: string;
    name: string;
    avatar?: string;
    bio?: string;
}

interface BlogPostDetail {
    id: string;
    title: string;
    author: Author;
    publishedAt: string;
    lastModified: string;
    readingTime: string;
    category: string;
    tags: string[];
    content: {
        type: 'paragraph' | 'image' | 'code' | 'quote';
        content: string;
    }[];
    image: {
        url: string;
        alt: string;
        caption?: string;
    };
}

const blogPost: BlogPostDetail = {
    id: "nature-photography-2025",
    title: "The Art of Nature Photography: A Complete Guide",
    author: {
        login: "dducnv",
        name: "Duc Nguyen",
        bio: "Photography enthusiast & nature lover"
    },
    publishedAt: "2025-02-16T11:34:28Z",
    lastModified: "2025-02-16T11:34:28Z",
    readingTime: "8 min read",
    category: "Photography",
    tags: ["nature", "photography", "tutorial", "landscape"],
    image: {
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        alt: "Mountain landscape at sunset",
        caption: "Spectacular mountain vista captured during golden hour"
    },
    content: [
        {
            type: "paragraph",
            content: "Nature photography is more than just pointing your camera at a beautiful scene. It's about capturing the essence of the moment, the interplay of light and shadow, and the raw beauty of the natural world."
        },
        {
            type: "quote",
            content: "The best camera is the one you have with you when nature presents its finest moments."
        },
        {
            type: "paragraph",
            content: "In this comprehensive guide, we'll explore the fundamental techniques that will help you capture stunning nature photographs. From understanding your camera settings to mastering composition, you'll learn everything you need to know to take your nature photography to the next level."
        }
    ]
};

export default function BlogPostDetail() {
    return (
        <div className="min-h-screen bg-white">
            <TracingBeam>
                <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-8">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                            <span className="px-3 py-1 bg-gray-100 rounded-full">{blogPost.category}</span>
                            <span>•</span>
                            <span>{blogPost.readingTime}</span>
                        </div>
                        
                        <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                            {blogPost.title}
                        </h1>

                        <div className="flex items-center space-x-4">
                       
                            <div>
                                <div className="flex items-center space-x-2">
                                    <p className="font-medium text-gray-900">{blogPost.author.name}</p>
                                    <span className="text-gray-400">•</span>
                                    <p className="text-gray-500">@{blogPost.author.login}</p>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-500">
                                    <time dateTime={blogPost.publishedAt}>
                                        {format(new Date(blogPost.publishedAt), 'MMMM d, yyyy')}
                                    </time>
                                    <span>•</span>
                                    <span>Last updated: {format(new Date(blogPost.lastModified), 'MMMM d, yyyy')}</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative aspect-[16/9] mb-12">
                        <Image
                            src={blogPost.image.url}
                            alt={blogPost.image.alt}
                            fill
                            className="rounded-xl object-cover"
                            priority
                        />
                        {blogPost.image.caption && (
                            <p className="text-sm text-gray-500 mt-2 text-center">
                                {blogPost.image.caption}
                            </p>
                        )}
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        {blogPost.content.map((section, index) => {
                            switch (section.type) {
                                case 'paragraph':
                                    return <p key={index}>{section.content}</p>;
                                case 'quote':
                                    return (
                                        <blockquote key={index} className="border-l-4 border-gray-200 pl-4 italic">
                                            {section.content}
                                        </blockquote>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                            {blogPost.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Share and Engagement */}
                    <div className="mt-8 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span>Like</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                                <span>Share</span>
                            </button>
                        </div>
                        <button className="text-gray-500 hover:text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </button>
                    </div>
                </article>
            </TracingBeam>
        </div>
    );
}