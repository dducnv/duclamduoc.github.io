import Link from "next/link";

const blogPosts = [
  {
    id: "flutter-state-management",
    title: "State Management trong Flutter",
    description: "Tìm hiểu về các phương pháp quản lý state trong Flutter: Provider, Riverpod, Bloc...",
    date: "2024-02-15",
    image: "https://source.unsplash.com/600x400/?flutter,coding",
  },
  {
    id: "nextjs-ssr-vs-ssg",
    title: "SSR vs SSG trong Next.js",
    description: "So sánh hai phương pháp render trong Next.js: Server-side Rendering và Static Site Generation.",
    date: "2024-02-10",
    image: "https://source.unsplash.com/600x400/?nextjs,web",
  },
  {
    id: "typescript-tips",
    title: "Mẹo tối ưu TypeScript cho dự án lớn",
    description: "Cách sử dụng TypeScript hiệu quả để tránh lỗi runtime và cải thiện performance.",
    date: "2024-01-30",
    image: "https://source.unsplash.com/600x400/?typescript,developer",
  },
];

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <div className="relative max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <span>Dữ liệu kiểm thử</span>
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="block overflow-hidden rounded-lg shadow-lg border  transition transform hover:scale-105">
            
              <div className="p-4">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-800 text-sm">{post.date}</p>
                <p className="text-gray-700 mt-2">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
