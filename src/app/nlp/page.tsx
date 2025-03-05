"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X, Plus, FileText, CheckCircle2, AlertCircle } from "lucide-react"
import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const solutionUseCases = {
  nlp: {
    title: "Natural Language Processing",
    description: "Transform your text data into actionable insights with our advanced NLP solutions.",
    icon: "🤖",
    useCases: [
      {
        title: "Sentiment Analysis",
        description: "Analyze customer feedback, social media posts, and reviews to understand sentiment and emotions.",
        icon: "😊"
      },
      {
        title: "Text Classification",
        description: "Automatically categorize documents, emails, or support tickets into predefined categories.",
        icon: "📑"
      },
      {
        title: "Named Entity Recognition",
        description: "Extract and identify important entities like names, organizations, and locations from text.",
        icon: "🔍"
      }
    ]
  }
};

const FileUploadCard = ({ file, onRemove, index, uploadProgress = 100 }) => (
  <Card className="w-full transform transition-all duration-300 hover:shadow-md">
    <CardContent className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <div className="rounded-lg bg-blue-50 p-2 dark:bg-blue-900/20">
          <FileText className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <p className="font-medium">{file.name}</p>
          <div className="flex items-center space-x-2">
            <div className="h-1.5 w-24 rounded-full bg-gray-200">
              <div 
                className="h-1.5 rounded-full bg-blue-500 transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className="text-sm text-gray-500">
              {uploadProgress === 100 ? (
                <span className="flex items-center text-green-500">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Ready
                </span>
              ) : (
                `${uploadProgress}%`
              )}
            </p>
          </div>
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onRemove(index)}
        className="hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20"
      >
        <X className="h-4 w-4" />
      </Button>
    </CardContent>
  </Card>
);

const SolutionTemplate = ({ solutionType = "nlp" }) => {
  const [files, setFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('idle');
  const solution = solutionUseCases[solutionType];

  const onDrop = useCallback(acceptedFiles => {
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'text/plain': ['.txt'],
      'application/json': ['.json']
    }
  });

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    setUploadStatus('processing');
    // Simulated processing
    setTimeout(() => {
      setUploadStatus('completed');
    }, 2000);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{solution.icon}</span>
              <h1 className="text-xl font-semibold">{solution.title}</h1>
            </div>
          </div>
        </header>
        
        <div className="flex flex-1 flex-col gap-6 p-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black">
          {/* Overview Card */}
          <Card className="border-none shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Overview</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                {solution.description}
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Use Cases Section */}
          <div className="grid gap-6 md:grid-cols-3">
            {solution.useCases.map((useCase, index) => (
              <Card 
                key={index}
                className="transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 "
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{useCase.icon}</span>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">{useCase.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* File Upload Section */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Upload Your Data</CardTitle>
              <CardDescription>
                Upload your files to begin analysis. Supported formats: CSV, TXT, JSON
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* File Upload Area */}
              <div 
                {...getRootProps()} 
                className={`
                  flex flex-col items-center justify-center 
                  border-2 border-dashed rounded-xl p-8 
                  transition-all duration-300
                  ${isDragActive 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                    : 'hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-900/50'
                  }
                `}
              >
                <input {...getInputProps()} />
                <Upload className={`
                  h-12 w-12 mb-4 transition-colors duration-300
                  ${isDragActive ? 'text-blue-500' : 'text-gray-400'}
                `} />
                <span className="text-lg font-medium mb-2">
                  {isDragActive ? 'Drop files here!' : 'Drag & drop files here'}
                </span>
                <span className="text-sm text-gray-500">or click to browse</span>
              </div>

              {/* Uploaded Files List */}
              {files.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">Uploaded Files</h3>
                  <div className="space-y-3">
                    {files.map((file, index) => (
                      <FileUploadCard
                        key={index}
                        file={file}
                        onRemove={removeFile}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              {files.length > 0 && (
                <div className="flex justify-end">
                  <Button 
                    onClick={handleSubmit}
                    className="px-6 py-2 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                    disabled={uploadStatus === 'processing'}
                  >
                    {uploadStatus === 'processing' ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        <span>Processing...</span>
                      </div>
                    ) : uploadStatus === 'completed' ? (
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5" />
                        <span>Completed</span>
                      </div>
                    ) : (
                      'Process Files'
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SolutionTemplate;