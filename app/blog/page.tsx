"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconMap,
  IconBuildingSkyscraper,
  IconMountain,
  IconStar,
  IconBulb,
  IconRocket,
  IconHeart,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

// Types for our blog posts
interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: "travel" | "success";
  imageUrl: string;
  icon: React.ReactNode;
  featured?: boolean;
  readTime?: string;
  author?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"all" | "travel" | "success">("all");

  // Function to fetch additional posts from an API
  const fetchMorePosts = async () => {
    setLoading(true);
    try {
      // Example API call - replace with your preferred open API
      // This uses JSONPlaceholder as a demo
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
      const data = await response.json();
      
      // Transform the API data to match our BlogPost structure
      const newPosts: BlogPost[] = data.map((item: any, index: number) => ({
        id: posts.length + index + 1,
        title: item.title.charAt(0).toUpperCase() + item.title.slice(1),
        description: item.body.substring(0, 100) + "...",
        category: index % 2 === 0 ? "travel" : "success",
        imageUrl: `https://picsum.photos/600/400?random=${posts.length + index + 1}`,
        icon: index % 2 === 0 
          ? <IconMap className="h-4 w-4 text-blue-500" />
          : <IconRocket className="h-4 w-4 text-purple-500" />,
        readTime: `${Math.floor(Math.random() * 10) + 3} min read`,
        author: ["Sarah Johnson", "Michael Chen", "Priya Patel", "James Wilson"][Math.floor(Math.random() * 4)]
      }));
      
      // Add the new posts to our existing posts
      setPosts([...posts, ...newPosts]);
    } catch (error) {
      console.error("Error fetching more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter posts based on active category
  const filteredPosts = activeCategory === "all" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-blue-800 to-neutral-700 dark:from-white dark:via-blue-300 dark:to-neutral-300 p-2">
          Our Blog
        </h1>
        <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
          Discover inspiring travel adventures and remarkable success stories from around the world
        </p>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 p-1 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
            <button 
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-md transition-all ${
                activeCategory === "all" 
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" 
                  : "hover:bg-neutral-100 dark:hover:bg-neutral-700"
              }`}
            >
              All Posts
            </button>
            <button 
              onClick={() => setActiveCategory("travel")}
              className={`px-4 py-2 rounded-md transition-all ${
                activeCategory === "travel" 
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white" 
                  : "hover:bg-neutral-100 dark:hover:bg-neutral-700"
              }`}
            >
              Travel Stories
            </button>
            <button 
              onClick={() => setActiveCategory("success")}
              className={`px-4 py-2 rounded-md transition-all ${
                activeCategory === "success" 
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" 
                  : "hover:bg-neutral-100 dark:hover:bg-neutral-700"
              }`}
            >
              Success Stories
            </button>
          </div>
        </div>

        <BentoGrid className="max-w-7xl mx-auto">
          {filteredPosts.map((post, i) => (
            <BentoGridItem
              key={i}
              title={
                <div className="flex items-center">
                  {post.icon}
                  <span className="ml-2">{post.title}</span>
                </div>
              }
              description={
                <div>
                  <p className="mb-2">{post.description}</p>
                  <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                    {post.author && <span className="mr-3">{post.author}</span>}
                    {post.readTime && <span>{post.readTime}</span>}
                  </div>
                </div>
              }
              header={
                <div className="relative w-full h-full min-h-[12rem] rounded-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all z-10 rounded-xl"></div>
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.category === "travel" 
                        ? "bg-blue-500/80 text-white" 
                        : "bg-purple-500/80 text-white"
                    }`}>
                      {post.category === "travel" ? "Travel" : "Success"}
                    </span>
                  </div>
                </div>
              }
              className={cn(
                post.featured ? "md:col-span-2" : "",
                "group cursor-pointer hover:shadow-xl transition-all duration-300"
              )}
            />
          ))}
        </BentoGrid>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={fetchMorePosts}
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-70"
          >
            {loading ? "Loading..." : "Load More Stories"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Initial blog posts with detailed content
const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "Hidden Gems of Kyoto",
    description: "Discover the secret temples and gardens that most tourists never see in this ancient Japanese city.",
    category: "travel",
    imageUrl: "https://picsum.photos/600/400?random=1",
    icon: <IconMap className="h-4 w-4 text-blue-500" />,
    featured: true,
    readTime: "8 min read",
    author: "Emma Wilson"
  },
  {
    id: 2,
    title: "From Startup to IPO",
    description: "The remarkable journey of how a small tech startup grew into a billion-dollar company in just 5 years.",
    category: "success",
    imageUrl: "https://picsum.photos/600/400?random=2",
    icon: <IconRocket className="h-4 w-4 text-purple-500" />,
    readTime: "12 min read",
    author: "Michael Chen"
  },
  {
    id: 3,
    title: "Trekking the Inca Trail",
    description: "A day-by-day account of the challenging but rewarding hike to Machu Picchu through the Andes mountains.",
    category: "travel",
    imageUrl: "https://picsum.photos/600/400?random=3",
    icon: <IconMountain className="h-4 w-4 text-green-500" />,
    readTime: "10 min read",
    author: "James Wilson"
  },
  {
    id: 4,
    title: "The Mindset of Champions",
    description: "Interviews with Olympic athletes reveal the mental strategies that helped them achieve gold medal success.",
    category: "success",
    imageUrl: "https://picsum.photos/600/400?random=4",
    icon: <IconStar className="h-4 w-4 text-yellow-500" />,
    featured: true,
    readTime: "15 min read",
    author: "Sarah Johnson"
  },
  {
    id: 5,
    title: "Island Hopping in Greece",
    description: "A guide to exploring the stunning Cyclades islands, from popular Santorini to lesser-known Milos and Naxos.",
    category: "travel",
    imageUrl: "https://picsum.photos/600/400?random=5",
    icon: <IconMap className="h-4 w-4 text-blue-500" />,
    readTime: "9 min read",
    author: "Priya Patel"
  },
  {
    id: 6,
    title: "Building a Sustainable Business",
    description: "How eco-friendly practices led to both environmental impact and increased profits for this innovative company.",
    category: "success",
    imageUrl: "https://picsum.photos/600/400?random=6",
    icon: <IconBuildingSkyscraper className="h-4 w-4 text-teal-500" />,
    readTime: "7 min read",
    author: "Michael Chen"
  },
  {
    id: 7,
    title: "Safari Adventures in Tanzania",
    description: "Witnessing the Great Migration in the Serengeti and encountering the Big Five in their natural habitat.",
    category: "travel",
    imageUrl: "https://picsum.photos/600/400?random=7",
    icon: <IconMap className="h-4 w-4 text-orange-500" />,
    featured: true,
    readTime: "11 min read",
    author: "James Wilson"
  },
  {
    id: 8,
    title: "From Failure to Fortune",
    description: "After three failed startups, this entrepreneur shares the valuable lessons that led to her eventual success.",
    category: "success",
    imageUrl: "https://picsum.photos/600/400?random=8",
    icon: <IconBulb className="h-4 w-4 text-amber-500" />,
    readTime: "13 min read",
    author: "Sarah Johnson"
  },
  {
    id: 9,
    title: "Cultural Immersion in Morocco",
    description: "Exploring the vibrant markets, ancient medinas, and Berber villages of this North African gem.",
    category: "travel",
    imageUrl: "https://picsum.photos/600/400?random=9",
    icon: <IconHeart className="h-4 w-4 text-red-500" />,
    readTime: "9 min read",
    author: "Priya Patel"
  },
];
