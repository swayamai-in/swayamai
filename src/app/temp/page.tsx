"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import React from 'react';
import {
  Brain,
  Users,
  TrendingUp,
  BarChart2,
  Search,
  MessageSquare,
  ChevronRight,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Header from "../header/page";

// Define use cases array
const useCases = [
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    shortName: 'NLP',
    icon: MessageSquare,
    description: 'Text analysis, sentiment detection, and language understanding',
    color: 'from-purple-500/90 to-indigo-600/90',
    hoverColor: 'group-hover:from-purple-600/90 group-hover:to-indigo-700/90',
    backgroundImage: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmQ1bWpwazUzcXk2MjQxdDloYWsyZXFjeTYxYXV5MnF6Yjh5cjFteCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5owNSuvkqgLg1iqNrF/giphy.gif',
    path: '/nlp'
  },
  {
    id: 'clustering',
    title: 'Clustering Analysis',
    shortName: 'Cluster',
    icon: Users,
    description: 'Group similar data points and identify patterns',
    color: 'from-blue-500/90 to-cyan-600/90',
    hoverColor: 'group-hover:from-blue-600/90 group-hover:to-cyan-700/90',
    backgroundImage: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWRianBrZWd6MTZ1M3dldGpqYTAya2hpNWlnazJyZWV2b254dml3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YnexM9LwlwGu4Z1QnS/giphy.gif',
    path: '/solutions/clustering'
  },
  {
    id: 'prediction',
    title: 'Predictive Analytics',
    shortName: 'Predict',
    icon: TrendingUp,
    description: 'Forecast future trends and behaviors',
    color: 'from-emerald-500/90 to-teal-600/90',
    hoverColor: 'group-hover:from-emerald-600/90 group-hover:to-teal-700/90',
    backgroundImage: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmtyb2RpZDY1NHpqZWd2aHhsd2JyNGpyZ3ZzeDNsNnN4NGphNG1keCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IcZhFmufozDCij3p22/giphy.gif',
    path: '/solutions/prediction'
  },
  {
    id: 'anomaly',
    title: 'Anomaly Detection',
    shortName: 'Detect',
    icon: Search,
    description: 'Identify unusual patterns and outliers',
    color: 'from-orange-500/90 to-red-600/90',
    hoverColor: 'group-hover:from-orange-600/90 group-hover:to-red-700/90',
    backgroundImage: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3UyYmR3azlycDl1aHk5Z3NvZTc1ZDF4emQzaGZ5bTR5c3MwZmowYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QpVUMRUJGokfqXyfa1/giphy.gif',
    path: '/solutions/anomaly'
  },
  {
    id: 'regression',
    title: 'Regression Analysis',
    shortName: 'Regress',
    icon: BarChart2,
    description: 'Understand relationships between variables',
    color: 'from-pink-500/90 to-rose-600/90',
    hoverColor: 'group-hover:from-pink-600/90 group-hover:to-rose-700/90',
    backgroundImage: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTQxOHI3NjhvMmtzd2V0aHZja20weW55N2UxdndndGwyaG96cW9zeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NsBknNwmmWE8WU1q2U/giphy.gif',
    path: '/solutions/regression'
  },
  {
    id: 'deeplearning',
    title: 'Deep Learning',
    shortName: 'Deep',
    icon: Brain,
    description: 'Complex pattern recognition and neural networks',
    color: 'from-violet-500/90 to-purple-600/90',
    hoverColor: 'group-hover:from-violet-600/90 group-hover:to-purple-700/90',
    backgroundImage: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3EwZ3lhOGJpcXg2cDB0b284M24zOGF4cTh3cmc3bDh1NTlqajJxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7NS9RAepPQ0HJ85qJz/giphy.gif',
    path: '/solutions/deeplearning'
  }
];

const MainContent = () => {
  const router = useRouter();
  
  const handleUseCaseClick = (path) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            AI Solutions Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Select your use case to explore how our AI-powered solutions can transform your data into actionable insights
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              onClick={() => handleUseCaseClick(useCase.path)}
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={useCase.backgroundImage}
                  alt={useCase.title}
                  className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Gradient Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${useCase.color} ${useCase.hoverColor} transition-all duration-300 mix-blend-multiply`}
              />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col z-10">
                <div className="flex items-center justify-between mb-4">
                  <useCase.icon className="w-8 h-8 text-white opacity-90" />
                  <span className="text-sm font-mono text-white/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    {useCase.shortName}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.title}
                </h3>

                <p className="text-white/80 text-sm">
                  {useCase.description}
                </p>

                <div className="mt-auto pt-6 flex items-center text-white/90 text-sm font-medium">
                  Explore Solutions
                  <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      <header className="w-full bg-[#0B1120] border-b border-[#1E2A4A]">
      <div className="flex h-16 shrink-0 items-center gap-2 px-4">
        
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex items-center gap-3">
        <Brain className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">
            Swayam.ai
          </span>
        </div>
      </div>
    </header>
        <div className="flex flex-1 flex-col">
          <MainContent />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}