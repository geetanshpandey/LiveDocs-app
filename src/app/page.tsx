"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/main/sidebar";
import { toast } from "sonner"; // Import Sonner components
import Link from "next/link";
import { randomInt, randomUUID } from "crypto";

interface Document {
  name: string;
  createdTime: string;
  createdDate: string;
  image: string;
}

const DocumentPage: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const id1 = new Date().toLocaleTimeString();
   

  const addDocument = () => {
    const newDocument: Document = {
      name: "New Document",
      createdTime: new Date().toLocaleTimeString(),
      createdDate: new Date().toLocaleDateString(),
      image: "https://via.placeholder.com/50", // Placeholder image
    };
    setDocuments([...documents, newDocument]);

    // Success notification for document creation
    toast.success("New document created successfully!");
  };

  const deleteDocument = (index: number) => {
    setDocuments(documents.filter((_, i) => i !== index));

    // Error notification for document deletion
    toast.error("Document deleted.");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar/>

      {/* Main Section */}
      <main className="p-6 mt-20 overflow-y-hidden">
        <div className="flex justify-around items-center mb-6 overflow-hidden">
          <h2 className="text-2xl font-semibold">All Documents</h2>
          {/* Action Buttons */}
          <div className="flex">
            <Button
              variant="default"
              className="bg-blue-600"
              onClick={addDocument}
            >
              Add
            </Button>
          </div>
        </div>

        {/* Document List */}
        <div className="flex flex-col items-center gap-4 overflow-auto-y">
          {documents.length > 0 ? (
            documents.map((doc, index) => (
              <Link
                href={`/document/${id1}`}
                key={index}
                className="flex justify-center w-full" // Ensure centering
              >
                <Card className="w-[63%] bg-white dark:bg-gray-800 shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="flex justify-between px-4 py-2 mt-2">
                    <div>
                      <CardTitle className="font-light mb-2 text-lg text-blue-600">{doc.name}</CardTitle>
                      <p className="text-sm text-gray-400">
                        Created: {doc.createdDate} | {doc.createdTime}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 flex justify-end">
                    <Button
                      variant="destructive"
                      size="sm"
                      className="z-50"
                      onClick={(e) => {
                        // Stop the event from triggering the Link navigation
                        e.preventDefault();
                        e.stopPropagation();
                        deleteDocument(index); // Proceed with the deletion
                      }}
                    >
                      Delete
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500">No documents available.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default DocumentPage;
